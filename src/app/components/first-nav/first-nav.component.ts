import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-first-nav',
  templateUrl: './first-nav.component.html',
  styleUrls: ['./first-nav.component.css']
})
export class FirstNavComponent implements OnInit {


  search = '';
  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
