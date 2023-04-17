import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-flujo-caja',
  templateUrl: './flujo-caja.component.html',
  styleUrls: ['./flujo-caja.component.scss']
})
export class FlujoCajaComponent implements OnInit {

  lang: string = '';
  locales: any;

  constructor(private localeService: LocaleService) {
      this.localeService.getByModule('flujo_caja').subscribe((response) =>  {
      this.locales = this.localeService.transformForView(response);
    });
  }

  ngOnInit(): void {
    this.localeService.currentLang$.subscribe(lang => {
      this.lang = lang
    });
  }

}
