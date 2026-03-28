# Umang Kuwar — Portfolio Website

A high-end, production-grade developer portfolio built with HTML, CSS, and JavaScript.

## 📁 Folder Structure

```
umang-portfolio/
│
├── index.html              ← Main HTML file
├── style.css               ← All styles (glassmorphism, neon, animations)
├── script.js               ← All JavaScript (particles, typing, scroll, etc.)
├── Umang_Resume_Doc_NPAV.docx  ← Your resume (copy here for download button)
└── README.md               ← This file
```

---

## ✅ Before Going Live — Personalize It

Open `index.html` and update:

| Find | Replace With |
|---|---|
| `github.com/umangkuwar` | Your actual GitHub URL |
| `linkedin.com` href | Your actual LinkedIn URL |
| `Umang_Resume_Doc_NPAV.docx` in download links | Keep same name or rename |
| Footer year | Update if needed |

---

## 🚀 Deploy on GitHub Pages (Free)

### Step 1 — Create GitHub Account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create Repository
1. Click **"New Repository"**
2. Name it: `umangkuwar.github.io`  
   *(Replace `umangkuwar` with your actual GitHub username)*
3. Set to **Public**
4. Click **"Create Repository"**

### Step 3 — Upload Files
1. Click **"uploading an existing file"**
2. Drag and drop ALL 3 files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `Umang_Resume_Doc_NPAV.docx` (optional, for resume download)
3. Scroll down → Click **"Commit changes"**

### Step 4 — Enable GitHub Pages
1. Go to your repository **Settings** (top menu)
2. Scroll to **"Pages"** in the left sidebar
3. Under **Source**, select: **Deploy from a branch**
4. Branch: **main** → Folder: **/ (root)**
5. Click **Save**

### Step 5 — Wait 2 Minutes
Your site will be live at:  
👉 **`https://umangkuwar.github.io`**

---

## ⚡ Alternative: Deploy on Netlify (Even Faster)

1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Drag your entire `umang-portfolio/` folder into the dashboard
3. Live instantly at `umangkuwar.netlify.app`
4. You can rename the subdomain in Settings

---

## 🔗 Connect Your Contact Form

The contact form currently shows a success animation but doesn't actually send emails.

To make it work, use **Formspree** (free):

1. Go to [formspree.io](https://formspree.io) → Sign up
2. Create a new form → Get your form ID (e.g., `xpzgkabw`)
3. In `index.html`, find the `<form` tag and change it to:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Remove the `e.preventDefault()` in script.js contact form section

---

## 🎨 Customization

### Change Neon Color
In `style.css`, find:
```css
--neon: #00ff88;
```
Change to any color you like, e.g.:
- Blue neon: `#00aaff`
- Purple neon: `#aa00ff`
- Orange neon: `#ff6600`

### Add Your Profile Photo
In `index.html`, find the `.avatar-initials` div and replace with:
```html
<img src="your-photo.jpg" alt="Umang Kuwar" style="width:140px;height:140px;border-radius:50%;object-fit:cover;">
```

---

## 📱 Features
- ✅ Fully responsive (mobile + tablet + desktop)
- ✅ Custom cursor with smooth trailing
- ✅ Particle canvas background
- ✅ Typing animation (6 rotating titles)
- ✅ Scroll reveal animations
- ✅ Animated skill progress bars
- ✅ Project cards with hover glow effects
- ✅ Timeline experience section
- ✅ Contact form with success feedback
- ✅ Downloadable resume button
- ✅ SEO meta tags
- ✅ Dark glassmorphism theme
- ✅ No external dependencies (pure HTML/CSS/JS)
