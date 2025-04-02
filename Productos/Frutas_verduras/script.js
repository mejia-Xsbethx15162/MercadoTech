document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Manzanas", precio: "2.50/kg", img: "/img/manzana.png" },
        { nombre: "Plátanos.", precio: "1.80/kg", img: "/img/platano.png" },
        { nombre: "Naranjas", precio: "2.20/kg", img: "/img/naranja.png" },
        { nombre: "Fresas", precio: "4.00/kg", img: "/img/fresas.png" },
        { nombre: "Mangos", precio: "3.50/kg", img: "/img/mango.png" },
        { nombre: "Peras", precio: "3.00/kg", img: "/img/pera.png" },
        { nombre: "Lechuga", precio: "1.50/unidad", img: "/img/lechuga.png" },
        { nombre: "Tomates", precio: "2.80/kg", img: "/img/tomate.png" },
        { nombre: "Pepinos", precio: "1.99/kg", img: "/img/pepino.png" },
        { nombre: "Zanahorias", precio: "1.75/kg", img: "/img/zanahoria.png" },
        { nombre: "Cebollas", precio: "2.00/kg", img: "/img/cebolla.png" },
        { nombre: "Pimientos", precio: "2.50/kg", img: "/img/pimiento.png" },
        { nombre: "Brócoli", precio: "3.20/kg", img: "/img/brocoli.png" },
        { nombre: "Espinacas", precio: "1.99/paquete", img: "/img/espinaca.png" },
        { nombre: "Uvas", precio: "3.80/kg", img: "/img/uvas.png" },
        { nombre: "Piñas", precio: "2.90/unidad", img: "/img/pina.png" },
        { nombre: "Sandía", precio: "5.00/unidad", img: "/img/sandia.png" },
        { nombre: "Papaya", precio: "4.50/kg", img: "/img/papaya.png" },
        { nombre: "Melón", precio: "3.60/kg", img: "/img/melon.png" },
        { nombre: "Aguacate", precio: "4.20/kg", img: "/img/aguacate.png" },
        { nombre: "Coliflor", precio: "2.99/unidad", img: "/img/coliflor.png" },
        { nombre: "Berenjena", precio: "3.40/kg", img: "/img/berenjena.png" },
        { nombre: "Calabacín", precio: "2.30/kg", img: "/img/calabacin.png" },
        { nombre: "Remolacha", precio: "2.10/kg", img: "/img/remolacha.png" },
        { nombre: "Rábanos", precio: "1.70/paquete", img: "/img/rabanos.png" }
    ];

    const contenedor = document.querySelector(".productos-container");

    productos.forEach(producto => {
        
        const precioNum = parseFloat(producto.precio.split("/")[0].replace("$", "").trim());
        const unidad = producto.precio.split("/")[1] ? producto.precio.split("/")[1].trim() : '';

    
        const div = document.createElement("div");
        div.classList.add("frutas-verduras");
        div.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <div class="nombre">${producto.nombre}</div>
            <div class="precio">$${precioNum.toFixed(2)} ${unidad}</div>
            <button class="agregar-carrito">Añadir al carrito</button>
        `;
        contenedor.appendChild(div);

    
        const botonCarrito = div.querySelector(".agregar-carrito");
        botonCarrito.addEventListener("click", function() {
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            const productoExistente = carrito.find(item => item.nombre === producto.nombre);

            if (productoExistente) {
                productoExistente.cantidad += 1;
            } else {
                carrito.push({ nombre: producto.nombre, precio: precioNum, unidad: unidad, cantidad: 1 });
            }

            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert(`${producto.nombre} añadido al carrito`);
        });
    });
});

