import { provideTranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";
import { environment } from "@environments/environment";


export const provideTranslate = [
  provideTranslateService({
      loader: provideTranslateHttpLoader({ prefix: environment.pathTranslate, suffix: '.json' }),
      fallbackLang: 'es'
    })
]