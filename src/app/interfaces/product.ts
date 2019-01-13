export interface Product {
    id: number,
    title: string,
    price: number,
    rating: number, 
    desc: string,
    categories: Array<string>
}

export interface Comment {
    id: number, //评论id
    productId: number,//商品id
    createTime: number,//评论时间
    user: string,//评论人
    rating: number,//评分
    content: string//评论内容
}