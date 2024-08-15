import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    document.documentElement.classList.add('dark');
    Aos.init();
  }

  title = 'SupportIt_FrontEnd';
}
