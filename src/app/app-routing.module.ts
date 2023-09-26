import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AboutComponent } from './components/about/about.component';
import { DonnerComponent } from './components/donner/donner.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full'},
 { path: 'home',  component: HomeComponent},
 { path: 'inventory',  component: InventoryComponent},
 { path: 'about',  component: AboutComponent},
 { path: 'donner',  component: DonnerComponent},
 { path: 'login',  component: UserFormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
