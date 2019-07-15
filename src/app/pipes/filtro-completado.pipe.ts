import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/index';


@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform( listas: Lista[], completada: boolean ): any {
    return listas.filter( lista => {
      return lista.terminada === completada;
    });
  }

}
