import multer from "multer";
import express from "express";
import { Client } from "@gradio/client";

const app = express();
const port = 8080;
const upload = multer();

app.post("/resolve-captcha", upload.single("file"), async (req, res) => {
   if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
   }

   const resolveCaptcha = async (buffer) => {
      try {
         const client = await Client.connect("FatBoyEnglish/Text_Captcha_breaker");
         const imageBlob = new Blob([buffer], { type: "image/png" });
         const result = await client.predict("/predict", { img_org: imageBlob });
         return result?.data?.[0] || null;
      } catch (error) {
         console.error("Error resolving captcha:", error);
         return null;
      }
   };

   const captchaText = await resolveCaptcha(req.file.buffer);

   if (!captchaText) {
      return res.status(500).json({ error: "Failed to decode captcha" });
   }

   res.json({ captchaText });
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
