# Demo Usage Guide

## Running the Demo

1. **Install dependencies:**
   - Python backend: `pip install -r requirements.txt`
   - Frontend: `cd demo && pnpm install`

2. **Start the demo:**
   - Run the unified start script: `./demo/start-all.ps1` (Windows PowerShell)
   - Or start manually:
     - Backend: `python src/api.py`
     - Frontend: `pnpm dev` (in `demo/`)

3. **Access the demo:**
   - Open [http://localhost:3001](http://localhost:3001) in your browser.

## Using the Sentiment Analysis Tool
- Enter review text in the input box.
- Click "Analyze" to see sentiment scores (positive, negative, neutral, compound).

## Example Input
```
I absolutely loved this movie! The story was engaging and the acting was top-notch.
```
