import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'kanban-board',
    pathMatch: 'full',
  },
  {
    path: 'kanban-board',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./kanban-board/kanban-board.module').then(
            (m) => m.KanbanBoardModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
