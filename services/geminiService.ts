import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// Note: process.env.API_KEY is expected to be available in the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askGeminiAboutSlide = async (slideTitle: string, slideContent: string, question: string) => {
  try {
    const model = 'gemini-2.5-flash';
    
    const prompt = `
    You are an expert robotics engineer and presenter assistant for a presentation about Unitree Robots and Reinforcement Learning.
    
    Current Slide Title: ${slideTitle}
    Current Slide Context: ${slideContent}
    
    User Question: ${question}
    
    Please answer the user's question concisely and accurately, keeping the tone professional yet accessible. 
    If the question is about the current slide, explain the concept in simple terms.
    If the question is unrelated, politely steer it back to the presentation topic.
    Keep the answer under 150 words.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "抱歉，我现在无法连接到 AI 助手。请检查您的网络或 API Key 设置。";
  }
};
