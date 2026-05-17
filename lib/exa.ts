import Exa from "exa-js";

const exa = new Exa(process.env.EXA_API_KEY!);

export async function getIndiaNews() {

    const query = `
    India breaking news today OR latest India news OR top India headlines OR
    India politics OR government OR parliament OR policy OR elections OR
    India business OR economy OR stock market OR startup OR funding OR
    India technology OR AI OR science OR digital OR cybersecurity OR
    India sports OR cricket OR IPL OR football OR Olympics OR
    India world news OR diplomacy OR defense OR climate OR health
    site:ndtv.com OR site:indianexpress.com OR site:hindustantimes.com OR
    site:thehindu.com OR site:livemint.com OR site:moneycontrol.com OR
    site:timesofindia.indiatimes.com OR site:business-standard.com OR
    site:india.com OR site:news18.com OR site:reuters.com
    `;

    const result = await exa.searchAndContents(
        query,
        {
            numResults: 30,
            livecrawl: "always",
            useAutoprompt: true
        }
    );

    return result.results.map((item: any) => ({
        title: item.title,
        url: item.url,
        text: item.text,
    }));
}