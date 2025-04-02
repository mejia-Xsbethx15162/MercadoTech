function agregarAlCarrito(producto) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto); 
    localStorage.setItem("carrito", JSON.stringify(carrito));  
    actualizarCarrito();  
}

function eliminarDelCarrito(index) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);  
    localStorage.setItem("carrito", JSON.stringify(carrito));  
    actualizarCarrito(); 
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("carrito");
    const totalElemento = document.getElementById("total");

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    listaCarrito.innerHTML = "";  

    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio * producto.cantidad;  

        const item = document.createElement("li");
        item.textContent = `${producto.nombre} - $${(producto.precio * producto.cantidad).toFixed(2)} (x${producto.cantidad})`;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarDelCarrito(index); 
        item.appendChild(botonEliminar);  

        listaCarrito.appendChild(item);  
    });

    totalElemento.textContent = `Total: $${total.toFixed(2)}`;
}

function finalizarCompra() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length > 0) {
        alert("¡Gracias por tu compra! Procediendo a la confirmación.");
        
        localStorage.removeItem("carrito");  
        actualizarCarrito();  
    } else {
        alert("Tu carrito está vacío. Agrega productos antes de finalizar la compra.");
    }
}

document.addEventListener("DOMContentLoaded", actualizarCarrito);



