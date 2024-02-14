import puppeteer from "puppeteer";

class automationService {
    printBrowser = async (url) => {   
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: false,
            userDataDir: "./tmp"
        });

        const page = await browser.newPage();
        await page.goto(url);

        //Aberta no botão para mostrar as opções de blocos
        const button = await page.waitForSelector('[data-testid="btn-builder-open-menublocks"]', { visible: true });
        await button.click();

        //await browser.close();


    }
}

export default new automationService();