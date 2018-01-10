import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-thirdnav',
  templateUrl: './thirdnav.component.html',
  styleUrls: ['./thirdnav.component.css']
})
export class ThirdnavComponent implements OnInit {

  countries = [
    {
      id: 0,
      name: 'Canada',
      code: 'ca'
    },
    {
      id: 1,
      name: 'USA',
      code: 'usa'
    },
    {
      id: 2,
      name: 'UK',
      code: 'uk'
    }
  ];

  genres = [
    {
      id: 0,
      name: 'POP',
      code: 'pop'
    },
    {
      id: 1,
      name: 'Rock',
      code: 'ro'
    },
    {
      id: 0,
      name: 'Hip-Hop',
      code: 'hh'
    }
  ];

  sortby = [
    {
      id: 0,
      name: 'Sort by singer',
      code: 'sbs'
    }
  ];

  @Output() onCountrySelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() onGenreSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onCountrySelect(value) {
    this.onCountrySelected.emit(this.countries.filter((country) => country.name === value ? country : null)[0].code);
  }

  onGenreSelect(value) {
    this.onGenreSelected.emit(this.genres.filter((genre) => genre.name === value ? genre : null)[0].code);
  }
}
