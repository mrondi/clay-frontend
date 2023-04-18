import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../../services/locale.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  lang: string = '';
  locales: any;

  constructor(private localeService: LocaleService,    public modal: NgbActiveModal    ) {     
    this.localeService.getByModule('config').subscribe((response) =>  {
     this.locales = this.localeService.transformForView(response);
   });

  }

  
  ngOnInit(): void {
    this.localeService.currentLang$.subscribe(lang => {
      this.lang = lang;
    });
  }

  setLang(iso:string) {
    this.modal.close();
    this.localeService.setLang(iso);
    
  }

}
