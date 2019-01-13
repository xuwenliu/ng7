import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService, SubComment } from 'src/app/services/product.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {
    public productInfo: Product;
    public comments: SubComment[];
    constructor(
        private $router: ActivatedRoute,
        private productService: ProductService) {
    }

    ngOnInit() {
        //通过路由参数获取productId，在调用productService的getProduct方法。
        /*  let productId = +this.$router.snapshot.paramMap.get('id');
            this.productService.getProduct(productId).subscribe(
                product => this.productInfo = product
            )
        */

        //通过resolve守卫获得数据 只是将上面的方法在路由resolve守卫里面去调用了
        this.$router.data.subscribe(data => this.productInfo = data.productInfo)

        //通过 上面路由守卫返回的productInfo里面的id属性去获取评论信息，这里没有用路由守卫
        this.productService.getCommentsForProduct(this.productInfo.id).subscribe(
            comments => this.comments = comments
        )
    }

}
