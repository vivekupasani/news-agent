import { getIndiaNews } from "@/lib/exa";
import { summarizeNews } from "@/lib/summarize";
import { sendNewsEmail } from "@/lib/sendEmail";

export async function GET() {
    try {
        const news = await getIndiaNews();
        const summary = await summarizeNews(news) || "";
        await sendNewsEmail(summary);


        return Response.json({
            success: true,
            message: "Daily news email sent successfully",
        });
    } catch (error) {
        return Response.json({
            success: false,
            error,
        });
    }
}