import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search = '';
  selectedCountry = '';
  selectedGenre = '';

  onSearched(event) {
    this.search = event;
  }

  onCountrySelected(event) {
    this.selectedCountry = event;
  }

  onGenreSelected (event) {
    this.selectedGenre = event;
  }
}
