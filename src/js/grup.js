import grups from '../data/grups.json' /*assert {type: "json"};*/
import songs from '../data/songs.json' /*assert {type: "json"};*/

const valores = window.location.search;
console.log(valores);

//recuperem els paràmetres enviats a la web
const urlParams = new URLSearchParams(valores);

//Aquí ja tenim els paràmetres recuperats
var grupSel = urlParams.get('grup');

var grup = grups.filter(x => x.nom === grupSel);

//titol
let titol = document.getElementById('titolCap');
titol.innerText = grup[0].nom;


//imatge responsiva del grup
//--------------------------

//fotogrup és un element <picture>
let imatge = document.getElementById('fotoGrup');

let origenPetit = document.createElement('source');
let origenGran = document.createElement('source');
let img = document.createElement('img');

//Aquí definim la imatge per resolucons grans
origenGran.media = "(min-width: 650px)";
origenGran.srcset = `./img/grups/${grup[0].fotoGrup}`;

//Aquí la imatge per resolucions més petites i dispositius mòbils
origenPetit.media = "(min-width: 100px)";
origenPetit.srcset = `./img/grups/petites/${grup[0].fotoGrup}`;

//Aquí la imatge per defecte si no és ninguna de les opcions anteriors
img.src = `./img/grups/${grup[0].fotoGrup}`;
img.alt = grup[0].nom;

//Ho afegim tot a l'elemet <picture>
imatge.append(origenGran);
imatge.append(origenPetit);
imatge.append(img);

let historia = document.getElementById('textHistoria');
let credits = document.getElementById('creditos');
credits.innerText = `Créditos: ${grup[0].credits}`
credits.classList = "credits";

historia.innerHTML = grup[0].historia;


const llistaCat = document.createElement('ul');
llistaCat.className = 'llista';

    //borrem cançons anteriors llistades
    let llistaCan = document.querySelectorAll('li.song');
    [].forEach.call(llistaCan, function (c) {
        c.remove();
    });
    llistaCan = document.querySelectorAll('ul.containerSongs');
    [].forEach.call(llistaCan, function (c) {
        c.remove();
    });
    
    //Llistat de cançons
    const espaiSongs = document.getElementById('temes');
    const llista = document.createElement('ul');
    llista.className = "containerSongs";
    const songsCat = songs.filter(x => x.grupo === grup[0].nom);
    console.log(songsCat);
    
    //Bucle per llistar les cançons filtrades per categoria
    songsCat.forEach(song =>{
        let single = document.createElement('li');
        single.id = single.id;
        single.className = "song";
        let video = document.createElement('div');
        video.className = "videoSong";
        video.innerHTML = `<iframe src="${song.video}" title="${song.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        let dades = document.createElement('div');
        dades.className = "dadesSong";
        let titolSong = document.createElement('H1');
        titolSong.className = "titolSong"
        titolSong.innerText = `${song.grupo} - ${song.titulo}`;
       
        let dadesSong = document.createElement('ul');
        let creditos = `<li><b>Autors:</b> ${song.creditos}</li>`
        let album = `<li><b>Àlbum:</b> ${song.álbum} (${song.año})</li>`
        let descripcion = `<li><p><b>Comentari:</b></p> ${song.descripcion}</li>`
        let webGrupo = `<li><b>Web:</b> <a href="${song.webGrupo}">${song.webGrupo}</a></li>`
        let categoria = `<li><p><b>Categoria:</b></p> ${song.categoria}</li>`
        let wikipedia = `<li><b>Wiki:</b> <a href="${song.wikipedia}">anar-hi</a></li>`
        let htmlDades =  creditos + album  + webGrupo  + wikipedia;
        dadesSong.innerHTML = htmlDades;
        
        dades.append(titolSong);
        dades.append(dadesSong);
        
        single.append(video);
        single.append(dades);
        
        llista.appendChild(single);
    });
    espaiSongs.append(llista);

//Discografia
let discografia = document.getElementById('discografia');
let albums = document.createElement('ul');

let llistaDiscografia = grup[0].discografia;
llistaDiscografia.forEach(disco => {
    let disc = document.createElement('li');
    disc.className = "album";
    disc.innerHTML = `<h1>${disco.album}</h1><p>${disco.any}</p>`;
    albums.appendChild(disc);
});
discografia.append(albums);

