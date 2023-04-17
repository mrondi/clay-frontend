

<img width="100%"  alt="Captura de pantalla 2023-04-17 a las 16 57 52" src="https://user-images.githubusercontent.com/898971/232596690-9db2a4f4-9189-4721-9526-930f4e09b0cc.png">

## Instalación

1. Instalar Angular de manera global con "npm install -g @angular/cli".
2. Clonar repositorio.
3. Instalar modulos con "npm i".
4. Inicia App en puerto 4200 con "ng s".

## Deploy Productivo

El frontend fue desarrollado en **Angular 14** y esta desplegado en un Droplet de **Digital Ocean** bajo **Apache 2**.

## URL Productivo
http://64.227.28.218

## Consideraciones

- Display de las traducciones mediante un custom Pipe de Angular. 
- El lenguaje seleccionado es un observable en todo el app.
- Al inicializar cada componente o modulo se hace un request al Api Locale para obtener las cadenas correspondientes solo a ese componente.
- Si la cadena de traduccion no se encuentra para el idioma seleccionado se mostrara por defecto la cadena en idioma español, en caso de no encontrarse en español se mostrara su "key".
- Bootstrap 5 como libreria de UI.
- Material Symbols Font como libreria de iconos.

## Cambiar de Idioma

El cambio de idioma desde el front se realiza desde la barra de menu, icono de configurar ⚙️

## Soporte HTML

Se soporta HTML en las cadenas de traduccion usando el Property Binding "innerHTML" en el elemento html. 

**Ejemplo**

```html
    <p [innerHTML]="'tip_flujo' | lang : lang : locales"></p>
```
