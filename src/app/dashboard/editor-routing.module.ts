import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorPageComponent } from "./components/dashboard-page/editor-page.component";
import { AppDefaultLayoutComponent } from "../layout/components/default-layout/app-default-layout.component";

const routes: Routes = [
  {
    path: '',
    component: AppDefaultLayoutComponent,
    children: [
      {
        path: '',
        component: EditorPageComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule {
}
