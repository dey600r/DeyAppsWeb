import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';


export const providePrime = [
  providePrimeNG({ 
      theme: {
          preset: Aura,
          options: {
            darkModeSelector: false,
            cssLayer: {
              name: 'primeng',
              order: 'theme/variables, styles, primeng'
          }
        }
      }
    })
]