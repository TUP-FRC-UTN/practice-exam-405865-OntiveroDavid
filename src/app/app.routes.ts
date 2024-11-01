import { Routes } from '@angular/router';
import { OrdersCreateComponent } from './orders-create/orders-create.component';
import { OrdersListComponent } from './orders-list/orders-list.component';

export const routes: Routes = [
    { path: '', component: OrdersCreateComponent },
    { path: 'create-order', component: OrdersCreateComponent },
    { path: 'orders', component: OrdersListComponent },
];
