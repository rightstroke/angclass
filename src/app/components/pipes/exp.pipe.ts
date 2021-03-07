import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeexp'   
})
export class ExpPipe implements PipeTransform {

  transform(value: number, config:number): unknown {
    return Math.pow(value, isNaN(config) ? 1 : config);;
  }

}
