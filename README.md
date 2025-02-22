# **Captcha Solver API** 🚀  
A lightweight and efficient API to solve text-based captchas using AI-powered Gradio models.  

## **Features** ✨  
✅ Process captchas **directly from memory** (no file storage).  
✅ Uses **Gradio AI model** to decode text captchas.  
✅ Fast and efficient, designed for **high concurrency**.  
✅ Built with **Express.js** and `@gradio/client`.  

## **Installation** 🛠️  
Clone the repository and install dependencies:  
```bash
git clone git@github.com:kiennh23/captcha-resolver.git
cd captcha-solver
npm install
```

## **Usage** 🚀  
### **Run the server**  
```bash
npm start
```
By default, the API runs on `http://localhost:8080`.  

### **Resolve Captcha**  
Send a `POST` request with an image file:  
```bash
curl -X POST http://localhost:8080/resolve-captcha \
     -F "file=@captcha.png"
```

#### **Response Example**  
```json
"4b7k2"
```

## **How It Works** ⚡  
1. Accepts an image file via `multipart/form-data`.  
2. Converts the image **directly into memory** (avoiding disk I/O).  
3. Sends the image to **Gradio AI model** for processing.  
4. Returns the extracted captcha text.  

## **Environment Variables** 📌  
| Variable        | Description                              | Default |
|---------------|--------------------------------------|---------|
| `PORT`        | API port number                     | `8080`  |
| `GRADIO_MODEL` | Gradio model identifier            | `FatBoyEnglish/Text_Captcha_breaker` |

