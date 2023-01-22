import grups from '../data/grups.json' /*assert {type: "json"};*/
import songs from '../data/songs.json' /*assert {type: "json"};*/

const valores = window.location.search;


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
img.loading = "lazy"
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
    
    //Bucle per llistar les cançons filtrades per grup
    songsCat.forEach(song =>{
        let single = document.createElement('li');
        single.id = single.id;
        single.className = "song";
        let video = document.createElement('div');
        video.className = "videoSong";
       //Utilitzem srcdoc per especificar l'enllaç al video i la imatge predeterminada del video, així evitem carregar el video de l'iframe per defecte
        //de youtube, només carrega la imatge predeterminada i l'enllaç al video, GENIAL!
        video.innerHTML = `<iframe 
                            src="${song.video}"
                            srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
                                <a href=${song.video}><img src=https://img.youtube.com/vi/${song.idVideo}/hqdefault.jpg alt='${song.titulo}'><span>▶</span></a>"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            title="${song.titulo}"
                           ></iframe>`
        let dades = document.createElement('div');
        dades.className = "dadesSong";
        let titolSong = document.createElement('H1');
        titolSong.className = "titolSong"
        titolSong.innerText = `${song.grupo} - ${song.titulo}`;
       
        let dadesSong = document.createElement('ul');
        let creditos = `<li><b>Autors:</b> ${song.creditos}</li>`
        let album = `<li><b>Àlbum:</b> ${song.álbum} (${song.año})</li>`
        let descripcion = `<li><p><b>Comentari:</b></p> ${song.descripcion}</li>`
        let webGrupo = `<li><a href="${song.webGrupo}">web</a></li>`
        let categoria = `<li><p><b>Categoria:</b></p> ${song.categoria}</li>`
        let wikipedia = `<li><a href="${song.wikipedia}">wikipedia</a></li>`
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

