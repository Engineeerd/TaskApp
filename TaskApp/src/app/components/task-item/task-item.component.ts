import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onReminderToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

  onDeleteClick(task: Task) {
    this.onDeleteTask.emit(task);
  }
}
