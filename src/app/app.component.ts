import { Component, inject } from '@angular/core';
import { AppModule } from './app.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    imports: [ AppModule ],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DeyApps';

  private readonly translate: TranslateService = inject(TranslateService);

  constructor() {
    this.translate.setDefaultLang('es');
    this.translate.use('es'); // Idioma inicial
  }
}
