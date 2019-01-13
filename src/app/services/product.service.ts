import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, Comment } from '../interfaces/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    //模拟商品数组
    private products: Array<Product> = [
        new SubProduct(1, 'iphone XS', 10000, 3.5, '采用全面屏设计,配备两种尺寸的超视网膜显示屏,更拥有原深感摄像头、面容 ID、双镜头系统,以及 A12 仿生这款强大的芯片。', ['Angular', 'Vue', 'React']),
        new SubProduct(2, 'OPPO R11', 2999, 1.5, '这一次,深受年轻人喜爱的 OPPO 拍照手机又有了新的影像革新。OPPO R11 系列拥有前后 2000 万高清像素,内部更采用旗舰影像处理器。', ['Angular', 'Vue', 'React']),
        new SubProduct(3, 'OPP0 R17', 3999, 4.5, 'OPPO R17|R17 Pro 水滴屏设计超大广角,光感屏幕指纹闪速解锁,AI智能拍照更清晰2000 万高清像素,内部更采用旗舰影像处理器。', ['Angular', 'Vue', 'React']),
        new SubProduct(4, '华为 meta 20', 5999, 3.5, '非凡双屏，突破未来,HUAWEI Mate 20 X搭载华为迄今最卓越智能的 7nm 制程 SoC 麒麟 980 芯片, 7.2 英寸全景巨幕屏,震撼视界', ['Angular', 'Vue', 'React']),
        new SubProduct(5, '华为Meta20Pro', 6999, 4.5, '非凡双屏，突破未来,HUAWEI Mate 20 X搭载华为迄今最卓越智能的 7nm 制程 SoC 麒麟 980 芯片, 7.2 英寸全景巨幕屏,震撼视界', ['Angular', 'Vue', 'React']),
        new SubProduct(6, 'Vivo Nex', 4999, 2.5, '非凡双屏，突破未来,HUAWEI Mate 20 X搭载华为迄今最卓越智能的 7nm 制程 SoC 麒麟 980 芯片, 7.2 英寸全景巨幕屏,震撼视界', ['Angular', 'Vue', 'React']),
    ]
    //模拟评论数组
    private comments: SubComment[] = [
        new SubComment(1, 1, 1537595580, '刘德华', 4.5, '我觉得iphone XS 非常不错'),
        new SubComment(2, 1, 1537595580, '万飞', 4.5, '我觉得iphone XS 很非常不错'),
        new SubComment(3, 1, 1537595580, '来弄', 4.5, '我觉得iphone XS 非常好用'),

        new SubComment(4, 2, 1537586580, '郭富城', 3, '我觉得OPPO R11 非常不错'),
        new SubComment(5, 2, 1537586580, '黎明', 3, '我觉得OPPO R11 非常好用'),
        new SubComment(6, 2, 1537586580, '郭富城', 3, '我觉得OPPO R11 非常不错'),

        new SubComment(7, 3, 1537597580, '冯提莫', 3, '我觉得OPPO R17 非常不错'),
        new SubComment(8, 3, 1537597580, '张学友', 3, '我觉得OPPO R17 非常不错'),
        new SubComment(9, 3, 1537597580, '郭富城', 3, '我觉得OPPO R17 非常好用'),

        new SubComment(10, 4, 1537567580, '郭富城', 3, '我觉得OPPO R17 非常不错'),
        new SubComment(11, 4, 1537567580, '黎明', 3, '我觉得OPPO R17 非常好用'),
        new SubComment(12, 4, 1537567580, '郭富城', 3, '我觉得OPPO R17 非常不错'),

        new SubComment(13, 5, 1537588580, '郭富城', 4, '我觉得华为 meta 20 非常不错'),
        new SubComment(14, 5, 1537548580, '张学友', 4, '我觉得华为 meta 20 非常好用'),
        new SubComment(15, 5, 1537538580, '黎明', 4, '我觉得华为 meta 20 非常不错'),

        new SubComment(16, 6, 1537295580, '郭富城', 5, '我觉得Vivo Nex 非常不错'),
        new SubComment(17, 6, 1537295580, '冯提莫', 5, '我觉得Vivo Nex 非常好用'),
        new SubComment(18, 6, 1537295580, '张学友', 5, '我觉得Vivo Nex 非常不错'),
    ]
    constructor() { }

    //获取所以商品数组
    getProducts(): Observable<Product[]> {
        return of(this.products);
    }

    //通过商品id获取该条商品信息
    getProduct(id: number): Observable<Product> {
        return of(this.products.find((product: Product) => id === product.id));
    }

    //通过商品id获取评论数组
    getCommentsForProduct(id: number): Observable<SubComment[]> {
        return of(this.comments.filter((comment: SubComment) => id === comment.productId));
    }
}

//SubProduct 类实现Product接口
export class SubProduct implements Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>
    ) {

    }

}

export class SubComment implements Comment {
    constructor(
        public id: number, //评论id
        public productId: number,//商品id
        public createTime: number,//评论时间
        public user: string,//评论人
        public rating: number,//评分
        public content: string//评论内容
    ) {

    }
}
