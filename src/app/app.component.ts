import { Component, OnInit } from '@angular/core';
import { LocaleService } from './services/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Clay APP';
  

  constructor(private localeService: LocaleService) { }

  ngOnInit(): void {

  }

}
