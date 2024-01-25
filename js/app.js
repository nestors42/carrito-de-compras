const botones = document.querySelectorAll (".btn-primary");
const contenedor = document.querySelector ("#carrito");
const template = document.querySelector ("#template");
const fragment = document.createDocumentFragment()

const carrito = {};

const crearProductoAgregar = (e) => {

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    };
    if (carrito.hasOwnProperty(producto.titulo)) {
        producto.cantidad = carrito[producto.titulo].cantidad + 1;
    };
    carrito[producto.titulo] = producto;

    mostrarCarrito();
};

const mostrarCarrito = () => {
    contenedor.textContent = "";
    Object.values(carrito).forEach ((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".bg-primary").textContent = item.cantidad;
        fragment.appendChild(clone);
    });
    contenedor.appendChild(fragment);
}

botones.forEach ((item) => {
    item.addEventListener ("click", crearProductoAgregar)
});

