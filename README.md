# Nikhillesh Bhatkar Learning Academy — Website

Official responsive website for **Nikhillesh Bhatkar Learning Academy**, Sangameshwar.

---

## 📁 Project Structure

```
academy-website/
├── index.html              # Main homepage
├── enroll.html             # Student enrollment form page
├── style.css               # Full responsive stylesheet
├── script.js               # Interactivity & Formspree AJAX handlers
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions auto-deployment workflow
├── README.md               # Setup and deployment instructions
│
├── logo.png                # (Optional) Academy logo
├── faculty-nikhillesh.jpg  # (Optional) Nikhillesh Bhatkar's photo
├── faculty-amit.jpg        # (Optional) Amit Pawaskar's photo
├── gallery-1.jpg ... 4.jpg # (Optional) Gallery photos
└── favicon.ico             # (Optional) Browser favicon
```

---

## 🚀 1. How to Test Locally

You can open the website in your browser right away:
- Double-click `index.html` or open it directly in Chrome / Safari / Firefox.
- Or start a quick local server in your terminal:
  ```bash
  cd ~/academy-website
  python3 -m http.server 8000
  ```
  Then open `http://localhost:8000` in your browser.

---

## ✉️ 2. Setting Up the Contact & Enrollment Forms (Formspree)

Both the **Contact Form** (`index.html`) and the **Enrollment Form** (`enroll.html`) are pre-wired for **Formspree** (free service, no backend server required):

1. Go to **[https://formspree.io](https://formspree.io)** and create a free account with your email (`nikhileshbhatkar379@gmail.com`).
2. Click **"+ New Form"**, give it a name (e.g., *Academy Inquiries*), and copy the form endpoint URL (format: `https://formspree.io/f/xyzab123`).
3. In `index.html` and `enroll.html`, replace `YOUR_FORMSPREE_ID` with your form ID:
   ```html
   <!-- Before: -->
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">

   <!-- After: -->
   <form id="contactForm" action="https://formspree.io/f/xyzab123" method="POST">
   ```
4. All messages and student enrollments will now land straight in your inbox!

---

## 🌐 3. Deploying to GitHub Pages (Free Hosting)

To make your website live on the internet with a free `https://<your-username>.github.io/academy-website` URL:

### Step A: Initialize Git and Commit
In your terminal, run:
```bash
cd ~/academy-website
git init
git add .
git commit -m "Initial commit: Nikhillesh Bhatkar Learning Academy website"
```

### Step B: Create a GitHub Repository
1. Go to **[https://github.com/new](https://github.com/new)** and create a new repository named `academy-website` (set to Public).
2. Connect and push your local files:
   ```bash
   git remote add origin https://github.com/<your-username>/academy-website.git
   git branch -M main
   git push -u origin main
   ```

### Step C: Enable GitHub Pages
1. In your GitHub repository, go to **Settings** → **Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions** (the `.github/workflows/deploy.yml` workflow will automatically build and publish your site).
3. Within 1-2 minutes, your website is live!

---

## 🎨 4. Customizing Images & Content

- **Logo:** Save your logo file as `logo.png` in `academy-website/`.
- **Faculty Photos:** Save photos as `faculty-nikhillesh.jpg` and `faculty-amit.jpg`.
- **Gallery Images:** Add images named `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`, `gallery-4.jpg`.
- **Testimonials:** Edit the quotes in `index.html` under the `<section id="testimonials">` block.
