function actualizarCarrito() {
    const listaCarrito = document.getElementById("carrito");
    const totalElemento = document.getElementById("total");

  
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    listaCarrito.innerHTML = "";  
    let total = 0;

    
    carrito.forEach((producto, index) => {
        total += producto.precio;

        const item = document.createElement("li");
        item.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;

        
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarDelCarrito(index);  
        item.appendChild(botonEliminar);
        listaCarrito.appendChild(item);
    });


    totalElemento.textContent = `Total: $${total.toFixed(2)}`;
}


function eliminarDelCarrito(index) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    
    carrito.splice(index, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));


    actualizarCarrito();
}

actualizarCarrito();


