import { Component, OnInit, Input } from '@angular/core';
import { HeaderFooterComponent } from '../header-footer/header-footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @Input() myNav: HeaderFooterComponent;

  ngOnInit() {
  }

}
