import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDetailResolveGuard } from './guards/product-detail-resolve.guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'product/:id', component: ProductDetailComponent, resolve: {
            productInfo: ProductDetailResolveGuard
        }
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [ProductDetailResolveGuard]
})
export class AppRoutingModule { }
