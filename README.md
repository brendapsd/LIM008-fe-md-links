# Markdown Links

## Problema propuesto 

Crear una herramienta usando `Node.js`, que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

## Diagrama de flujo

![flujograma md-links](https://user-images.githubusercontent.com/45088762/54504334-39801100-4901-11e9-9ee6-a6317c63b6ee.png)

## Tablero backlog para la implementación de la librería 

![tablero del mdLinks](https://user-images.githubusercontent.com/45088762/54505182-caa4b700-4904-11e9-9d21-ae6d4eba89ea.PNG)

![milestones](https://user-images.githubusercontent.com/45088762/54505700-ef019300-4906-11e9-9b8e-de2fc27f47ee.PNG)
![milestones1](https://user-images.githubusercontent.com/45088762/54506459-861c1a00-490a-11e9-985c-4d2306274ff9.PNG)

## Documentación técnica de la librería

El módulo es instalable via `npm install brendapsd/md-links`. Este
módulo también se puede incluir un _ejecutable_ que podamos invocar en la línea 
de comando como una interfaz que podamos importar con `require` para usarlo
programáticamente.

### JavaScript API

El módulo debe poder importarse en otros scripts de Node.js y debe ofrecer la
siguiente interfaz:

#### `mdLinks(path, options)`

##### Argumentos

- `path`: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es
  relativa, debe resolverse como relativa al directorio desde donde se invoca
  node - _current working directory_).
- `options`: Un objeto con las siguientes propiedades:
  * `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función debe retornar una promesa (`Promise`) que resuelva a un arreglo
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades:

- `href`: URL encontrada.
- `text`: Texto que aparecía dentro del link (`<a>`).
- `file`: Ruta del archivo donde se encontró el link.

#### Ejemplo

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```

## Guía de uso e instalación de la librería

### Instalación

Módulo instalable via 

`npm install brendapsd/md-links`

Este módulo es ejecutable como una interfaz que podamos importar con `require`
para usarlo programáticamente.

### Uso 

El ejecutable de nuestra aplicación puede ejecutarse de la siguiente manera a 
través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

![md-links solo path](https://user-images.githubusercontent.com/45088762/54507324-c8475a80-490e-11e9-8058-070f53da9090.PNG)

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

![md-links validate](https://user-images.githubusercontent.com/45088762/54507411-3855e080-490f-11e9-98ca-8b153f80a505.PNG)

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

![md-links stats](https://user-images.githubusercontent.com/45088762/54507477-92ef3c80-490f-11e9-8b6c-84504347ace4.PNG)

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

![md-links validate stats](https://user-images.githubusercontent.com/45088762/54507496-ae5a4780-490f-11e9-8180-fb1e68bcd4da.PNG)