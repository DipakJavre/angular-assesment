import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanBoardRoutingModule } from './kanban-board-routing.module';
import { KanbanBoardComponent } from './kanban-board.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [KanbanBoardComponent],
  imports: [CommonModule, KanbanBoardRoutingModule, FormsModule],
})
export class KanbanBoardModule {}
