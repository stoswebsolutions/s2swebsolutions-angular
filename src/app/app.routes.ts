import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Home } from './header/home/home';
import { Footer } from './footer/footer';
import { About } from './about/about';
import { Price } from './price/price';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Websitedesign } from './websitedesign/websitedesign';
import { Webdevelopment } from './webdevelopment/webdevelopment';
import { Appdevelopment } from './appdevelopment/appdevelopment';
import { Ecommerce } from './ecommerce/ecommerce';
import { Cms } from './cms/cms';
import { Webhosting } from './webhosting/webhosting';
import { Logodesigning } from './logodesigning/logodesigning';
import { Digitalmarketing } from './digitalmarketing/digitalmarketing';
import { Seo } from './seo/seo';
import { Internship } from './internship/internship';
import { Domain } from './internship/domain/domain';
import { Hoome } from './internship/hoome/hoome';
import { Roadmap } from './internship/roadmap/roadmap';
import { Joinnow } from './internship/joinnow/joinnow';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'header', component: Header },
  { path: 'home', component: Home },
  { path: 'footer', component: Footer },
  { path: 'about', component: About },
  { path: 'price', component: Price },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: 'websitedesign', component: Websitedesign },
  { path: 'webdevelopment', component: Webdevelopment },
  { path: 'appdevelopment', component: Appdevelopment },
  { path: 'ecommerce', component: Ecommerce },
  { path: 'cms', component: Cms },
  { path: 'webhosting', component: Webhosting },
  { path: 'logodesigning', component: Logodesigning },
  { path: 'digitalmarketing', component: Digitalmarketing },
  { path: 'seo', component: Seo },
  { path: 'internship', component: Internship },
  { path:'domain',component:Domain},
  {path:'hoome',component:Hoome},
  {path:'roadmap',component:Roadmap},
  {path:'joinnow',component:Joinnow}
  

];
