import { Login } from './components/login/login';

export const AuthRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
];
