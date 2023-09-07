import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'prefix' }, //redirect to the user
  {
    path: 'user',
    children: [
      { path: '', redirectTo: 'user-table', pathMatch: 'prefix' }, // redirect to the uer-table
      { path: 'user-table', component: TableComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
