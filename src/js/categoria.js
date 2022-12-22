import categories from '../data/categories.json' /*assert {type: "json"}*/;
import songs from '../data/songs.json' /*assert {type: "json"}*/;

//recuperem els paràmetres enviats a la web
const valores = window.location.search;


//Aquí ja tenim els paràmetres recuperats
const urlParams = new URLSearchParams(valores);

//Accedim al paràmetre "cat"
var IdCat = urlParams.get('cat');

//Filtrem la categoria per possar-hi el títol i la imatge de fons de la web
var categoria = categories.filter(x => x.id === IdCat);

//canvi imatge de fons canviant la propietat del CSS
let element = document.getElementById('cos');
element.style.backgroundImage = `url('img/${categoria[0].img}'`;

//Canviem el títol de la capçalera
const titolCat = document.getElementById('titolCap');
titolCat.innerText = categoria[0].titulo;

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
    const espaiSongs = document.getElementById('llistaSongs');
    const llista = document.createElement('ul');
    llista.className = "containerSongs";
    const songsCat = songs.filter(x => x.categoria.some(xx => xx === categoria[0].id));
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
        titolSong.innerText = song.titulo;
        let grupSong = document.createElement('a');
        grupSong.href = `./grup.html?grup=${song.grupo}` 
        grupSong.innerText = song.grupo;
        grupSong.className="songGrup";
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
        dades.append(grupSong);
        dades.append(dadesSong);
        
        single.append(video);
        single.append(dades);
        
        llista.appendChild(single);
    });
    espaiSongs.append(llista);