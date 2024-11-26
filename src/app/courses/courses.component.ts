import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../course/course';
import { CourseComponent } from "../course/course.component";
import { CommonModule } from '@angular/common';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  imports: [FormsModule, CourseComponent , CommonModule],
  standalone:true,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'  
})
export class CoursesComponent implements OnInit {

  title!: "Courses Lists !";
  UE : Course[];
  nb_students!:number;
  getTitle(){return this.title;}

  getNbStudent(){
    this.nb_students = 0;
    for(let ue of this.UE) this.nb_students += ue.nb_student;
  }
  onNewNb(delta: number) {
    this.nb_students += delta;
  }

  constructor(){
    let service = new CourseService();
    this.UE = service.getCourses();
  }
  ngOnInit() {
    this.getNbStudent();
  }
}
