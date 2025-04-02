document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Carne de Res", precio: 10.50, img: "/img/carne_res.png" },
        { nombre: "Pechuga de Pollo", precio: 8.75, img: "/img/pechuga_pollo.png" },
        { nombre: "Chuletas de Cerdo.", precio: 9.20, img: "/img/chuletas_cerdo.png" },
        { nombre: "Salchichas", precio: 4.50, img: "/img/salchichas.png" },
        { nombre: "Chorizo", precio: 5.75, img: "/img/chorizo.png" },
        { nombre: "Carne Molida", precio: 7.80, img: "/img/carne_molida.png" },
        { nombre: "Jamón de Pavo", precio: 6.99, img: "/img/jamon_pavo.png" },
        { nombre: "Bistec de Res", precio: 11.00, img: "/img/bistec_res.png" },
        { nombre: "Costillas de Cerdo", precio: 12.50, img: "/img/costillas_cerdo.png" }
    ];

    const contenedor = document.querySelector(".productos-container");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carnicos");
        div.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <div class="nombre">${producto.nombre}</div> 
            <div class="precio">$${producto.precio.toFixed(2)}</div>
            <button class="agregar-carrito">Añadir al carrito</button>
        `;

        const botonCarrito = div.querySelector(".agregar-carrito");
        botonCarrito.addEventListener("click", function() {
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            const productoExistente = carrito.find(item => item.nombre === producto.nombre);

            if (productoExistente) {
                productoExistente.cantidad += 1;
            } else {
                carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
            }

            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert(`${producto.nombre} añadido al carrito`);
        });

        contenedor.appendChild(div);
    });
});
