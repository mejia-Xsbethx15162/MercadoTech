document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Pizza Congelada", precio: 5.99, img: "/img/pizza.png" },
        { nombre: "Papas Fritas Congeladas", precio: 3.50, img: "/img/papas.png" },
        { nombre: "Hamburguesas Congeladas", precio: 6.99, img: "/img/hamburguesa.png" },
        { nombre: "Pollo Empanizado", precio: 7.49, img: "/img/pollo.png" },
        { nombre: "Verduras Congeladas", precio: 2.99, img: "/img/verduras.png" },
        { nombre: "Helado de Vainilla", precio: 4.99, img: "/img/helado.png" },
        { nombre: "Camarones Congelados", precio: 9.99, img: "/img/camarones.png" },
        { nombre: "Nuggets de Pollo", precio: 5.50, img: "/img/nuggets.png" },
        { nombre: "Filetes de Pescado", precio: 8.99, img: "/img/pescado.png" },
        { nombre: "Empanadas Congeladas", precio: 4.99, img: "/img/empanadas.png" }
    ];

    const contenedor = document.querySelector(".productos-container");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("congelado");
        div.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <div class="nombre">${producto.nombre}</div> 
            <div class="precio">$${producto.precio.toFixed(2)}</div>
            <button class="agregar-carrito">Añadir al carrito</button>
        `;

        const botonCarrito = div.querySelector(".agregar-carrito");
        botonCarrito.addEventListener("click", function() {
            console.log("Producto seleccionado:", producto.nombre);
            
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            const productoExistente = carrito.find(item => item.nombre === producto.nombre);

            console.log("Producto ya en carrito:", productoExistente);

            if (productoExistente) {
                productoExistente.cantidad += 1;
            } else {
                carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
            }

            localStorage.setItem("carrito", JSON.stringify(carrito));

            console.log("Carrito actualizado:", carrito);

            alert(`${producto.nombre} añadido al carrito`);
        });

        contenedor.appendChild(div);
    });
});

