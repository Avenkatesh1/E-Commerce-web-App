import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProductsComponent } from './Pages/products/products.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ContactComponent } from './Pages/contact/contact.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"/contact",
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
    },
    {
        path:"Register",
        component:RegisterComponent
    },
    {
        path:"contact",
        component:ContactComponent
    }
];
