import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http : HttpClient) { }

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(
        "http://127.0.0.1/api/courses"
    )
  }
}
