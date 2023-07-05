
document.getElementById('header').innerHTML = `
<style>
body{
  background-image: url(https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VjdWxlbnRhfGVufDB8fDB8fHww&w=1000&q=80);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<nav class="navbar navbar-expand-sm navbar-light bg-light ">
  <div class="container">
  <a class="navbar-brand" href="index.html">HOME</a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav me-auto mt-2 mt-lg-0"> 
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opciones</a>
        <div class="dropdown-menu" aria-labelledby="dropdownId">
          <a class="dropdown-item" href="productos.html">Nuestras Plantitas</a>
          <a class="dropdown-item" href="producto_nuevo.html">Agregar un Producto</a>
        </div>
      </li>
    </ul>
    <form class="d-flex my-2 my-lg-0">
      <input class="form-control me-sm-2" type="text" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>`

document.getElementById('footer').innerHTML = `
<style>

footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(18, 97, 11, 1);
}

#containerFooter{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
a{
  color: aqua;
}
</style>
<section id="containerFooter">
      <h3>
        KYKITOME
      </h3>
      <p>
        Buscanos en: 
        <a href="https://www.instagram.com/kikytome_plantas/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank">Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=100092201160179&mibextid=ZbWKwL" target="_blank">Facebook</a>
      </p>
    </section>
`