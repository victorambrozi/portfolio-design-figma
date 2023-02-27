export function controlMenu() {
  const menuContainer = document.querySelector(".menu-hamburguer-container");
  const menuHamburguer = document.querySelector(".menu-hamburguer");
  const navItems = document.querySelector(".header-navigation-items");
  let isActive = false;


  function handleClick() {
    //adicionar classe active para ativar o menu responsivo
    if(!isActive) {
      menuHamburguer.classList.add("active");
      navItems.classList.add("active");
      isActive = true;
    } else {
      isActive = false;
      menuHamburguer.classList.remove("active");
      navItems.classList.remove("active");
    }


    // fechar menu quando clicar fora
    outsideClick(() => {
      menuHamburguer.classList.remove("active");
      navItems.classList.remove("active");
      isActive = false;
    });
  }

  function outsideClick(callback) {
    const html = document.documentElement;
    const navigationField = document.querySelector(".header-navigation");

    function handleOutsideClick(event) {
      if (!navigationField.contains(event.target)) {
        // se clicar fora do campo de navegação, o valor retorna false, então eu executo a callback, removendo as classes
        console.log('outside click', event.target)

        callback();
        html.removeEventListener("click", handleOutsideClick);
      }
    }

    html.addEventListener("click", handleOutsideClick);
  }

  menuContainer.addEventListener("click", handleClick);
}