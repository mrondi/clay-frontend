import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss']
})

export class MenuMainComponent implements OnInit {


  lang: string = '';
  locales: any;

  constructor(private localeService: LocaleService) {     
    this.localeService.getByModule('menu').subscribe((response) =>  {
     this.locales = this.localeService.transformForView(response);
   });

 }


 ngOnInit(): void {
  this.localeService.currentLang$.subscribe(lang => {
    this.lang = lang;
  });
 }

 setLang(iso:string) {
  this.localeService.setLang(iso);
 }
}
