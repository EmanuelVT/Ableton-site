
var navbar = document.querySelector(".second-header");

var sticky = navbar.offsetTop;

console.log(window.pageYOffset)

function scrolling() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
      console.log(this.oldScroll > this.scrollY);
      
        if((this.oldScroll > this.scrollY) === true){
            
            navbar.classList.add("sticky-up")
        } else{
            navbar.classList.remove("sticky-up")
        }
        this.oldScroll = this.scrollY;

    } else {
      navbar.classList.remove("sticky");
      navbar.classList.remove("sticky-up");
    }
  }

  window.onscroll = (e) => { 
 
    scrolling();
  }

  var rightSide = document.querySelector("#right-side");
  console.log(rightSide)
  var leftSide = document.querySelector("#left-side");
  var mobileMenuDesktop = document.querySelector(".mobile-menu-desktop");
  var container = document.querySelector(".container");
  var mobileMenu = document.querySelector(".mobile-menu");
  var menuButton = document.querySelector(".menu-button");

  if(window.innerWidth <= 1047){
    mobileMenuDesktop.classList.add("desktop-active");
    rightSide.classList.add("inactive");
    leftSide.classList.add("inactive");
    container.classList.add("container-modifier");}


  $(window).resize(function() {
    console.log('window was resized');
    console.log(window.innerWidth)
    if(window.innerWidth <= 1047){
      mobileMenuDesktop.classList.add("desktop-active");
      rightSide.classList.add("inactive");
      leftSide.classList.add("inactive");
      container.classList.add("container-modifier");
    } else{
      mobileMenuDesktop.classList.remove("desktop-active");
      rightSide.classList.remove("inactive");
      leftSide.classList.remove("inactive");
      container.classList.remove("container-modifier");
    }
  });

  mobileMenuDesktop.addEventListener('click', event => {
    mobileMenu.classList.add("active");
  });

  menuButton.addEventListener('click', event => {
    mobileMenu.classList.remove("active");
  });


  
 // hamburger.classList.add("active");
 // freeTrial.classList.add("inactive");
 // register.classList.add("inactive");