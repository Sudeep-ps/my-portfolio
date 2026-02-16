# My Portfolio

A modern, dark-themed developer portfolio built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Setup Instructions

### 1. Install Framer Motion
```bash
npm install framer-motion
```

### 2. Copy the files into your project
Replace/create these files in your `my-portfolio` project:

```
src/
├── app/
│   ├── page.tsx          ← Replace
│   ├── layout.tsx        ← Replace
│   └── globals.css       ← Replace
├── components/           ← Create this folder
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
tailwind.config.ts        ← Replace
```

### 3. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ✏️ Customize with Your Details

Search for `Your Name` and replace with your actual name in:
- `src/app/layout.tsx` — page title & description
- `src/components/Hero.tsx` — name display & code card
- `src/components/About.tsx` — bio text, city, stats
- `src/components/Contact.tsx` — email & social links footer

Search for `yourusername` and replace with your GitHub/LinkedIn/Twitter usernames in:
- `src/components/Navbar.tsx` — resume link
- `src/components/Hero.tsx` — social links
- `src/components/Projects.tsx` — project GitHub links
- `src/components/Contact.tsx` — social links

Update your actual data in:
- `src/components/Skills.tsx` — your real skill levels
- `src/components/Experience.tsx` — your work history
- `src/components/Projects.tsx` — your real projects

---

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Done! Your site is live at `yourname.vercel.app`

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Syne + Space Mono (Google Fonts)
- **Deployment**: Vercel