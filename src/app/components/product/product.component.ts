import { Component, OnInit, Inject } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

    private products: Array<Product>;
    constructor(private productService: ProductService) { }
    ngOnInit() {
        this.productService.getProducts().subscribe(
            productList => this.products = productList
        )
    }
}


