import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<any> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;

  constructor(private uiService: UiService) { 
    this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please Add a Task Name!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
