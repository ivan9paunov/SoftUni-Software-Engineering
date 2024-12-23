import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice',
  standalone: true
})
export class SlicePipe implements PipeTransform {

  transform(value: string, maxCharCount: number = 5): string {
    const dots =  value.length > maxCharCount ? '...': '';
    return `${value.substring(0, maxCharCount)}${dots}`;
  }

}
