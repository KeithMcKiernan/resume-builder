import * as Auth0Strategy from 'passport-auth0';
import * as LocalStrategy from 'passport-local';

export class PassportService {

  constructor(private readonly _passport) { }

  private _initializeAuth0() {
    const auth0Strategy = new Auth0Strategy({
      domain: '',
      clientId: '',
      clientSecret: '',
      callbackUrl: '',
    }, () => {

    });
  }

  private _initializeLocalStrategy() {
    const localStrategySettings = {
			usernameField : 'email',
			passwordField : 'password',
			passReqToCallback : true,
		};
  }

  public login() {

  }

  public signup() {

  }
}
