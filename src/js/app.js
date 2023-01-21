 //aquí importem les dades JSON
 import categories from '../data/categories.json' /*assert {type: "json"}*/;
 import grups from '../data/grups.json';

 //Recuperem i guardem el contenidor Swiper on anirà l'slide
 const containerSlide = document.getElementById('contenidorSwiper');

//anem a comprobar la resolució de la pantalla inicialment per veure quines
//imatges de l'slide triarem
var resolució = window.outerWidth;


//Bucle per recòrrer totes les categories
//Aquí la idea és crear un div per l'slide amb la imatge de fons i el títol 
//de cadascuna de les categories 
categories.forEach(categoria => {
  var slide = document.createElement('div');
  slide.className = "swiper-slide";
  slide.id = categoria.id;
  
  //creem l'slide
  if(resolució>700){//Comprovem la resolució inicial del dispositiu
    //Desktop
    slide.style.backgroundImage = `url('img/slide/${categoria.img}')`;
    slide.style.backgroundPosition = 'center';
  }
  else{
    //Mobile
    slide.style.backgroundImage = `url('img/slide/mobil/${categoria.img}')`;
    slide.style.backgroundPosition = 'center';
  }

   //enllaç a la categoria corresponent
  let link = document.createElement('a');
  link.href = `./categoria.html?cat=${categoria.id}`;
  link.innerHTML = `<H1>${categoria.titulo}</H1>`;
  slide.append(link);
  
  //Afegim l'slide al contenidor d'slides
  containerSlide.append(slide);

});

//Canviem la imatge de l'slide segon la resolució de la pantalla 
window.addEventListener("resize", ()=>{
  let res = window.outerWidth;    
    categories.forEach(categoria => {
    let slide = document.getElementById(categoria.id);
    
    if(res>700){
      //Desktop
      slide.style.backgroundImage = `url('img/slide/${categoria.img}')`;
      slide.style.backgroundPosition = 'center';
    }
    else{
      //Mobile
      slide.style.backgroundImage = `url('img/slide/mobil/${categoria.img}')`;
      slide.style.backgroundPosition = 'center';
    }
  });
});

//CONFIGURACIÓ DE L'SLIDE
// core version + navigation, pagination modules:
 import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

// Configuramos los módulos a usar
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  //autoplay: {
  //  delay: 2500
    //disableOnInteraction: false,
  //},

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


//Després de l'slide ve la part de presentació que no la programem en JS
//tot seguit ve el div dels grups musicals
//Aquí està el bucle que anirà recorrent els diferents grups

let containerGrup = document.getElementById('grups');
grups.forEach(grup =>{
  let divGrup = document.createElement('div');
  divGrup.className = "grup";
  let imgGrup =  document.createElement('img');
  let linkGrup = document.createElement('a');
  imgGrup.className = 'imgGrup';
  imgGrup.srcset = `img/grups/miniatures/${grup.fotoGrup}`;
  imgGrup.alt = grup.nom;
  imgGrup.loading="lazy";

  //el link a la plana grup.html li assignem un paràmetre grup.nom
  linkGrup.href = `grup.html?grup=${grup.nom}`;
  linkGrup.append(imgGrup);
  let titolGrup = document.createElement('h1');
  titolGrup.innerText = grup.nom;
  divGrup.appendChild(linkGrup);
  divGrup.appendChild(titolGrup);
  
  containerGrup.append(divGrup);
  
});

//Anem a omplir el desplegable dels grups en el peu de página

var despGrups = document.getElementById('despGrups');

grups.forEach(grup=>{
  let opcio = document.createElement('option');
  opcio.value = grup.nom;
  opcio.text = grup.nom;
  despGrups.append(opcio);
});

despGrups.addEventListener('change',event => {
  location.href = `grup.html?grup=${event.target.value}`;
});

//Anem a omplir el desplegable de les categories en el peu de página

var despCat = document.getElementById('despCat');

categories.forEach(cat=>{
  let opcio = document.createElement('option');
  opcio.value = cat.titulo;
  opcio.text = cat.titulo;
  despCat.append(opcio);
});

despCat.addEventListener('change',event => {
  let cat = categories.find(x => x.titulo === event.target.value);
  location.href = `categoria.html?cat=${cat.id}`;
});