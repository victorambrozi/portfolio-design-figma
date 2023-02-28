export function controlMenu() {
  // control of the menu behavior
  const menuContainer = document.querySelector(".menu-hamburguer-container");
  const menuHamburguer = document.querySelector(".menu-hamburguer");
  const navField = document.querySelector(".header-navigation-items");
  let isActive = false;

  // control color active of the nav items
  const navItems = document.querySelectorAll(".header-navigation__item");
  
  function handleClick() {
    // add class and enable responsive menu
    if (!isActive) {
      menuHamburguer.classList.add("active");
      navField.classList.add("active");
      isActive = true;
    } else {
      isActive = false;
      menuHamburguer.classList.remove("active");
      navField.classList.remove("active");
    }
    
    // close responsive menu
    outsideClick(() => {
      menuHamburguer.classList.remove("active");
      navField.classList.remove("active");
      isActive = false;
    });
  }
  
  function outsideClick(callback) {
    const html = document.documentElement;
    const navigation = document.querySelector(".header-navigation");
    
    function handleOutsideClick(event) {
      if (!navigation.contains(event.target)) {
        // if click outside of the navigation field, the value return false, then the callback is activate removing the classes       
        callback();
        html.removeEventListener("click", handleOutsideClick);
      }
    }
    
    html.addEventListener("click", handleOutsideClick);
  }

  menuContainer.addEventListener("click", handleClick);
  
  // switch color of the items actives
  navItems[0].classList.add("active");

  function activeTab(event, index) {
    event.preventDefault(); // prevent page reloading

    navItems.forEach(item => {
      item.classList.remove("active");
      navItems[index].classList.add("active");
    });
  }

  navItems.forEach((item, index) => {
    item.addEventListener("click", (event) => activeTab(event, index));
  })
  
}
