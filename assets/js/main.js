window.addEventListener("scroll", onScroll);
onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  // verificar se a seção passou da linha
  // o topo da seção
  const sectionTop = section.offsetTop;
  //a altura da seção
  const sectionHeight = section.offsetHeight;
  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  // a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight;
  // o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
  // limites da seção
  const sectionBondaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBondaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  // navigation.classList.add("scroll");
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "left",
  distance: "30px",
  duration: 850,
}).reveal(
  `#home, 
  #home img, 
  #home .stats, 
  #services, 
  #services header, 
  #services .card,
  #about .content
  `
);
