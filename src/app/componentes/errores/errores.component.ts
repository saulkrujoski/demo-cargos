import { Component, OnInit } from '@angular/core';
import { Globales } from '../../../globales';

@Component({
  selector: 'app-errores',
  templateUrl: './errores.component.html',
  styleUrls: ['./errores.component.css']
})
export class ErroresComponent implements OnInit {

  constructor(public globales: Globales) { }

  ngOnInit(): void {
  }

}
