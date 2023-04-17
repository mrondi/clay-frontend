import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lang'
})

export class LangPipe implements PipeTransform {

  transform(str_key: string, lang: string, locales: any): unknown {
    
    let returnValue  = str_key;

    if ( !locales[str_key] ||  !locales[str_key][0] || !locales[str_key][0].lang[lang] ) {
      returnValue = locales[str_key] && locales[str_key][0].lang['es']  ? locales[str_key][0].lang['es'] : '#' + str_key + '#';
    } else {
      returnValue = locales[str_key][0].lang[lang];
    }

    return returnValue;

  }

}
