document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        { id: 1, nombre: "Detergente", cantidad: 20, precio: 5.99 },
        { id: 2, nombre: "Jabón Líquido", cantidad: 15, precio: 3.50 },
        { id: 3, nombre: "Desinfectante", cantidad: 10, precio: 7.00 },
        { id: 4, nombre: "Escoba", cantidad: 25, precio: 8.20 },
    ];

    const tabla = document.getElementById("tabla-inventario");

    productos.forEach(producto => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>
                <button onclick="editarProducto(${producto.id})">Editar</button>
                <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });
});

function editarProducto(id) {
    alert("Editar producto con ID: " + id);
}

function eliminarProducto(id) {
    alert("Eliminar producto con ID: " + id);
}
