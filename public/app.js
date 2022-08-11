const menu = document.querySelector( ' #mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

//display mobile menu 

const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('activ')
};

menu.addEventListener('click', mobileMenu);

const hightLightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;


    if( window.innerWidth > 960 && scrollPos < 600 ) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return 
    } else if ( window.innerWidth> 960 && scrollPos < 1400 ) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    }else if (window.innerWidth> 960 && scrollPos < 2345){
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
        return
    }

    if ((elem && window.innerWidth< 960 && scrollPos < 600 )|| elem) {
        elem.classList.remove('highlight');
    }

};

window.addEventListener('scroll'  , hightLightMenu)
window.addEventListener('click' , hightLightMenu)

const hidemobilemenu = () => {
    const menubars = document.querySelector('.is-active');
    if (window.innerWidth >= 768 && menubars ){
        menu.classList.toggle('is-active');
        menulinks.classList.remove('activ');
    }
};

menulinks.addEventListener('click', hidemobilemenu);
navLogo.addEventListener('click' , hidemobilemenu);

 