# Gif-expert-App
## Para ver el proyecto en vivo: https://juannjo.github.io/Gif-expert-App/

GifExpertApp es una aplicación que conecta con la API de Giphy para obtener los mejores gifs a través de una búsqueda.
Por ahora GifExpertApp sólo muestra los primeros 6 resultados de cada búsqueda, además guarda los resultados por cada búsqueda, por supuesto que está sujeta a mejoras y modificaciones.

## Tecnologías
La aplicación está hecha en React JS, para esta app en particular he usado Vite React por su ligereza y simpleza para iniciar un proyecto prácticamente desde cero e instalando sólo las dependencias necesarias.
La aplicación también usa Bootstrap y CSS para la parte visual.
En este proyecto también utilizamos JS Moderno (ES6+, Spread Operator, Desestructuration, Arrow Functions, etc).

## Cómo funciona
El componente núcle sería <GifExpertApp/>, donde con manejo del estado guardamos un array con las búsquedas realizadas, y utilizamos una función para ir almacenando nuestras búsquedas, estas vienen desde otro componente llamado "AddCategory".
El componente AddCategory, además de recibir la función que debe ejecutar en el componente núcleo, maneja el valor de entrada de un inputa donde ingresaremos las categorías a buscar, el resultado de este estado será envíado al componente núcleo para añadirlo a las categorías buscadas.
El componente GifGrid renderiza una grilla con todos los gifs buscados, para esto recibimos de nuestro custom hook "useFetchGifs" los resultados de la petición API como un array, además del estado de carga actual para definir si mostraremos un mensaje de carga o no.
Nuestro custom hook realiza la petición Async a traves de la función getGif.

### Notas
Para ejecutar en un server local usamos `yarn dev`
Para crear el module bundle usamos `yarn build`
