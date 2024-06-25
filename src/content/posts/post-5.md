---
title: ¡Trucasos de CSS que no conocias!
author: Kaisher
description: "¡CSS es muy potente! Sobre todo si lo comoces..."
image:
  url: "https://images.unsplash.com/photo-1634634465913-5bb5600942f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNzc3xlbnwwfHwwfHx8MA%3D%3D"
  alt: "Código CSS"
pubDate: 2024-06-08
tags: ["éxitos","comunidad","tips"]
---

En esta publicación tienes 4 trucos o nuevas sintaxis de CSS que quizá no conocias. Y que te pueden ayudar a mejorar tu código y página web.
Mi favorita es la nueva sintaxis de las Media Queries, porque siempre me confundia y tenia que ir probando.
Pero tampoco está mal saber hacer tooltips con solo CSS. 

## **Sombras en imagen con fondo transparente**
``` 
❌
img{
    box-shadow:
        0 0 10px rgba(0,0,0,.8)
}

✅
img{
    filter: drop-shadow(
        0 0 10px rgba(0,0,0,.8)
    )
}
 ```

## **Nueva sintaxis para Media Queries**

```jsx
/* Antigua forma */
@media (min-width: 300px){}
@media (min-width: 1000px){}
@media (min-width: 640px) and (max-width: 768px){}

/* Nueva forma usando sintaxis de rango*/

@media (width >= 300px){}
@media (width < 1000px){}
@media (640px <= width < 768px){}

```
## **Borde degradado con esquinas redondeadas**

```jsx
/* Borde degradado con border-radius*/
article{
    padding: 16px;
    border-radius: 5px;
    border: 2px solid #0000;
    background: 
        linear-gradient(black, #222) padding-box,
        linear-gradient(#09f, white) border-box;
}

```
## **Nueva forma de centrar elementos**

```jsx
/* CSS */
section{
    align-content: center; /* ¡Nuevo!*/
    display: block;
}
/* HTML */
<section>
    <h1>Hola, kaisher 👋</h1>
</section>

```