import { Component, Input, } from '@angular/core';
import { Movie } from '../movie.model';
@Component({
  selector: 'app-movie-detail',
  standalone: true,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  @Input() movieDetails!:Movie;

}
