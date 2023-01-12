import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanBoardRoutingModule } from './kanban-board-routing.module';
import { KanbanBoardComponent } from './kanban-board.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [KanbanBoardComponent],
  imports: [
    CommonModule,
    KanbanBoardRoutingModule,
    FormsModule,
    DragDropModule,
  ],
})
export class KanbanBoardModule {}
