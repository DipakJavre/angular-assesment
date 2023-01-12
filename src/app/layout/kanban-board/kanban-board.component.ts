import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
})
export class KanbanBoardComponent implements OnInit {
  kanbanBoard: any[] = [
    {
      taskType: 'To Do',
      tasks: [
        {
          taskName: '',
        },
      ],
      id: 1,
    },
    {
      taskType: 'In Progress',
      tasks: [],
      id: 2,
    },
    {
      taskType: 'Testing',
      tasks: [],
      id: 3,
    },
    {
      taskType: 'Completed',
      tasks: [],
      id: 4,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
