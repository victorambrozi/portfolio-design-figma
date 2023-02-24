export function controlMenu() {
  const menuContainer = document.querySelector(".menu-hamburguer-container");
  const menuHamburguer = document.querySelector(".menu-hamburguer");
  const navItems = document.querySelector(".header-navigation-items");
  const menuElements = [menuContainer, menuHamburguer]

  function handleClick(event) {

    //adicionar classe active para ativar o menu responsivo
    menuHamburguer.classList.add("active");
    navItems.classList.add("active");

    // fechar menu quando clicar fora
    outsideClick(menuElements, () => {
      menuHamburguer.classList.remove("active");
      navItems.classList.remove("active");
    });
  }

  function outsideClick(element, callback) {
    const html = document.documentElement;
    const navigationField = document.querySelector(".header-navigation");

    function handleOutsideClick(event) {

      if (!navigationField.contains(event.target)) { 
        // se clicar fora do campo de navegação, o valor retorna false, então eu executo a callback, removendo as classes
        callback();
        html.removeEventListener("click", handleOutsideClick)
      }
    }

    html.addEventListener("click", handleOutsideClick);
  }

  menuContainer.addEventListener("click", handleClick);
}