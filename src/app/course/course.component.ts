import { Component , EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from './course';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course',
  imports: [FormsModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit{
  @Input() content! : Course; 
  @Output() newNb = new EventEmitter<number>();

  lastNb=0;
  
  constructor(){}
  ngOnInit(){
  }
  updateNb(){
    let nb = this.content.nb_student - this.lastNb;
    this.lastNb = this.content.nb_student;
    this.newNb.emit(nb);
  }
}
