import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Injectable({
    providedIn: 'root'
})
export class ProductDetailResolveGuard implements Resolve<Product> {
    constructor(
        //注入productService服务
        private productService: ProductService) {
    }
    //resolve守卫需要实现以下resolve方法
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {

        let productId = +route.paramMap.get('id');
        let productInfo: Product;
        this.productService.getProduct(productId).subscribe(
            product => productInfo = product
        )
        return productInfo;
    }
}
