import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CinemaService } from './services/cinema.service';

import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';

const myRoutes: Routes = [
  { path: '', component: MyHomeComponent },
  { path: 'movie/id', component: MyMovieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    HttpModule
  ],
  providers: [
    CinemaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
