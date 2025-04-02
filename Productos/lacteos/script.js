document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Leche Entera", precio: "$1.50", img: "/img/leche_entera.png" },
        { nombre: "Yogur Natural", precio: "$2.00", img: "/img/yogur_natural.png" },
        { nombre: "Queso Mozzarella", precio: "$3.75", img: "/img/queso_mozzarella.png" },
        { nombre: "Mantequilla", precio: "$2.50", img: "/img/mantequilla.png" },
        { nombre: "Queso Cheddar", precio: "$4.00", img: "/img/queso_cheddar.png" },
        { nombre: "Crema de Leche", precio: "$2.20", img: "/img/crema_leche.png" },
        { nombre: "Yogur de Fresa", precio: "$2.10", img: "/img/yogur_fresa.png" },
        { nombre: "Leche Deslactosada", precio: "$1.80", img: "/img/leche_deslactosada.png" },
        { nombre: "Queso Parmesano", precio: "$5.50", img: "/img/queso_parmesano.png" },
        { nombre: "Leche Condensada", precio: "$3.25", img: "/img/leche_condensada.png" }
    ];

    const contenedor = document.querySelector(".productos-container");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("lacteos");
        div.innerHTML = `<img src="${producto.img}" alt="${producto.nombre}">
                         <div class="nombre">${producto.nombre}</div> 
                         <div class="precio">${producto.precio}</div>
                         <button class="agregar-carrito">Añadir al carrito</button>`;
        contenedor.appendChild(div)
        ;

        const botonCarrito = div.querySelector(".agregar-carrito");
        botonCarrito.addEventListener("click", function() {
            
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            
            carrito.push({ nombre: producto.nombre, precio: producto.precio });

            
            localStorage.setItem("carrito", JSON.stringify(carrito));

            
            alert(`${producto.nombre} añadido al carrito`);
        });      
    });
});
