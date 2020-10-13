import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav', // < -- we use this in the main html
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
