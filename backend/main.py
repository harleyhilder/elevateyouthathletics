import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Elevate Youth Athletics API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:4173",
        os.getenv("FRONTEND_URL", ""),
    ],
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    school: str
    email: EmailStr
    phone: str = ""
    interest: str
    message: str


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.post("/api/contact")
async def contact(form: ContactForm):
    email_host = os.getenv("EMAIL_HOST", "smtp.gmail.com")
    email_port = int(os.getenv("EMAIL_PORT", "587"))
    email_user = os.getenv("EMAIL_USER")
    email_pass = os.getenv("EMAIL_PASS")
    notify_email = os.getenv("NOTIFY_EMAIL", email_user)

    if not email_user or not email_pass:
        # Email not configured — still return 200 so the form UX works during dev
        print(f"[CONTACT FORM] {form.name} | {form.email} | {form.interest}")
        print(f"School: {form.school}")
        print(f"Message: {form.message}")
        return {"status": "ok", "note": "Email not configured — logged to console"}

    interest_labels = {
        "school-contract": "School Contract (Ongoing PE Program)",
        "field-day": "Field Day / One-Day Sport Event",
        "general": "General Inquiry",
    }

    subject = f"New Inquiry: {interest_labels.get(form.interest, form.interest)} — {form.name}"

    body = f"""
New contact form submission from the Elevate Youth Athletics website.

Name:         {form.name}
School/Org:   {form.school}
Email:        {form.email}
Phone:        {form.phone or "Not provided"}
Interest:     {interest_labels.get(form.interest, form.interest)}

Message:
{form.message}
"""

    msg = MIMEMultipart()
    msg["From"] = email_user
    msg["To"] = notify_email
    msg["Reply-To"] = form.email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP(email_host, email_port) as server:
            server.starttls()
            server.login(email_user, email_pass)
            server.sendmail(email_user, notify_email, msg.as_string())
    except Exception as e:
        print(f"[EMAIL ERROR] {e}")
        raise HTTPException(status_code=500, detail="Failed to send email")

    return {"status": "ok"}
