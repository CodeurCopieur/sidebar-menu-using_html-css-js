//show menu
const showMenu = (toggleId, navbarId, bodyId)=> {
  const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId),
        bodypadding = document.getElementById(bodyId);

  if(toggle && navbar) {
    toggle.addEventListener('click', (e)=> {
      navbar.classList.toggle('show');
      toggle.classList.toggle('rotate');
      bodypadding.classList.toggle('expander');
    })
  }
}

showMenu('nav-toggle', 'navbar', 'body');

//link active color
const linkColor = document.querySelectorAll('.nav__link');

var links = Array.from(linkColor);
console.log(links);

function colorLink () {
  links.forEach( elt => elt.classList.remove('active'));
  this.classList.add('active');
}

links.forEach( elt => elt.addEventListener('click', colorLink))