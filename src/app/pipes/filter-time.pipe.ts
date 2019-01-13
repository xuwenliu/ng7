import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterTime'
})
export class FilterTimePipe implements PipeTransform {

    transform(list: any[], filterFied?: any): any {
        if (!filterFied) {
            filterFied = 'createTime';
        }
        return list.map((item) => {
            item[filterFied] *= 1000;
            return item;
        });
    }

}
