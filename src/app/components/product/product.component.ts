import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

    public products: Array<Product>;
    /**
     * 添加搜索功能
     * 1.去 app.module.ts中导入ReactiveFormsModule模块
     * import { ReactiveFormsModule } from '@angular/forms';
     * 
     * imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ] 
        2.申明一个titleFilter 是FormControl类型 和 keyword关键字
        3.去页面绑定formControl属性
         <div class="form-group">
            <input [formControl]="titleFilter" type="text" class="form-control" placeholder="请输入商品名称">
        </div>
        4.在构造函数里面订阅如下。
        5.定义管道，返回搜索结果这里滴管道名称是 filterSearch
     */
    public keyword: string;
    private titleFilter: FormControl = new FormControl();

    constructor(private productService: ProductService) {
        this.titleFilter.valueChanges.pipe(
            debounceTime(500), // 当500毫秒沒有新资料，才进行搜索
            distinctUntilChanged(), // 当内容真正有变更时，才进行搜索
        ).subscribe(value => this.keyword = value.toLowerCase())

    }
    ngOnInit() {
        this.productService.getProducts().subscribe(
            productList => this.products = productList
        )
    }
}


