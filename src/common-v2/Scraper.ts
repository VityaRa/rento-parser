import cheerio from "cheerio";
import { IRentData } from "../types";
// export abstract class Scraper {
//   // static async getInnerText(
//   //   page: Page,
//   //   selector: string,
//   //   errorPlaceholder?: string
//   // ) {
//   //   try {
//   //     return await page.$eval(selector, (el: HTMLElement) => el.innerText);
//   //   } catch (e) {
//   //     return errorPlaceholder;
//   //   }
//   // }

//   // static async title(page: Page, errorPlaceholder = '[ERROR]') {
//   //   return await this.getInnerText(
//   //     page,
//   //     'div[data-name="OfferTitle"] h1',
//   //     errorPlaceholder
//   //   );
//   // }

//   // static async placementGeneral(page: Page, errorPlaceholder = '[ERROR]') {
//   //   return await this.getInnerText(
//   //     page,
//   //     'div[data-name="Parent"]',
//   //     errorPlaceholder
//   //   );
//   // }

//   // static async getAll(page: Page): Promise<IRentData> {
//   //   await page.waitForSelector('#frontend-offer-card', { timeout: 4000 });
//   //   const title = await this.title(page);
//   //   const general = await this.placementGeneral(page);
//   //   return {
//   //     title,
//   //     geo: {
//   //       general,
//   //       // address,
//   //       // subway,
//   //     },
//   //   };
//   // }
  
// }

export class Scraper {
  $: cheerio.Root;
  constructor(html: string) {
    this.$ = cheerio.load(html);
  }

  getLinks() {
    return this.$('div[data-name="LinkArea"] > a');
  }

  getTitle() {
    this.$('')
  }
}