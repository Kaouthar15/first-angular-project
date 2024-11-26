import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from './course/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Observable<Course[]>{
    return of(      
      [{title:"1stClass",nb_student:23 },
      {title:"2ndClass",nb_student:16 },
      {title:"3rdClass",nb_student:27 }]
    )
  }
}
