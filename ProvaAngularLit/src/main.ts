import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Contatore } from './scripts/contatore'
import { LabelCount } from './scripts/labelcount'
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

customElements.define('my-spinner', Contatore)
customElements.define('label-count', LabelCount)
