import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HeaderComponent
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
