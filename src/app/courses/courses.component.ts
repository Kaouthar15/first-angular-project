import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../course/course';
import { CourseComponent } from "../course/course.component";

@Component({
  selector: 'app-courses',
  imports: [FormsModule, CourseComponent],
  standalone:true,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'  
})
export class CoursesComponent implements OnInit {

  title!: "Courses Lists !";
  UE : Course[] = [{title:"c1",nb_student:1},{title:"c2",nb_student:2}]
  nb_students:number=0;
  getTitle(){return this.title;}

  getNbStudent(){
    this.nb_students = 0;
    for(let ue of this.UE) this.nb_students += ue.nb_student;
  }
  onNewNb(delta: number) {
    this.nb_students += delta;
  }

  constructor(){}
  ngOnInit() {
  }
}
