import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(){
    return [
      {title:"1stClass",nb_student:23 },
      {title:"2ndClass",nb_student:16 },
      {title:"3rdClass",nb_student:27 }
    ]
  }
}
