import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import  * as _ from 'underscore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocaleService {

  private lang$ = new BehaviorSubject<string>('es');
  currentLang$ = this.lang$.asObservable();
  
  private baseUrl = environment.API_LOCALE;

  constructor(private http: HttpClient) { }

  setLang(iso: string) {
    this.lang$.next(iso);
  }

  getByModule(module:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/locales/module/${module}`);
  }

  transformForView(results:any) {
    return _.groupBy(results, 'key');
  }

}


