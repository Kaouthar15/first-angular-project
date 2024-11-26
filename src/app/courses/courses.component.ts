import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../course/course';

@Component({
  selector: 'app-courses',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'  
})
export class CoursesComponent implements OnInit {
  title!: "Courses Lists !";
  UE : Course[] = [{title:"c1",nb_student:1},{title:"c2",nb_student:2}]

  getTitle(){return this.title;}

  constructor(){}
  ngOnInit() {
  }
}
