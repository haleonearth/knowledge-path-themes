


var search = document.querySelector('.header__search');
var searchInput = document.querySelector('.hs-search-field__input');
var searchClose = document.querySelector('.header__search--close');
var searchToggle = document.querySelector('.header__search--toggle');

var header = document.querySelector('.header');
var nav = document.querySelector('.header__navigation');
var navToggle = document.querySelector('.header__navigation--toggle');

var langSwitcher = document.querySelector('.header__language-switcher');
var langToggle = document.querySelector('.header__language-switcher--toggle');
var body = document.querySelector('.body-wrapper');
var headerDynamicScroll = body.classList.contains('body-wrapper--header-dynamic_scroll_up');
var headerTransparent = body.classList.contains('body-wrapper--header-transparent');
var isHeaderFixed = body.classList.contains('body-wrapper--header-fixed');

function closeAll() {    
  document.querySelectorAll('.header__navigation, .header__language-switcher, .header__search').forEach(function( item ) {
    item.classList.remove('open');
  })
  navToggle.classList.remove('header__navigation--close');
}

function toggleSearch() {
  if(search.classList.contains('open')) {
    closeAll();
    return;
  }
  closeAll();
  search.classList.toggle('open');
}

function toggleNav() {
  if(nav.classList.contains('open')) {
    closeAll();
    return;
  }
  closeAll();
  navToggle.classList.add('header__navigation--close');
  nav.classList.toggle('open');
}

function toggleLang() {
  if(langSwitcher.classList.contains('open')) {
    closeAll();
    return;
  }
  closeAll();
  langSwitcher.classList.toggle('open');
}

// Function to handle when the header behavior is set to "dynamic scroll up"
function handlerDynamicScroll(e) {
  const oldSt = document.documentElement.scrollTop;
  setTimeout(()=>{
    const newSt = document.documentElement.scrollTop;
    if(oldSt < newSt) body.classList.add('scroll-down');
    if(oldSt > newSt) body.classList.remove('scroll-down');
  },50)
}

function transparentScroll(e) {
  const oldSt = document.documentElement.scrollTop;
  const headerHeight = header.clientHeight
  setTimeout(()=>{
    const newSt = document.documentElement.scrollTop;
    if(newSt > headerHeight) {
      body.classList.add('scroll-transparent');
    }
    else {
      body.classList.remove('scroll-transparent');
    }
  },50)
}

searchToggle ? searchToggle.addEventListener('click', toggleSearch) : '';
searchClose ? searchClose.addEventListener('click', toggleSearch) : '';
navToggle ? navToggle.addEventListener('click', toggleNav) : '' ;
langToggle ? langToggle.addEventListener('click', toggleLang) : '';
headerDynamicScroll ? document.addEventListener('scroll', handlerDynamicScroll) : '';
headerTransparent ? document.addEventListener('scroll', transparentScroll) : '';

// Function to handle scroll to section within the button or any other link 
// This code takes into account the different behavior of the header
document.querySelectorAll('.button, a.menu-link, .footer__menu a').forEach(function(item) {
  item.addEventListener('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (item.hash) {        
      let hash = item.hash;
      let sectionNum = hash.replace('#section-', '');
      let elm = document.querySelectorAll('.dnd-section')[sectionNum - 1];
      if(elm){

        var urlPage = item.href.split('?')[0]
        var urlOrigin = window.location.origin + window.location.pathname
        if( urlPage == urlOrigin) {   
          event.preventDefault();
          let offsetY = isHeaderFixed ? -header.offsetHeight : 0 ;
          let scrollToPos = elm.getBoundingClientRect().top + window.pageYOffset + offsetY;
          window.scrollTo({top: scrollToPos, behavior: 'smooth'});  
        }              
      }        
    }
  });
});

// If statement to handle button type of link = "Page Link and Scroll to Section"
// This would look for #section-3 on the URL to scroll to section after page load
let hash = window.location.hash;
if (hash) { 
  let sectionNum = hash.replace('#section-', '');
  let elm = document.querySelectorAll('.dnd-section')[sectionNum - 1];
  let offsetY = isHeaderFixed ? -header.offsetHeight : 0 ;
  let scrollToPos = elm.getBoundingClientRect().top + window.pageYOffset + offsetY;
  window.scrollTo({top: scrollToPos, behavior: 'smooth'});
}




