
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import cssVars from 'css-vars-ponyfill';

cssVars();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));