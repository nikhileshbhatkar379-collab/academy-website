# Nikhillesh Bhatkar Learning Academy — Website & Portal

Official responsive website, Study Notes repository, Student Learning Portal, and Admin Dashboard for **Nikhillesh Bhatkar Learning Academy**, Sangameshwar.

---

## 📁 Project Structure

```
academy-website/
├── index.html              # Main homepage
├── enroll.html             # Student enrollment form & demo booking
├── notes.html              # Study Notes & Learning Materials Hub
├── login.html              # Unified Student & Admin Login Portal
├── student.html            # Protected Student Dashboard
├── admin.html              # Full-featured Admin Management Dashboard
├── auth.js                 # Authentication logic & database state
├── admin.js                # Admin Dashboard CRUD controller
├── student.js              # Student Portal controller
├── style.css               # Full responsive stylesheet
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

## 🔐 1. Portal Login Credentials

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

## 📚 2. Study Notes & Materials Hub (`notes.html`)

- **Public & Enrolled Access:** Filter study materials by Standard (**Class 8, 9, 10 SSC, 12 HSC, Stock Market, AI**).
- **Search:** Real-time search by chapter name, concept keyword, or subject.
- **Download & Preview:** One-click note PDF download and instant concept summary preview.

---

## ✉️ 3. Contact & Enrollment Forms (FormSubmit)

Both the **Contact Form** (`index.html`) and the **Enrollment Form** (`enroll.html`) are connected to **FormSubmit** targeting `nikhileshbhatkar379@gmail.com`:

1. When a visitor fills out the contact or enrollment form, FormSubmit packages the submission data and sends it straight to **nikhileshbhatkar379@gmail.com**.
2. **First-Time Activation:** When the very first form is submitted on your live website, FormSubmit sends a one-time verification email to `nikhileshbhatkar379@gmail.com` with a button: **"Activate Form"**.
3. Click that button once to confirm. All subsequent inquiries and admissions will land directly in your inbox!

---

## 🚀 4. How to Test Locally

Start a local server in your terminal:
```bash
cd ~/academy-website
python3 -m http.server 8000
```
Then open:
- **Homepage:** `http://localhost:8000`
- **Study Notes:** `http://localhost:8000/notes.html`
- **Portal Login:** `http://localhost:8000/login.html`
- **Student Portal:** `http://localhost:8000/student.html`
- **Admin Dashboard:** `http://localhost:8000/admin.html`

---

## 🌐 5. Deploying to GitHub Pages (Free Hosting)

```bash
cd ~/academy-website
git add .
git commit -m "Add Notes repository, Student and Admin login portals, and Admin Dashboard"
git remote add origin https://github.com/<your-username>/academy-website.git
git branch -M main
git push -u origin main
```
In your GitHub repo: **Settings → Pages → Source: GitHub Actions**. Your website will be live in 1–2 minutes!
