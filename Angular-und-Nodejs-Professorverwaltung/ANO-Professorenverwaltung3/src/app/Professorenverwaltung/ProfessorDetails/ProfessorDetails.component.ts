import { Professor } from './../Professor';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ProfessorDetails',
  templateUrl: './ProfessorDetails.component.html',
  styleUrls: ['./ProfessorDetails.component.css']
})
export class ProfessorDetailsComponent implements OnInit {

  // ohne @Input funktioniert es nicht
  @Input()
  professor!: Professor;

  constructor() { }

  ngOnInit() {

  }

}
