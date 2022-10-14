import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderPage } from '../pages/loader/loader.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'loader',
    component: LoaderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
