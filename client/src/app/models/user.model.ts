import { Base } from './base.model';

export interface User extends Base {
  name: string;
  email: string;
  website_url: string;
  linkedin_url: string;
}
