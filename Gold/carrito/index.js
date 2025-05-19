/*variables globales*/
let cantidad = 1;
let cart= [];
/* carga de productos desde json*/
async function loadProducts() {
    try {
        const response = await fetch('productos.json');
        const productos = await response.json();
        displayProductos(productos);
    } catch (error){
        console.error('Error al cargar los productos: ', error);
    }
}
/*funcion para mostrar los productos en el dom*/
function displayProductos(productos){
    const productList =document.querySelector('.cards');
    productos.forEach(product => {
        const article =document.createElement('article');
        article.innerHTML = ` 
        <div class="card_img">
            <img src ="${product.imagen}" alt="${product.nombre}">
        </div>
        <div class="card_description">
            <h4 class="description_categoria">${product.categoria}</h4>
            <h2 class="descripcion_nombre">${product.nombre}</h2>
            <p class="descripcion_precio">${product.precio}</p>
        </div>
        <button onclick="addToCart(${product.id},this)" class="card_btn-shop>
        <i class="ri-shopping-cart-2-line"></i>
        Añadir al Carrito
        </button>
        <div class="card_cantidad" id="card_cantidad"-${product.id}>
        <button class="cantidad_btn-remove" onclick="decrementarProducto${product.id}">
            <i class="ri-indeterminate-circle-line"></i>
        </button>
        <div class="cantidad_numero" id="cantidad-${product.id}" data-id="${product.id}">
        1
        </div>
        <button class="cantidad_btn-add" onclick="incrementarProducto${product.id}">
            <i class="ri-add-circle-line"></i>
        </button>
        </div>
        `;
        productList.appendChild(article);

    })

}   

/*funcion para añadir al carrito los productos*/

/*funcion para incrementar la cantidad*/

/*funcion para decrememntar la cantidad*/

/*funcion para eliminar el producto del carrito*/

/*funcion para mostrar los productos del carrito*/

/* funcion para mostrar el modal del pedido*/

/*funcion pata cerrar el modal del pedido y resetear el estado del carrito*/
loadProducts();
