function agregarAlCarrito(producto) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const precioProducto = parseFloat(producto.precio);
    if (isNaN(precioProducto)) {
        console.error(`Precio no válido para el producto: ${producto.nombre}`);
        return; // Si el precio no es válido, no lo agregamos
    }

    const productoExistente = carrito.find(item => item.nombre === producto.nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ nombre: producto.nombre, precio: precioProducto, cantidad: 1 });
    }

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
        const precioProducto = parseFloat(producto.precio);
        if (isNaN(precioProducto)) {
            console.error(`Precio no válido para el producto: ${producto.nombre}`);
            return;
        }

        total += precioProducto * producto.cantidad;

        const item = document.createElement("li");
        item.textContent = `${producto.nombre} - $${(precioProducto * producto.cantidad).toFixed(2)} (x${producto.cantidad})`;

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

function finalizarCompra() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const reciboCompraDiv = document.getElementById('recibo-compra');
    const listaProductosReciboUl = document.getElementById('lista-productos-recibo');
    const totalReciboDiv = document.getElementById('total-recibo');
    const cerrarReciboBtn = document.getElementById('cerrar-recibo');

    listaProductosReciboUl.innerHTML = '';
    let totalCompra = 0;

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad} - Precio unitario: $${producto.precio.toFixed(2)} - Subtotal: $${(producto.cantidad * producto.precio).toFixed(2)}`;
        listaProductosReciboUl.appendChild(li);
        totalCompra += producto.cantidad * producto.precio;
    });

    totalReciboDiv.textContent = `Total: $${totalCompra.toFixed(2)}`;
    reciboCompraDiv.style.display = 'block';

    cerrarReciboBtn.onclick = function() {
        reciboCompraDiv.style.display = 'none';
        // Opcional: Aquí podrías limpiar el carrito después de mostrar el recibo
        // localStorage.removeItem('carrito');
        // actualizarCarrito();
        alert('¡Gracias por tu compra!');
    };
}

document.addEventListener("DOMContentLoaded", actualizarCarrito);