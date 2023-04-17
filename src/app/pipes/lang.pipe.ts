import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';  


@Pipe({
  name: 'lang'
})

export class LangPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }  

  transform(str_key: string, lang: string, locales: any): SafeHtml  {
    
    let returnValue  = str_key;

    if ( !locales[str_key] ||  !locales[str_key][0] || !locales[str_key][0].lang[lang] ) {
      returnValue = locales[str_key] && locales[str_key][0].lang['es']  ? locales[str_key][0].lang['es'] : '#' + str_key + '#';
    } else {
      returnValue = locales[str_key][0].lang[lang];
    }

    return returnValue;

  }

}
