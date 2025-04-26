import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: "item/home", component:HomeComponent},
  {path: "item", redirectTo:"item/home", pathMatch: "full"},
  {path: "", redirectTo:"item/home", pathMatch: "full"},
  {path:"item/create",component:CreateComponent},
  {path:"item/edit/:id",component:EditComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
