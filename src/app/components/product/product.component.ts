import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

    public products: Array<Product>;
    public keyword: string;
    private titleFilter: FormControl = new FormControl();

    constructor(private productService: ProductService) {
        this.titleFilter.valueChanges.pipe(
            debounceTime(500), // 當 500 毫秒沒有新資料時，才進行搜尋
            distinctUntilChanged(), // 當「內容真正有變更」時，才進行搜尋
        ).subscribe(value => this.keyword = value.toLowerCase())

    }
    ngOnInit() {
        this.productService.getProducts().subscribe(
            productList => this.products = productList
        )
    }
}


