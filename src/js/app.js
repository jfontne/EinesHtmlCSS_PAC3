 //aquí importem les dades JSON
 import categories from '../data/categories.json' /*assert {type: "json"}*/;
 import grups from '../data/grups.json';

 //Recuperem i guardem el contenidor Swiper on anirà l'slide
 const containerSlide = document.getElementById('contenidorSwiper');

//Bucle per recòrrer totes les categories
//Aquí la idea és crear un div per l'slide amb la imatge de fons i el títol 
//de cadascuna de les categories 
categories.forEach(categoria => {
  
  //creem l'slide
  let slide = document.createElement('div');
  slide.className = "swiper-slide";
  slide.style.backgroundImage = `url('img/${categoria.img}')`;
  slide.style.backgroundPosition = 'center';

  //enllaç a la categoria corresponent
  let link = document.createElement('a');
  link.href = `./categoria.html?cat=${categoria.id}`;
  link.innerHTML = `<H1>${categoria.titulo}</H1>`;
  slide.append(link);
  
  //Afegim l'slide al contenidor d'slides
  containerSlide.append(slide);

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
  autoplay: {
    delay: 2500
    //disableOnInteraction: false,
  },

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
  imgGrup.src = `img/grups/${grup.fotoGrup}`;
  imgGrup.alt = grup.nom;

  //el link a la plana grup.html li assignem un paràmetre grup.nom
  linkGrup.href = `grup.html?grup=${grup.nom}`;
  linkGrup.append(imgGrup);
  let titolGrup = document.createElement('h1');
  titolGrup.innerText = grup.nom;
  divGrup.appendChild(linkGrup);
  divGrup.appendChild(titolGrup);
  
  containerGrup.append(divGrup);
  
});
