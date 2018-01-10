import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

  select() {
    this.item.selected = this.item.selected === true ? false : true;
  }

}
