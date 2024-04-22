import { Component, Input, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonText, IonCardContent, IonLabel, IonItem, IonIcon } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { MovieResult } from '../services/interfaces';
import { cashOutline, calendarOutline } from 'ionicons/icons'
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonLabel, IonCardContent, IonText, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonBackButton, IonButtons, IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule

  ]
})
export class DetailsPage {
  private movieService = inject(MovieService);
  public imageBaseUrl = "https://image.tmdb.org/t/p";
  public movie: WritableSignal<MovieResult | null> = signal(null);

  @Input()
  set id(movieId: string) {
    this.movieService.getMovieDetails(movieId).subscribe((movie) => {
      console.log(movie);

      this.movie.set(movie)
    });
  }

  constructor() {
    addIcons({ cashOutline, calendarOutline })
  }

}
