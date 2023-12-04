import Logger from 'log4js';
import { URLSearchParams } from 'url';
import { WebsiteConfig } from '../types/config';
import { Scraper } from './Scraper';
import { request } from './utils/request';

interface IParams {
  [key: string]: string | number;
}

export class CustomPage {
  config: WebsiteConfig;
  name: string;
  logger: Logger.Logger;
  scraper: Scraper;

  constructor(config: WebsiteConfig) {
    this.name = config.name;
    this.config = config;
    this.logger = Logger.getLogger(this.name);
    this.logger.level = 'debug';
  }

  getSearchParams() {
    const params = {
        dealType: 'rent',
        offer_type: 'flat',
        engine_version: '2',
        currency: '3',
        region: '2',
        type: '4',
  
        maxprice: '35000',
        minprice: '20000',
    }
    return new URLSearchParams(params)
  }

  buildUrl() {
    const url = new URL(this.config.url);
    const searchParams = this.getSearchParams();
    searchParams.forEach((value, name) => {
      url.searchParams.append(name, value);
    })
    this.logger.info('request page: ', searchParams);
    return url;
  }

  async getHtmlText() {
    const url = this.buildUrl();
    this.logger.info('request settings: ', url);
    const res = await request(url);
    return res
  }

  async parse() {
    const html = await this.getHtmlText();
    const scraper = new Scraper(html);
    const links = scraper.getLinks();
    console.log(links);
  }

  async scrap() {
    const links = await this.parsePaginatedPage();
    // await this.processLinks(links);
  }

  async processLinks(links: string[]) {
    for (const link of links) {
      this.logger.info(`got link: ${link}`);
      const data = await this.parseRentPage(link);
    }
  }

  async parsePaginatedPage() {

  }

  async parseRentPage(link: string) {
    this.logger.info(`goto link: ${link}`);
    this.logger.info(`scraper start: ${link}`);
    // const data = await Scraper.getAll();
    this.logger.info(`scraper finished: ${link}`);
    // return data;
  }
}
