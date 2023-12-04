import Logger from "log4js";

import { Page } from "puppeteer";
import { WebsiteConfig } from "../types/config";
import { Files } from "./Files";
import { Scraper } from "./Scraper";

export class CustomPage {
  config: WebsiteConfig;
  page: Page;
  name: string;
  logger: Logger.Logger;

  constructor(config: WebsiteConfig, pageInstance: Page) {
    this.name = config.name;
    this.config = config;
    this.page = pageInstance;
    this.logger = Logger.getLogger(this.name);
    this.logger.level = 'debug'
  }

  async scrapRentInfo() {
    this.logger.info('Started scraping: ', this.page.url())
    const data = await Scraper.getAll(this.page);
    await Files.gen(`${data.id}`, data);
    this.logger.info('Finished scraping with success: ', this.page.url())
    return data;
  }



  // async scrap() {
  //   this.logger.info('start scraping')
  //   await this.page.goto(this.config.url);
  //   this.logger.info(`on page: ${this.config.url}`);
  //   await this.page.waitForSelector(this.config.cardSelector, {
  //     timeout: 6000,
  //   });
  //   this.logger.info(`wait for selector: ${this.config.cardSelector}`);

  //   const links = await this.parsePaginatedPage();
  //   await this.processLinks(links);
  // }

  // async processLinks(links: string[]) {
  //   for (const link of links) {
  //     this.logger.info(`got link: ${link}`);
  //     const data = await this.parseRentPage(link);
  //     console.info(data);
  //     this.page.goBack();
  //   }
  // }

  // async parsePaginatedPage() {
  //   return await this.page.$$eval(this.config.cardSelector, (a) =>
  //     a.map((e: HTMLLinkElement) => e.href)
  //   );
  // }

  // async parseRentPage(link: string) {
  //   this.logger.info(`goto link: ${link}`);
  //   await Promise.all([
  //     this.page.goto(link),
  //     this.page.waitForNavigation(),
  //   ])
  //   this.logger.info(`scraper start: ${link}`);
  //   const data = await Scraper.getAll(this.page);
  //   this.logger.info(`scraper finished: ${link}`);
  //   return data;
  // }
}