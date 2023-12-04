import Logger from "log4js";
import { WebsiteConfig } from "../types/config";
import { CustomBrowser } from "./Browser";
import { CustomPage } from "./Page";

interface PagesMap {
  [key: string]: CustomPage
}

export class PagesController {
  map: PagesMap;
  instance: CustomBrowser;
  logger = Logger.getLogger('PagesController');

  constructor(instance: CustomBrowser) {
    this.map = {};
    this.instance = instance;
    this.logger.level = 'debug'
  }

  async init() {
    await this.instance.startBrowser();
  }

  async add(cfg: WebsiteConfig) {
    const page = await this.instance.openPage();
    this.map[cfg.name] = new CustomPage(cfg, page);
    return this.map[cfg.name];
  }

  async delete(key: string) {
    await this.map[key].page.close();
    this.logger.log(`Deleted page: ${key}`);
    delete this.map[key];
  }

  async off() {
    this.logger.log('Started shutdown...')
    for (const key in this.map) {
      await this.delete(key);
    }
    await this.instance.stop();
    this.logger.log('Success shutdown...')
  }
}