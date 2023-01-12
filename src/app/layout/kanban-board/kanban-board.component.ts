import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
})
export class KanbanBoardComponent implements OnInit {
  dataModel: any = {};
  kanbanBoard: any[] = [
    {
      taskType: 'To Do',
      isAddCard: false,
      tasks: [
        {
          taskName: 'Add Header',
        },
        {
          taskName: 'Add Footer',
        },
      ],
      id: 1,
    },
    {
      taskType: 'In Progress',
      isAddCard: false,

      tasks: [
        {
          taskName: 'Task 1 is in progress',
        },
        {
          taskName: 'Task 2 is in progress',
        },
        {
          taskName: 'Task 3 is in progress',
        },
      ],

      id: 2,
    },
    {
      taskType: 'Testing',
      isAddCard: false,

      tasks: [
        {
          taskName: 'Task 1 is in testing',
        },
        {
          taskName: 'Task 2 is in testing',
        },
      ],
      id: 3,
    },
    {
      taskType: 'Completed',
      isAddCard: false,
      tasks: [],
      id: 4,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addCard(index: number) {
    this.kanbanBoard.forEach((element) => {
      element.isAddCard = false;
    });
    this.kanbanBoard[index].isAddCard = true;
  }

  saveCard(index: number) {
    if (this.dataModel.taskName) {
      this.kanbanBoard[index].tasks.push({
        taskName: this.dataModel.taskName,
      });
      this.kanbanBoard[index].isAddCard = false;
      this.dataModel.taskName = '';
    } else {
      alert('Task name is required');
    }
  }

  closeCard(index: number) {
    this.kanbanBoard[index].isAddCard = false;
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
