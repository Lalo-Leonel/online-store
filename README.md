# Online Store-API

Online Store-API una API REST que permite a un usuario hacer consultas por categoria de productos de cualquier tipo de tienda

## Instalación

Para instalar las dependencias ejecutar el comando: `$ npm install` o `$ yarn`

## Uso

Primero ejecutar el servidor: `$ npm run dev` o `$ yarn dev`

## Requisitos

1. Postman
2. Node.js

## Tecnologias:

1. JavaScript
2. Express
3. Sequilize
4. cors
5. dotenv
6. morgan

## Endpoints

#### Get all Products

**Descripcion:**. Obtener toda la lista de productos
```http
  GET /api/products
```
**Respuesta:**
```json
{
    "message": "57 elementos encontrados",
    "products": [
        {
            "id": 5,
            "name": "ENERGETICA MR BIG",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
            "price": 1490,
            "discount": 20,
            "category": 1
        },
        {
            "id": 6,
            "name": "ENERGETICA RED BULL",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
            "price": 1490,
            "discount": 0,
            "category": 1
        },
        {
            "id": 7,
            "name": "ENERGETICA SCORE",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
            "price": 1290,
            "discount": 0,
            "category": 1
        },
        .
        .
        .
}
```

#### Get by Name and Category

**Descripcion:**. Obtener toda la lista por nombre y categoria del un producto
```http
  GET /api/products/search?name=añejo&categoryId=3
```

**Respuesta:**
```json
{
    "message": "4 elementos encontrados",
    "products": [
        {
            "id": 23,
            "name": "RON BACARDI AÑEJO",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
            "price": 4990,
            "discount": 0,
            "category": 3
        },
        {
            "id": 26,
            "name": "RON BARCELO AÑEJO",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/barceloanejo9553.jpg",
            "price": 4990,
            "discount": 0,
            "category": 3
        },
        {
            "id": 30,
            "name": "RON HAVANA AÑEJO RESERVA",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/havanaan-ejo9750.jpg",
            "price": 6990,
            "discount": 0,
            "category": 3
        },
        {
            "id": 38,
            "name": "RON BOTRAN AÑEJO 5 AÑOS",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/ronbotran9337.jpg",
            "price": 4990,
            "discount": 0,
            "category": 3
        }
    ]
}
```
#### Get all Category

**Descripcion:**. Obtener toda la lista de categorias
```http
  GET /api/categories
```

**Respuesta:**
```json
{
    "message": "7 elementos encontrados",
    "categories": [
        {
            "id": 1,
            "name": "bebida energetica"
        },
        {
            "id": 2,
            "name": "pisco"
        },
        {
            "id": 3,
            "name": "ron"
        },
        {
            "id": 4,
            "name": "bebida"
        },
        {
            "id": 5,
            "name": "snack"
        },
        {
            "id": 6,
            "name": "cerveza"
        },
        {
            "id": 7,
            "name": "vodka"
        }
    ]
}
```