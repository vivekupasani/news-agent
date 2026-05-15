import Exa from "exa-js";

const exa = new Exa(process.env.EXA_API_KEY!);

export async function getIndiaNews() {
    const result = await exa.searchAndContents(
        "Top breaking news India today politics business technology sports site:ndtv.com OR site:indianexpress.com OR site:hindustantimes.com OR site:thehindu.com",
        {
            numResults: 3,
            // livecrawl: "always",
        }
    );

    return result.results.map((item: any) => ({
        title: item.title,
        url: item.url,
        text: item.text,
    }));
}