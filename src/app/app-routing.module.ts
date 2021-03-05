import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ListcountryComponent } from './components/listcountry/listcountry.component';
import { UpdatecountryComponent } from './components/updatecountry/updatecountry.component';
import { BooksaddComponent } from './components/booksadd/booksadd.component';
import { BookslistComponent } from './components/bookslist/bookslist.component';


const routes: Routes = [
  {path : 'login', component:LoginComponent},
  {path : 'dashboard',component:DashboardComponent,
    children : [
      {path : 'list', component:ListcountryComponent},
      {path : 'update/:id', component:UpdatecountryComponent},
      {path : '',redirectTo:'list',pathMatch:'full'}    
    ]},
  {path:'bookadd',component:BooksaddComponent},
  {path:'booklist',component:BookslistComponent},
  {path : '',redirectTo:'/login',pathMatch:'full'},
  {path: '**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
