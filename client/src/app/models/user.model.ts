import { Base } from './base.model';

export interface IUser extends Base {
  name: string;
  email: string;
  website_url: string;
  linkedin_url: string;
}
