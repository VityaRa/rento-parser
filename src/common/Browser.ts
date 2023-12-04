import Logger from "log4js";
import puppeteer, { Browser } from 'puppeteer';

export class CustomBrowser {
  instance: Browser;
  logger = Logger.getLogger('Browser');

  constructor() {
    this.logger.level = 'debug'
  }

  async startBrowser() {
    try {
      this.logger.info(`Opening the browser`);
      this.instance = await puppeteer.launch({
        headless: false,
        args: ['--disable-setuid-sandbox'],
        ignoreHTTPSErrors: true,
      });
      this.logger.info(`Finished opening the browser`);
      return this.instance;
    } catch (err) {
      this.logger.error('Could not create a browser instance => : ', err);
    }
  }

  async stop() {
    this.logger.info(`Stopping browser instance`)
    await this.instance.close();
    this.logger.info(`Browser instance stopped`)
  }

  async openPage(id?: string) {
    this.logger.info(`Creating page instance: ${id || ''}`)
    const page = await this.instance.newPage()
    this.logger.info(`Page instance created: ${id || ''}`)
    return page;
  }
}
