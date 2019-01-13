import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
    name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

    transform(list: Product[], filterFiled: string, keyWord: string): any {
        if (!filterFiled || !keyWord) {
            return list;
        }

        return list.filter(item => {
            return item[filterFiled].toLowerCase().indexOf(keyWord) >= 0;
        });
    }

}
