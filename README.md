
# 📄 Sentiment Analysis Tool

A production-ready sentiment analysis system for classifying text as Positive, Negative, or Neutral using VADER (Valence Aware Dictionary and sEntiment Reasoner) in a modern Next.js/React stack. Built for fast, accurate, and interactive sentiment detection.

---

## 🚀 Interactive Demo

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

## 📊 Results & Performance

### Key Achievements
✅ Real-time sentiment classification in browser and API
✅ Accurate detection of positive, negative, and neutral sentiment
✅ No server-side dependencies required
✅ Easy integration into any React/Next.js project

---

## 🚀 Quick Start

### Installation
```bash
git clone https://github.com/aswinraja98/sentiment-analysis-tool-v2.git
cd Portfolio_projects/sentiment-analysis-tool/demo
pnpm install # or npm install
pnpm dev     # or npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

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
│   │   └── SentimentDemoClient.tsx # Demo client logic
│   ├── styles.css
│   └── ...
│
├── data/
│   └── sample_reviews.txt    # Sample input texts
│
├── tests/
│   └── test_sentiment_model.py # Unit tests
│
├── requirements.txt          # Python dependencies (if applicable)
├── LICENSE
└── README.md
```

---

## 📖 Documentation

### Sentiment Analysis Workflow
1. Text Preprocessing: Clean and format input text
2. Sentiment Scoring: Use VADER to calculate sentiment scores
3. Classification: Assign Positive, Negative, or Neutral label
4. Return Result: Display sentiment and score in UI

---

## 🧪 Testing

Run all tests:
```bash
pytest tests/
```

Test specific module:
```bash
pytest tests/test_sentiment_model.py -v
```

---

## 🔬 Notebooks

Explore the interactive Jupyter notebooks in the `notebooks/` directory for step-by-step sentiment analysis demos and evaluation.

---

## 🎓 Learning Resources

- [VADER Paper](https://github.com/cjhutto/vaderSentiment)
- [Sentiment Analysis Overview](https://en.wikipedia.org/wiki/Sentiment_analysis)
- [Text Classification with Python](https://realpython.com/python-nltk-sentiment-analysis/)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

Ashwin Rajakannan

- Medium: [@aswinraja98](https://medium.com/@aswinraja98)
- LinkedIn: [Ashwin Rajakannan](https://www.linkedin.com/in/ashwin-rajakannan)
- Email: [aswinraja98@gmail.com](mailto:aswinraja98@gmail.com)

---

## 🙏 Acknowledgments

- VADER Sentiment Analysis library
- The open-source NLP community

⭐ Star this repo if you find it helpful!
