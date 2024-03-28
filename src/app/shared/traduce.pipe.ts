import { Pipe, PipeTransform } from '@angular/core';

interface Traducciones {
  [idioma: string]: { [clave: string]: string };
}

@Pipe({
  name: 'traduce'
})
export class TraducePipe implements PipeTransform {
  transform(value: string, idioma: string): string {
    const traducciones: Traducciones = {
      'es': {
        'filtrado': 'Filtrado'
      },
      'en': {
        'filtrado': 'Filtered'
      }
    };

    if (traducciones[idioma] && traducciones[idioma][value]) {
      return traducciones[idioma][value];
    } else {
      return value;
    }
  }
}
