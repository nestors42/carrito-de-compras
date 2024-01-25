/*
primer paso: como primer paso tengo que seleccionar(desde el html) los elementos que vamos a utilizar.
como voy a realizar un carrito de compras tengo que seleccionar los siguientes elementos:
1- seleccionar los botones (button) que al momento de darle click realise una funcionalidad.
    cuando selecciono todos los botones, me devuelve un NodeList que es un conjunto de arreglos, es decir
    que lo puedo iterar.
2- seleccionar el lugar donde se van a agregar esos elementos, en este caso el carrito (ul)
3- seleccionar los template que son los que se van a agregar al carrito.
4- llamo a la variable botones para iterar los items.
5- luego, dentro de la iteracion, darle un evento a esos items.(item.addEventListener("click"))
    si quiero ver que el codigo funcione escribir despues de "click", () => {
        console.log("me diste click")}
    una vez que se vea en consola que funciona, borrar el console.log
6- para poder agregar el producto al carrito, crear una variable-funcion (const agregarProductoCarrito = ())
 para poder agregarlo cuando haga click en el boton.
        esa variable-funcion que cree (agrgarProductoCarrito= ()), debo ponerlo arrbia del arreglo,
         y copiar esa variable al lado del evento click.
        es decir que se va a ejecutar esa funcion cada vez que haga click, no hace falta llamar a la funcion para que
        se ejecute.
7- ahora debo hacer una variable-objeto (arriba de agregarProductoCarrito)
para poder crear el carrito donde se van a agregar los productos:
    const carrito = {} debo dejarlo vacio, para que cada vez que haga click, se agregue.
8- a la variable-funcion const agregarProductoCarrito = (e) agregar la e dentro de los ().
        que es lo que hace esta e? me brinda informacion sobre el evento. es decir que cuando haga click,
        me da informacion de donde hice click, altura, tipo de evento etc.
9- ahora voy a crear el producto dentro de agregarProductoCarrito {
  const producto = {} va a ser un objeto. dentro del objeto podemos poner las propiedades del
   dataset. ejemplo: 
   titulo = e.target.dataset.fruta
   id: e.target.dataset.fruta
   cantidad:
   precio:
   es decir puedo poner todos los dataset que tenga el html.
   para poder ver en la consola realizo lo siguiente:
   const producto = {
    titulo: e.target.dataset.fruta
    id: e.target.dataset.fruta
   }; despues del corchete no olvidar el punto y coma, escribo console.log (producto)
   es decir que cada vez que le dè click se va a crear el producto con las especificaciones que yo le di.
10- ahora para agregar el producto al carrito:
    dentro de creacionDeProducto = (e) => {
        carrito [producto.titulo] = producto
        esto va a agregar los productos al carrito
        lo mostramos con console.log(carrito); y en consola veremos el objeto dentro de objetos.
    } 

11- para mostrar el carrito vamos a crear un const mostrarCarrito = ()=> {
    pero lo ejecutamos en la funcion creacionDeProducto, que se va a activar al darle click.
12- en la funcion mostrarCrrito = () => {
    vamos a cambiar objeto por arreglo, como se hace?:
    con object.values(aca dentro ponemos el objeto, en este caso carrito)
}
13- como convertimos el objeto en areglo, ahora lo podemos iterar.
    object.values(carrito).forEach ((item)=>{
        aca vamos a crear un const clone = template.content.cloneNode (true)
    llamamos a clone.querySelector(.la class, en este caso lead).textContent = item.titulo
    con esto accedo al template, y al texto que va a ser igual al titulo de la fruta.
    hacemos lo mismo con la cantidad, precio o lo que contenga en template.
14- seguimos dentro del punto anterior. lo que vamos a hacer antes es crear al principio,
en las primeras lineas un const fragment = document.createDocumentFragment(), esto es para evitar reflow
pero el siguiente codigo lo realizamos en el punto anterior:
        fragment.appendChild(clone), es decir que las clonaciones se agregan al fragment.
15- ahora en el mismo punto pero por fuera del }); ponemos:
        contenedor.appendChild(fragment), es decir que el fragment lo agrego al contenedor.
16- ahora para evitar el error de iteracion al hacer click debo poner en const mostrarElCarrito = ()={
    contenedor.textContent = ""; con esto cada vez que hagamos click va a estar vacio.
}
 COMO HACER PARA QUE AL HACER CLICK SUME CADA CLICK
 --Dentro de creacionDeProducto y despues del primer } poner:
 if (carrito.hasOwnPropety(producto.titulo)) { si en el carrito existe producto.titulo
    producto.cantidad = carrito.[producto.titulo].cantidad + 1 ver filmina 38 de carrito v1
 }
 */