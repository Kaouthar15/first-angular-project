import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  titre : string = "liste des cours";
  ma_valeur : string = "valeur intiale";

  getTitle(){return this.titre;}

  constructor(){}
  ngOnInit() {
  }
}
