export function controlMenu() {
    const menuContainer = document.querySelector(".menu-hamburguer-container");
    const menuHamburguer = document.querySelector(".menu-hamburguer");
    const navItems = document.querySelector(".header-navigation-items");

    function handleClick() {
        //adicionar classe active para ativar o menu responsivo
        menuHamburguer.classList.toggle("active");
        navItems.classList.toggle("active");
    }

    function handleMouseLeave(event) {
        console.log(event)
    }
    
    function handleMouseMove({target}) {
        target.addEventListener("mousedown", handleMouseLeave); // fecha o menu quando o mouse sair da caixa
    }
    
    menuContainer.addEventListener("click", handleClick);
    navItems.addEventListener("mousemove", handleMouseMove); 
}