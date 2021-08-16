const headerTemplate = document.createElement('header');
headerTemplate.classList = "col-md-8 mb-2 text-center"
headerTemplate.innerHTML = `<a href="https://gschincariol.com"><h1>gabriel schincariol cavalcante</h1></a>`;

const menuTemplate = document.createElement('div');
menuTemplate.classList = "menu col-md-8 col-lg-6";
menuTemplate.innerHTML = `<nav class="navbar navbar-light bg-transparent">
<div class="container-fluid justify-content-evenly">
    <a class="navbar-brand fs-6" href="../">
        <img src="../images/homeIcon.png" alt="" width="30" class="d-inline-block align-text-center">
        <span class="d-none d-md-inline-block">início</span>
    </a>
    <a class="navbar-brand fs-6" href="../writing">
        <img src="../images/writingIcon.png" alt="" width="30" class="d-inline-block align-text-center">
        <span class="d-none d-md-inline-block">livros e textos</span>
    </a>
    <a class="navbar-brand fs-6" href="../dev">
        <img src="../images/devIcon.png" alt="" width="30" class="d-inline-block align-text-center">
        <span class="d-none d-md-inline-block">development</span>
    </a>
    <a class="navbar-brand fs-6" href="../contact">
        <img src="../images/contactIcon.png" alt="" width="30" class="d-inline-block align-text-center">
        <span class="d-none d-md-inline-block">fale comigo</span>
    </a>
</div>
</nav>
<hr>`

const footerTemplate = document.createElement('footer');
footerTemplate.classList = "text-center text-muted";
footerTemplate.innerHTML = `<hr>
<ul class="nav justify-content-center list-unstyled d-flex">
    <li class="ms-3"><a class="text-muted" href="https://gschincariol.medium.com/subscribe">medium</a></li>
    <li class="ms-3"><a class="text-muted" href="https://twitter.com/gschincariol">twitter</a></li>
    <li class="ms-3"><a class="text-muted" href="https://https://www.instagram.com/gschincariol/">instagram</a></li>
    <li class="ms-3"><a class="text-muted" href="https://www.facebook.com/gabrielscavalcante/">facebook</a></li>
    <li class="ms-3"><a class="text-muted" href="https://github.com/thebigfundamentals">github</a></li>
    <li class="ms-3"><a class="text-muted" href="https://www.linkedin.com/in/gschincariol/">linkedin</a></li>
</ul>
<p>© gabriel schincariol cavalcante, 2021</p></p>`