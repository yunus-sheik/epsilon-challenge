import { FormComponentComponent } from './form-component/form-component.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponentComponent } from './table-component/table-component.component';

const routes: Routes = [
  {path:'', component: CardComponentComponent},
  {path:'card', component: CardComponentComponent},
  {path:'form', component: FormComponentComponent},
  {path:'table', component:TableComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CardComponentComponent,FormComponentComponent,TableComponentComponent  ]

