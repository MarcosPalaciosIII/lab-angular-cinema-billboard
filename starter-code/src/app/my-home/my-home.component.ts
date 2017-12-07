import { Component, OnInit } from '@angular/core';
import { movies } from '../../sample-movies'

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  listOfMovies: any[] = movies;

  constructor() { }

  ngOnInit() {
  }

}
