import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProductsComponent } from './Pages/products/products.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"/Home",
        pathMatch:"full"
    },
    {
        path:"Home",
        component:HomeComponent
    },
    {
        path:"Login",
        component:LoginComponent
    },
    {
        path:"products",
        component:ProductsComponent
    }
];
