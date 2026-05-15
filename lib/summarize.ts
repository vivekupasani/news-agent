import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function summarizeNews(articles: any[]): Promise<string> {
    try {
        const prompt = `
You are a news editor called Mr Khabri.
Select the top 20 most important India news stories from these articles.
Return:
1. Headline
2. 2-line summary
3. Source URL

Articles:
${JSON.stringify(articles)}
`;


        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        return response.text || "";
    } catch (error) {
        return ""
    }
}