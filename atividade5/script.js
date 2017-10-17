
    let button = document.querySelector('.toggle');
    let menuLateral = document.querySelector(".nav-lateral");
    let pastaSanfona = document.querySelector(".accordeon.p");
    

    function mostrarMenu() {
        menuLateral.classList.toggle("active");
    }

    button.addEventListener("click", mostrarMenu);


    function mostrarSanfona() {
        pastaSanfona.classList.toggle("active");
    }
    pastaSanfona.addEventListener("click", mostrarSanfona);