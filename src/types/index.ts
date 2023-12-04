import { CustomPage } from '../common-v2/Page';
import { WebsiteConfig } from '../types/config';

export interface IPage {
  config: WebsiteConfig;
  instance: string;
}

export type PagesMap = { [key: string]: CustomPage };

export interface ISubway {
  place: string;
  time: string;
}

export interface IGeo {
  general: string;
  address?: string;
  subway?: ISubway[];
}

export interface IRentData {
  id: number | string;
  title?: string;
  geo: IGeo;
}
