# Nikhillesh Bhatkar Learning Academy — Website & Portal

Official responsive website, Study Notes repository, Student Learning Portal, Interactive Inquiry Chatbot, and Admin Dashboard for **Nikhillesh Bhatkar Learning Academy**, Sangameshwar.

Supports **Trilingual Localization** (English, Marathi - मराठी, Hindi - हिंदी), zero-dependency client-side database management, FormSubmit email notifications, and mobile-friendly responsive layout.

---

## 📁 Project Structure

```
academy-website/
├── index.html              # Main homepage with syllabus, fees, courses, contact
├── enroll.html             # Student enrollment form & demo booking
├── notes.html              # Study Notes & Learning Materials Hub
├── login.html              # Unified Student & Admin Login Portal
├── student.html            # Protected Student Dashboard & Learning Desk
├── admin.html              # Full-featured Admin Management Dashboard
├── chatbot.js              # Interactive Inquiry Chatbot (Academy AI Assistant)
├── i18n.js                 # Multi-language translation engine (EN / मराठी / हिंदी)
├── auth.js                 # Authentication logic & database state (AcademyDB)
├── admin.js                # Admin Dashboard CRUD controller
├── student.js              # Student Portal controller
├── style.css               # Full responsive stylesheet & glassmorphism UI
├── script.js               # Global interactivity & FormSubmit handlers
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions auto-deployment workflow
├── README.md               # Setup and deployment instructions
│
├── logo.png                # (Optional) Academy logo
├── faculty-nikhillesh.jpg  # (Optional) Nikhillesh Bhatkar's photo
├── faculty-amit.jpg        # (Optional) Amit Pawaskar's photo
└── gallery-1.jpg ... 4.jpg # (Optional) Gallery photos
```

---

## 🤖 1. Interactive Inquiry Chatbot (Academy AI Assistant)

The website features an automated, intelligent, 24/7 **Interactive Inquiry Chatbot**:
- **Instant Answers:** Answers queries about Courses (Classes 8, 9, 10 SSC, 12 HSC), Stock Market & AI courses, Fees & Monthly Installments, Batch Timetables, Faculty (Nikhillesh Sir & Amit Sir), and Sangameshwar location.
- **Trilingual Support:** Responds in **English**, **मराठी (Marathi)**, and **हिंदी (Hindi)** matching the website's language or user query.
- **Conversational Lead Capture:** Step-by-step assistant collects Student Name, Standard/Course, and Mobile Number for Free 2-Day Demo Class booking.
- **Admin Dashboard Integration:** Captured leads are immediately saved to `AcademyDB` (Local Storage) so they appear instantly inside **Admin Dashboard → Inquiries Tab**, dispatches an email alert to `nikhileshbhatkar379@gmail.com` via FormSubmit, and provides a 1-click WhatsApp redirect to connect directly with Nikhillesh Sir.

---

## 🌐 2. Trilingual Support (English | मराठी | हिंदी)

The website features a live Language Switcher (`EN` | `मराठी` | `हिंदी`) in the header across all pages:
- **English (`en`)**: Global standard presentation.
- **Marathi (`mr` / मराठी)**: Tailored for local students and parents in Sangameshwar & Konkan Maharashtra State Board.
- **Hindi (`hi` / हिंदी)**: Complete Hindi translation for wide accessibility.
- Preference is remembered across page navigation using `localStorage`.

---

## 🔐 3. Portal Login Credentials

The website includes a complete authentication and database management system with built-in demo credentials for instant testing:

### ⚙️ Admin Dashboard Login (`login.html` → `admin.html`)
- **Username / Email:** `admin` *(or `nikhileshbhatkar379@gmail.com`)*
- **Password:** `admin123`
- *Features:* Overview metrics, Enrolled student directory, Study notes manager, Notice board broadcasts, Admission inquiries & demo leads, Fee status management, Data export/import (CSV & JSON).
- *Password Change:* You can update your admin password anytime inside **Admin Dashboard → Settings**.

### 🎓 Student Portal Login (`login.html` → `student.html`)
- **Student ID:** `STU-1001` *(or phone: `9822110044`)*
- **PIN / Password:** `student123`
- *Features:* Personalized welcome banner, Class-specific notes & formula books, Real-time academy announcements, Weekly batch timetable, Fee payment status, One-click WhatsApp Doubt Desk to teachers.

*(Note: On the login page, you can also click the **"⚡ One-Click Demo Credentials"** buttons to auto-fill the forms instantly!)*

---

## 📚 4. Study Notes & Materials Hub (`notes.html`)

- **Public & Enrolled Access:** Filter study materials by Standard (**Class 8, 9, 10 SSC, 12 HSC, Stock Market, AI**).
- **Search:** Real-time search by chapter name, concept keyword, or subject.
- **Download & Preview:** One-click note PDF download and instant concept summary preview.

---

## ✉️ 5. Contact & Enrollment Forms (FormSubmit)

Both the **Contact Form** (`index.html`) and the **Enrollment Form** (`enroll.html`) are connected to **FormSubmit** targeting `nikhileshbhatkar379@gmail.com`:

1. When a visitor fills out the contact or enrollment form, FormSubmit packages the submission data and sends it straight to **nikhileshbhatkar379@gmail.com**.
2. **First-Time Activation:** When the very first form is submitted on your live website, FormSubmit sends a one-time verification email to `nikhileshbhatkar379@gmail.com` with a button: **"Activate Form"**.
3. Click that button once to confirm. All subsequent inquiries and admissions will land directly in your inbox!

---

## 🚀 6. How to Test Locally

Start a local server in your terminal:
```bash
cd ~/academy-website
python3 -m http.server 8000
```
Then open in your browser:
- **Homepage:** `http://localhost:8000`
- **Study Notes:** `http://localhost:8000/notes.html`
- **Portal Login:** `http://localhost:8000/login.html`
- **Student Portal:** `http://localhost:8000/student.html`
- **Admin Dashboard:** `http://localhost:8000/admin.html`
- **Enrollment Form:** `http://localhost:8000/enroll.html`

---

## 🌐 7. Deploying to GitHub Pages (Free Hosting)

```bash
cd ~/academy-website
git init
git add .
git commit -m "feat: complete website with Notes, Student/Admin Portals, Chatbot, and Trilingual i18n support"
git remote add origin https://github.com/<your-username>/academy-website.git
git branch -M main
git push -u origin main
```
In your GitHub repo: **Settings → Pages → Source: GitHub Actions** (or Deploy from branch `main`). Your website will be live in 1–2 minutes!
