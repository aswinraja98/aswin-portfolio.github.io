<<<<<<< HEAD
<div align="center">
<h1>🤖 Ashwin Rajakannan</h1>
<h3>AI/ML & Data Developer Portfolio</h3>
<p><i>Turning data into intelligent systems through NLP, machine learning, and scalable pipelines</i></p>
</div>

---

## 🚀 About This Portfolio

A modern, professional portfolio showcasing my journey in AI/ML development - from building NLP models with Transformers to engineering data pipelines with Docker and Flask. Features a premium dark theme with teal accents, designed to reflect the technical sophistication of AI/ML work.

**Live Portfolio**: [Your deployment URL here]

## ✨ Key Features

- 🎨 **Premium Dark Theme** - Deep charcoal (#0B0C10) with teal/cyan accents (#06B6D4, #22D3EE)
- 🌓 **Dual Mode Support** - Seamless light/dark theme switching
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 💼 **AI/ML Focused** - Showcases NLP projects, data pipelines, and machine learning work
- 🎓 **Certifications Section** - Clickable badges for Python, ML, Azure, DSA, and Data Science certifications
- 📧 **Working Contact Form** - Integrated with FormSubmit for direct email submissions
- 🔝 **Smooth UX** - Scroll-to-top button, smooth navigation, neon glow effects
- ⚡ **Optimized Performance** - Built with Next.js 14 for blazing-fast load times

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18, TypeScript)
- **Styling**: TailwindCSS with custom teal theme
- **UI Components**: Shadcn/UI, Magic UI
- **Animations**: Framer Motion for smooth transitions
- **Form Handling**: FormSubmit for contact form
- **Icons**: Lucide React
- **Deployment Ready**: Vercel, Netlify, or any Node.js hosting

## 📂 Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── page.tsx      # Main portfolio page
│   │   ├── layout.tsx    # Root layout with theme provider
│   │   └── globals.css   # Global styles and theme variables
│   ├── components/       # React components
│   │   ├── ui/           # Shadcn UI components
│   │   ├── magicui/      # Magic UI components
│   │   ├── resume-card.tsx
│   │   ├── project-card.tsx
│   │   └── navbar.tsx
│   ├── data/
│   │   └── resume.tsx    # 📝 Edit this file with your information
│   └── lib/
│       └── utils.ts      # Utility functions
├── public/               # Static assets (resume.pdf, logos, etc.)
└── content/              # MDX blog posts (optional)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aswinraja98/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your resume PDF**
   - Place your resume as `resume.pdf` in the `public/` folder

4. **Customize your information**
   - Edit `src/data/resume.tsx` with your:
     - Personal details (name, email, phone, location)
     - Work experience
     - Education
     - Skills
     - Projects
     - Social links

5. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

6. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 🎨 Customization

### Theme Colors
Edit `src/app/globals.css` to customize the teal theme:
```css
--primary: 188 95% 44%;     /* Teal accent */
--accent: 188 95% 44%;      /* Teal accent */
--background: 220 13% 4%;   /* Dark background */
```

### Contact Form
The contact form uses FormSubmit. To receive submissions:
1. First submission triggers a confirmation email
2. Click the confirmation link in your email
3. All future submissions go directly to your inbox

### Components
- `resume-card.tsx` - Work experience & education entries
- `project-card.tsx` - Project showcases
- `navbar.tsx` - Bottom dock navigation
- `page.tsx` - Main portfolio layout and sections


1. **Hero** - Introduction with "Get Resume" and "Contact" CTAs
2. **About** - Professional summary highlighting AI/ML expertise
3. **Work Experience** - Timeline of roles at Assisto, Nirvoday, SATURAM
4. **Education** - Academic background from Anna University and SRM
5. **Skills** - Technical stack organized by category
6. **Projects** - AI/ML projects with descriptions and links
7. **Certifications** - Clickable badges linking to credentials
8. **Contact** - Working form with Name, Email, and Message fields

### Netlify
```bash

## 📄 License

MIT License - Copyright (c) 2025 Ashwin Rajakannan

## 🤝 Connect With Me

- **GitHub**: [@aswinraja98](https://github.com/aswinraja98)
- **LinkedIn**: [Ashwin Rajakannan](https://www.linkedin.com/in/ashwin-rajakannan-094876189)
- **Email**: aswinraja98@gmail.com

---

<div align="center">
<p>Built with ❤️ using Next.js, TailwindCSS, and modern web technologies</p>
<p><i>Driven by curiosity and precision, turning data into intelligent systems</i></p>
</div>

=======

# 📄 Sentiment Analysis Tool

A production-ready sentiment analysis system for classifying text as Positive, Negative, or Neutral using VADER (Valence Aware Dictionary and sEntiment Reasoner) in a modern Next.js/React stack. Built for fast, accurate, and interactive sentiment detection.

---

Try the live demo interface to see sentiment analysis in action! Paste any text and instantly view its sentiment classification and score.

📍 **Demo Interface:** See the `demo/` folder for a Next.js/React frontend for interactive sentiment analysis.

> The demo folder contains a web interface that can be integrated with this JavaScript backend to create a full-stack application. See `demo/README.md` for integration instructions.

---

## 🎯 Problem Statement

In today's digital world, understanding user sentiment is crucial for businesses, researchers, and developers. Manual sentiment analysis is time-consuming and subjective. There's a need for automated systems that can:

- Accurately classify text sentiment (positive, negative, neutral)
- Provide real-time feedback for user-generated content
- Integrate easily into web applications
- Scale to production environments

---

## 💡 Solution

This project implements a robust sentiment analysis tool using VADER:

- **VADER Sentiment Analysis**: Lexicon and rule-based sentiment analysis specifically designed for social media and short texts.
- **Next.js API Route**: Sentiment analysis runs directly in the API route for seamless integration.
- **No Backend Required**: All logic is handled in JavaScript, making deployment simple and fast.

---

## 🛠️ Tech Stack

### Core Technologies
- JavaScript/TypeScript
- Next.js (React framework)
- VADER sentiment analysis (ported to JS)
- Tailwind CSS (UI styling)

### Additional Libraries
- react-icons (UI icons)
- Node.js (runtime)

---

✅ Real-time sentiment classification in browser and API
✅ Accurate detection of positive, negative, and neutral sentiment
✅ No server-side dependencies required
✅ Easy integration into any React/Next.js project

---

## 🚀 Quick Start

pnpm install # or npm install
pnpm dev     # or npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

<img width="501" height="748" alt="Sentiment Analysis Demo" src="https://github.com/user-attachments/assets/f566323c-6c21-4811-b7f5-381e5a2c479f" />

### Basic Usage

Paste any text into the demo interface and view the sentiment classification and score instantly.

---

## 📁 Project Structure

```
sentiment-analysis-tool/
│
├── src/
│   ├── api.py                # Python API (if using Python backend)
│   ├── sentiment_model.py    # Sentiment analysis logic
│   └── ...
│
├── demo/
│   ├── pages/
│   │   ├── index.tsx         # Main demo page
│   └── ...
│
├── data/
│   └── sample_reviews.txt    # Sample input texts
│
├── tests/
│   └── test_sentiment_model.py # Unit tests
└── README.md

---

## 📖 Documentation

### Sentiment Analysis Workflow
1. Text Preprocessing: Clean and format input text
2. Sentiment Scoring: Use VADER to calculate sentiment scores
3. Classification: Assign Positive, Negative, or Neutral label
4. Return Result: Display sentiment and score in UI

---
