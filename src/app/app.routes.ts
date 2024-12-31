import { Routes } from '@angular/router';
import { ClientListComponent } from './shared/components/client-list/client-list.component';
import { ClientViewComponent } from './pages/client-view/client-view.component';

export const routes: Routes = [
    {
        path:'',
        component: ClientListComponent,
    }
    ,
    {
        path: 'client/:id',
        component: ClientViewComponent,
    }
];
