import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'DCT'
})
export class DctPipe implements PipeTransform {

    transform(value: number): string {
        return Math.floor(value / 10000) / 10000 + ' DCT';
    }
}
