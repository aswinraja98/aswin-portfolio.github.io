# API Reference

## Sentiment Analysis Endpoint

### POST `/api/sentiment`

Analyzes the sentiment of input text using VADER.

#### Request
- **Content-Type:** `application/json`
- **Body:**
  ```json
  {
    "text": "Your review text here."
  }
  ```

#### Response
- **Content-Type:** `application/json`
- **Body:**
  ```json
  {
    "neg": 0.0,
    "neu": 0.5,
    "pos": 0.5,
    "compound": 0.6249
  }
  ```

#### Example
```bash
curl -X POST http://localhost:3001/api/sentiment -H "Content-Type: application/json" -d '{"text": "I love this product!"}'
```
