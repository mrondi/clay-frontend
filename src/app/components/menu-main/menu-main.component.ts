import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../../services/locale.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigComponent } from '../config/config.component';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss']
})

export class MenuMainComponent implements OnInit {


  lang: string = '';
  locales: any;

  constructor(private modalService: NgbModal) {     }

  openConfigModel(){

    const modalRef = this.modalService.open(ConfigComponent, {  size: 'md', centered: true});
  
  }

 ngOnInit(): void {

 }

}
