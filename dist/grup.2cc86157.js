// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6dt0U":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "71cc60922cc86157";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"a3oMs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _grupsJson = require("../data/grups.json"); /*assert {type: "json"};*/ 
var _grupsJsonDefault = parcelHelpers.interopDefault(_grupsJson);
var _songsJson = require("../data/songs.json"); /*assert {type: "json"};*/ 
var _songsJsonDefault = parcelHelpers.interopDefault(_songsJson);
const valores = window.location.search;
//recuperem els paràmetres enviats a la web
const urlParams = new URLSearchParams(valores);
//Aquí ja tenim els paràmetres recuperats
var grupSel = urlParams.get("grup");
var grup = (0, _grupsJsonDefault.default).filter((x)=>x.nom === grupSel);
//titol
let titol = document.getElementById("titolCap");
titol.innerText = grup[0].nom;
//imatge responsiva del grup
//--------------------------
//fotogrup és un element <picture>
let imatge = document.getElementById("fotoGrup");
let origenPetit = document.createElement("source");
let origenGran = document.createElement("source");
let img = document.createElement("img");
//Aquí definim la imatge per resolucons grans
origenGran.media = "(min-width: 650px)";
origenGran.srcset = `./img/grups/${grup[0].fotoGrup}`;
//Aquí la imatge per resolucions més petites i dispositius mòbils
origenPetit.media = "(min-width: 100px)";
origenPetit.srcset = `./img/grups/petites/${grup[0].fotoGrup}`;
//Aquí la imatge per defecte si no és ninguna de les opcions anteriors
img.src = `./img/grups/${grup[0].fotoGrup}`;
img.alt = grup[0].nom;
img.loading = "lazy";
//Ho afegim tot a l'elemet <picture>
imatge.append(origenGran);
imatge.append(origenPetit);
imatge.append(img);
let historia = document.getElementById("textHistoria");
let credits = document.getElementById("creditos");
credits.innerText = `Créditos: ${grup[0].credits}`;
credits.classList = "credits";
historia.innerHTML = grup[0].historia;
const llistaCat = document.createElement("ul");
llistaCat.className = "llista";
//borrem cançons anteriors llistades
let llistaCan = document.querySelectorAll("li.song");
[].forEach.call(llistaCan, function(c) {
    c.remove();
});
llistaCan = document.querySelectorAll("ul.containerSongs");
[].forEach.call(llistaCan, function(c) {
    c.remove();
});
//Llistat de cançons
const espaiSongs = document.getElementById("temes");
const llista = document.createElement("ul");
llista.className = "containerSongs";
const songsCat = (0, _songsJsonDefault.default).filter((x)=>x.grupo === grup[0].nom);
//Bucle per llistar les cançons filtrades per grup
songsCat.forEach((song)=>{
    let single = document.createElement("li");
    single.id = single.id;
    single.className = "song";
    let video = document.createElement("div");
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
                           ></iframe>`;
    let dades = document.createElement("div");
    dades.className = "dadesSong";
    let titolSong = document.createElement("H1");
    titolSong.className = "titolSong";
    titolSong.innerText = `${song.grupo} - ${song.titulo}`;
    let dadesSong = document.createElement("ul");
    let creditos = `<li><b>Autors:</b> ${song.creditos}</li>`;
    let album = `<li><b>Àlbum:</b> ${song.álbum} (${song.año})</li>`;
    let descripcion = `<li><p><b>Comentari:</b></p> ${song.descripcion}</li>`;
    let webGrupo = `<li><b>Web:</b> <a href="${song.webGrupo}">${song.webGrupo}</a></li>`;
    let categoria = `<li><p><b>Categoria:</b></p> ${song.categoria}</li>`;
    let wikipedia = `<li><b>Wiki:</b> <a href="${song.wikipedia}">anar-hi</a></li>`;
    let htmlDades = creditos + album + webGrupo + wikipedia;
    dadesSong.innerHTML = htmlDades;
    dades.append(titolSong);
    dades.append(dadesSong);
    single.append(video);
    single.append(dades);
    llista.appendChild(single);
});
espaiSongs.append(llista);
//Discografia
let discografia = document.getElementById("discografia");
let albums = document.createElement("ul");
let llistaDiscografia = grup[0].discografia;
llistaDiscografia.forEach((disco)=>{
    let disc = document.createElement("li");
    disc.className = "album";
    disc.innerHTML = `<h1>${disco.album}</h1><p>${disco.any}</p>`;
    albums.appendChild(disc);
});
discografia.append(albums);

},{"../data/grups.json":"8SG4D","../data/songs.json":"8pC4X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8SG4D":[function(require,module,exports) {
module.exports = JSON.parse('[{"id":"1","nom":"Level 42","components":["Mark King","Mike Lindup","Philip Gould","Boon Gould"],"estil":"Jazz Funk, Rock, Acid Jazz, Synthpop","anyFundacio":"1979","historia":"Level 42 es una banda brit\xe1nica y de estilo funk-pop. El grupo tuvo gran \xe9xito en el Reino Unido y en el resto del mundo durante los 80. La banda gan\xf3 fama por la calidad de m\xfasicos como Mark King, cuya t\xe9cnica magistral de tocar el bajo fue un trampol\xedn para muchos \xe9xitos de la banda.<br><br>Los miembros fundadores de la banda fueron Mark King, Mike Lindup y los hermanos Boon Gould y Philip Gould. El teclista de estudio Wally Badarou contribuy\xf3 a muchos de sus primeros \xe9xitos, y es considerado por muchos el quinto miembro del grupo, aunque nunca se uni\xf3 oficialmente. Otros miembros a tiempo completo que han colaborado a lo largo de los a\xf1os fueron Alan Murphy, Gary Husband, Jakko Jakszyk, Nathan King, Lyndon Connah y Sean Freeman.<br><br>La banda a\xfan realiza conciertos en directo (con Mark King a la cabeza y con variaciones en su formaci\xf3n original), y su nuevo \xe1lbum, Retroglide, estuvo previsto para ser lanzado el 18 de septiembre de 2006.","discografia":[{"album":"Level 42","any":"1980"},{"album":"Strategy/The Early Tapes","any":"1982"},{"album":"The Pursuit of Accidents","any":"1983"},{"album":"Standing in the Light","any":"1983"},{"album":"True Colours","any":"1984"},{"album":"World Machine","any":"1985"},{"album":"Running In The Family","any":"1987"},{"album":"Staring At The Sun","any":"1988"},{"album":"Guaranteed","any":"1991"},{"album":"Forever Now","any":"1994"},{"album":"Retroglide","any":"2006"},{"album":"Sirens","any":"2013"}],"fotoGrup":"level42.jpg","web":"level42.com","credits":"wikipedia"},{"id":"2","nom":"Coldplay","components":["Chris Martin","Jonny Buckland","Guy Berryman","Will Champion"],"estil":"Pop rock,rock alternativo, post-britpop, pop","anyFundacio":"1996","historia":"Coldplay es una banda de rock brit\xe1nica formada en Londres en 1996. Est\xe1 formada por el vocalista y pianista Chris Martin, el guitarrista Jonny Buckland, el bajista Guy Berryman, el baterista Will Champion y el director creativo Phil Harvey. Se conocieron en University College London y comenzaron a tocar m\xfasica juntos desde 1996 hasta 1998, primero llam\xe1ndose a s\xed mismos Pectoralz y luego Starfish. <br> Despu\xe9s de lanzar de forma independiente un EP, Safety (1998), Coldplay firm\xf3 con Parlophone en 1999. El \xe1lbum debut de la banda, Parachutes (2000), incluy\xf3 su exitoso sencillo \'Yellow\' y recibi\xf3 un Brit Award por \xc1lbum Brit\xe1nico del A\xf1o, un Grammy Premio al Mejor \xc1lbum de M\xfasica Alternativa y nominaci\xf3n al Premio Mercury. Su segundo \xe1lbum, A Rush of Blood to the Head (2002), gan\xf3 los mismos elogios e incluy\xf3 los sencillos \'The Scientist\' y \'Clocks\', y este \xfaltimo gan\xf3 un premio Grammy por Grabaci\xf3n del a\xf1o. Destacado por una producci\xf3n problem\xe1tica, el tercer \xe1lbum de la banda, X&Y (2005), fue el m\xe1s vendido del a\xf1o en todo el mundo, un logro repetido por su sucesor, Viva la Vida or Death and All His Friends (2008), que los vio explorar nuevos estilos musicales. territorio tras la finalizaci\xf3n de lo que se consider\xf3 una trilog\xeda. Recibi\xf3 un premio Grammy al Mejor \xc1lbum de Rock y su primera nominaci\xf3n al \xc1lbum del A\xf1o, mientras que la canci\xf3n principal se convirti\xf3 en el primer sencillo de un grupo brit\xe1nico en alcanzar el n\xfamero uno tanto en el Reino Unido como en los Estados Unidos en el siglo XXI. <br> Desde entonces, Coldplay diversific\xf3 a\xfan m\xe1s su sonido con los lanzamientos posteriores Mylo Xyloto (2011), Ghost Stories (2014), A Head Full of Dreams (2015), Everyday Life (2019) y Music of the Spheres (2021). Cada \xe1lbum presentaba un tema \xfanico y a\xf1ad\xeda nuevos estilos musicales al repertorio original de la banda, incluyendo electr\xf3nica, ambient, pop, R&B, funk, cl\xe1sica, jazz fusi\xf3n y rock progresivo. Tambi\xe9n son conocidos por sus presentaciones en vivo \'euf\xf3ricas\',que NME dijo que es cuando la banda \'cobra vida y tiene m\xe1s sentido\'. Para celebrar su vig\xe9simo aniversario en 2018, se estren\xf3 en cines seleccionados un documental que abarca toda la carrera dirigido por Mat Whitecross, que presenta im\xe1genes detr\xe1s de escena nunca antes vistas. <br>Con 100 millones de \xe1lbumes vendidos en todo el mundo, Coldplay es la banda m\xe1s exitosa del siglo XXI y uno de los actos musicales m\xe1s vendidos de todos los tiempos.Nota Seg\xfan Fuse, tambi\xe9n es el sexto grupo m\xe1s premiado de la historia. Otros logros notables incluyen la sexta gira m\xe1s taquillera de todos los tiempos, tres de los 50 \xe1lbumes m\xe1s vendidos en el Reino Unido, la mayor cantidad de discos n\xfamero uno en el pa\xeds sin perder nunca la cima,la mayor\xeda de las nominaciones y victorias para una banda en la historia de los Brit Awards y convertirse en el primer grupo brit\xe1nico en debutar en el n\xfamero uno en el Billboard Hot 100. Coldplay tambi\xe9n se considera una de las bandas m\xe1s influyentes del siglo XXI, y Forbes los describe como el est\xe1ndar. para la escena alternativa actual. El Sal\xf3n de la Fama del Rock and Roll incluy\xf3 A Rush of Blood to the Head en su lista de \'200 \xc1lbumes Definitivos\' y el sencillo \'Yellow\' forma parte de su exhibici\xf3n \'Songs That Shaped Rock and Roll\' por ser uno de los m\xe1s exitosos y grabaciones importantes en la industria. A pesar de su popularidad e impacto, Coldplay se ha ganado la reputaci\xf3n de ser \xedconos musicales polarizantes.","discografia":[{"album":"Parachutes","any":"2000"},{"album":"A Rush of Blood to the Head","any":"2002"},{"album":"X&Y","any":"2005"},{"album":"Viva la Vida or Death and All His Friends","any":"2008"},{"album":"Mylo Xyloto","any":"2011"},{"album":"Ghost Stories","any":"2014"},{"album":"A Head Full of Dreams","any":"2015"},{"album":"Everyday Life","any":"2019"},{"album":"Music of the Spheres","any":"2021"}],"fotoGrup":"coldplay.jpg","web":"coldplay.com","credits":"wikipedia"},{"id":"3","nom":"Bee Gees","components":["Barry Gibb","Robin Gibb","Maurice Gibb"],"estil":"Discopop, rockpop, pop, barrocopop, psicod\xe9licosoft, rock","anyFundacio":"1958","historia":"Bee Gees fue un grupo musical brit\xe1nico de pop rock formado por los hermanos Barry, Robin y Maurice Gibb en 1958. Conocidos como los \xabreyes de la m\xfasica disco\xbb, gozaron de su mayor fama entre 1967 y 1979, con varios temas donde destaca el caracter\xedstico falsete del grupo.<br><br>En el \xe1lbum doble Saturday Night Fever, banda sonora de la pel\xedcula hom\xf3nima, los Bee Gees aportaron las seis canciones principales. Al vender m\xe1s de 22 millones de copias, se convirtieron en uno de los grupos m\xe1s exitosos de toda la historia de la m\xfasica.<br><br>Algunas de sus canciones m\xe1s populares son: How deep is your love, How Can You Mend a Broken Heart, To Love Somebody, I Started a Joke, Words, Massachusetts, Nights on Broadway, Jive Talkin\', Wind of change, More than a woman, Night Fever, Run to Me, Stayin\' Alive, Tragedy, Too Much Heaven, Alone, You Win Again, You Should Be Dancing, Still Waters, I surrender, entre otras.<br><br>Billboard situ\xf3 tres de sus sencillos entre los mejores de todos los tiempos en el listado Hot 100 y ubic\xf3 a How deep is your love, Night Fever y Stayin Alive en las posiciones #25, #42 y #59.<br><br>Los Bee Gees abarcaron gran parte de la escena musical, en especial con la fiebre disco durante la segunda mitad de los 1970, de la mano del productor Robert Stigwood. Se ubican entre los m\xe1s importantes artistas del g\xe9nero musical. Su gran influencia en la industria musical fue reconocida en 2003, al convertirse en la primera y hasta hoy \xfanica banda en poseer un premio Grammy Legend.<br><br>La banda ces\xf3 su actividad en 2003 tras la muerte del hermano menor, Maurice. Como supervivientes, Barry y Robin anunciaron que el nombre Bee Gees ya no se usar\xeda en presentaciones tras la p\xe9rdida de un integrante; sin embargo, el 7 de septiembre de 2009, Robin le revel\xf3 a Jonathan Agnew que estuvo hablando con Barry y decidieron volver a los escenarios. Luego, en 2012 falleci\xf3 Robin tras una lucha con el c\xe1ncer y, con Barry solo, la etapa de los Bee Gees se cerr\xf3 definitivamente.<br><br>Bee Gees fue uno de los grupos m\xe1s exitosos en la historia de la m\xfasica, con m\xe1s de 40 a\xf1os de actividad ininterrumpida. Han vendido m\xe1s de 220 millones de copias a nivel mundial, entre \xe1lbumes y sencillos.","discografia":[{"album":"The Bee Gees Sing and Play 14 Barry Gibb Songs","any":"1965"},{"album":"Spicks and Specks","any":"1966"},{"album":"Bee Gees\' 1st","any":"1967"},{"album":"Horizontal","any":"1968"},{"album":"Idea","any":"1968"},{"album":"Odessa ","any":"1969"},{"album":"Cucumber Castle","any":"1970"},{"album":"2 Years On","any":"1970"},{"album":"Trafalgar","any":"1971"},{"album":"To Whom It May Concern","any":"1972"},{"album":"Life in a Tin Can","any":"1973"},{"album":"Mr. Natural","any":"1974"},{"album":"Main Course","any":"1975"},{"album":"Children of the World","any":"1976"},{"album":"Saturday Night Fever","any":"1977"},{"album":"Spirits Having Flown","any":"1979"},{"album":"Living Eyes","any":"1981"},{"album":"E.S.P.","any":"1987"},{"album":"One","any":"1989"},{"album":"High Civilization","any":"1991"},{"album":"Size Isn\'t Everything","any":"1993"},{"album":"Still Waters","any":"1997"},{"album":"This Is Where I Came In","any":"2001"}],"fotoGrup":"beegees.jpg","web":"beegees.com","credits":"wikipedia"},{"id":"4","nom":"Eagles","components":["Don Henley","Joe Walsh","Timothy B. Schmit"],"estil":"Rock ,Country rock, Hard rock, Soft rock","anyFundacio":"1971","historia":"Eagles es una banda estadounidense de country rock y hard rock formada en Los \xc1ngeles, California, EE. UU., en 1971, hasta el 2016, en que finaliz\xf3 la carrera de la banda, con la muerte de uno de los fundadores y su vocalista Glenn Frey.1​La banda es mayormente conocida por su canci\xf3n “Hotel California” de 1976, acreditada por Don Felder y Don Henley.<br><br>Inicialmente su m\xfasica era una mezcla entre country e instrumentaci\xf3n bluegrass con armon\xedas de surf rock californiano. El resultado fueron baladas sensibles y m\xfasica con cierto toque country y pop rock. Sus letras hablaban de coches, relaciones y vidas sin rumbo. Los inventores de este g\xe9nero fueron cantautores como Gram Parsons, Jackson Browne, J.D. Souther y Warren Zevon.<br><br>Eagles encajaron el esp\xedritu del cantautor en el marco de una formaci\xf3n musical, con un marcado \xe9nfasis en los arreglos y en la maestr\xeda musical, y el sonido inicial del grupo lleg\xf3 a ser sin\xf3nimo del country rock del sur de California. En \xe1lbumes posteriores, el grupo prescindi\xf3 de la instrumentaci\xf3n bluegrass y se movi\xf3 hacia un sonido claramente m\xe1s roquero.<br><br>Con cinco sencillos y seis \xe1lbumes n\xfameros uno, Eagles est\xe1n entre los m\xe1s destacados grupos de estudio de los a\xf1os 1970. Al final del siglo XX, dos de sus \xe1lbumes, Their Greatest Hits (1971-1975) y Hotel California, quedaron clasificados entre los 20 \xe1lbumes superventas de EE. UU., seg\xfan la RIAA estadounidense. Asimismo, seg\xfan la revista Rolling Stone en 2004, el \xe1lbum Hotel California est\xe1 clasificado entre los 500 mejores de todos los tiempos, y el grupo ocupa el n\xfamero 75 en la lista de los 100 mayores artistas de todos los tiempos.2​ Hasta la muerte de Michael Jackson en 2009, hecho que aument\xf3 las ventas de su \xe1lbum Thriller, ten\xedan en su haber el \xe1lbum m\xe1s vendido de EE. UU.: Their Greatest Hits (1971-1975).<br><br>Eagles se separaron en 1980, pero volvieron a juntarse en 1994 para dar un concierto ac\xfastico, registrado en el \xe1lbum Hell Freezes Over, una mezcla de temas cl\xe1sicos y nuevos. Han estado de gira desde entonces, y entraron en el Rock and Roll Hall of Fame en 1998. En 2007, Eagles lanz\xf3 Long Road Out of Eden, su primer \xe1lbum de estudio, despu\xe9s de 28 a\xf1os. Al a\xf1o siguiente emprendieron la gira Long Road out of Eden Tour, que transcurri\xf3 en el a\xf1o 2009 a trav\xe9s de Norteam\xe9rica y Europa. El primer concierto fue el 20 de marzo del 2008 en Londres, Inglaterra, y el \xfaltimo el 22 de julio de 2009 en Lisboa, Portugal, dando dos conciertos adicionales el 17 y 20 de abril de 2010 en Los \xc1ngeles, California.","discografia":[{"album":"Eagles","any":"1972"},{"album":"Desperado","any":"1973"},{"album":"On the Border","any":"1974"},{"album":"One of These Nights","any":"1975"},{"album":"Hotel California","any":"1976"},{"album":"The Long Run","any":"1979"},{"album":"Long Road Out Of Eden","any":"2007"}],"fotoGrup":"eagles.jpg","web":"eagles.com","credits":"wikipedia"},{"id":"5","nom":"Depeche Mode","components":["Dave Gahan","Martin Gore"],"estil":"Synth-pop​, Dark wave, Electr\xf3nica, M\xfasica industrial, New wave, Rock alternativo, Rock electr\xf3nico, Dance-rock","anyFundacio":"1980","historia":"Depeche Mode es una banda brit\xe1nica de m\xfasica electr\xf3nica formada en 1980 por Vince Clarke, Andrew Fletcher, Martin Gore y David Gahan. Despu\xe9s de su \xe1lbum debut Speak & Spell en 1981, Clarke dej\xf3 el grupo y fue sustituido por Alan Wilder, quien permaneci\xf3 hasta 1995, tras lo cual Gahan, Gore y Fletcher continuaron como tr\xedo hasta el fallecimiento de Fletcher en 2022, pese a lo cual Gahan y Gore siguen con el proyecto.<br><br>Seg\xfan el documental Historia del rock de la BBC \'son los padres del rock electr\xf3nico\'; est\xe1 considerado uno de los mejores exponentes del g\xe9nero, siendo importantes precursores del uso del sintetizador como instrumento y del sampler como recurso musical, as\xed como de la realizaci\xf3n de videos musicales. Ha vendido m\xe1s de 120 millones de \xe1lbumes, sumando el total de ventas de sus discos en todo el mundo, incluyendo sencillos, convirti\xe9ndose en el m\xe1s exitoso grupo de m\xfasica electr\xf3nica en la historia. Tambi\xe9n fue elegido entre los 50 mejores grupos de m\xfasica de todos los tiempos y uno de los 10 m\xe1s influyentes de la m\xfasica contempor\xe1nea.<br><br>Seg\xfan la revista Q, es \xabla banda de rock electr\xf3nico m\xe1s popular que el mundo ha conocido\xbby de acuerdo con el Sunday Telegraph es \xabuno de los m\xe1s grandes grupos de pop brit\xe1nico de todos los tiempos\xbb.","discografia":[{"album":"Speak & Spell","any":"1981"},{"album":"A Broken Frame","any":"1982"},{"album":"Construction Time Again","any":"1983"},{"album":"Some Great Reward","any":"1984"},{"album":"Black Celebration","any":"1986"},{"album":"Music for the Masses","any":"1987"},{"album":"Violator","any":"1990"},{"album":"Songs of Faith and Devotion","any":"1993"},{"album":"Ultra","any":"1997"},{"album":"Exciter","any":"2001"},{"album":"Playing the Angel","any":"2005"},{"album":"Sounds of the Universe","any":"2009"},{"album":"Delta Machine","any":"2013"},{"album":"Spirit","any":"2017"},{"album":"Memento Mori","any":"por publicarse en 2023"}],"fotoGrup":"depechemode.jpg","web":"dm.com","credits":"wikipedia"},{"id":"6","nom":"Kool and The Gang","components":["",""],"estil":"R&B, Soul, Disco, Funk, Jazz","anyFundacio":"1964","historia":"Los miembros principales del grupo a trav\xe9s de los a\xf1os han sido Robert \'Kool\' Bell en el bajo y Ronald Bell en el saxo tenor; George Brown en la bater\xeda; Robert Mickens en la trompeta; Dennis Thomas en el saxo alto; Claydes Charles Smith en la guitarra, Clifford Adams en el tromb\xf3n y Rick Westfield en los teclados.<br><br>El padre de Robert y Ronald trabaj\xf3 con Thelonious Monk y as\xed mismo los hermanos eran amigos de Leon Thomas. En 1964 Robert form\xf3 la banda instrumental \'The Jazziacs\' con cinco compa\xf1eros de colegio y despu\xe9s cambiaron su nombre a Kool & the Gang cuando lanzaron un \xe1lbum del mismo nombre en 1969.<br><br>Aunque no llegaron a poner un sencillo en listas, el \xe1lbum fue exitoso, lo que les permiti\xf3 seguir editando \xe1lbumes hasta que el de 1973 llamado Wild and Peaceful lleg\xf3 al reconocimiento general con las canciones \'Jungle Boogie\' y \'Hollywood Swinging\'. El sonido funk que hab\xedan estado cultivando lleg\xf3 a su m\xe1xima expresi\xf3n en el \xe1lbum de 1975 llamado The Spirit of the Boogie y despu\xe9s de este empieza un cambio radical hacia el sonido disco.<br><br>Entre 1973 y 1978, Kool & The Gang es reconocida como una de las bandas m\xe1s creativas del jazz-funk. En los \xfaltimos a\xf1os 70, la m\xfasica disco estaba en pleno apogeo y muchos grupos est\xe1n recurriendo a la m\xfasica funk uno menos elaborado y m\xe1s \'pop\' para llegar a un p\xfablico m\xe1s amplio. Es en este contexto que en 1978 James \'JT\' Taylor se uni\xf3 a la banda como cantante y Eumir Deodato como productor: la receta del \xe9xito.<br><br>Para en ese entonces se une al grupo el cantante James \'J.T.\'Taylor en el \xe1lbum Ladies\' Night comienza una nueva etapa m\xe1s comercial y en consecuencia m\xe1s exitosa, obtuvieron un n\xfamero 1 con \'Celebration\' del \xe1lbum Celebrate! del a\xf1o 1980, producido por Eumir Deodato.<br><br>\'Ladies Night\'(vendi\xf3 m\xe1s de un mill\xf3n de discos en los EE. UU.), \'Too Hot\', \'Hangin \'Out\'. Los a\xf1os 80 fueron los a\xf1os de gloria del grupo donde varios de sus temas encabezaron distintas listas. En esta \xe9poca de \xe9xitos como \'Celebration\'(1980), \'Get Down On It\'(1981), \'Cherish\'(1985) o \'Fresh\'(1984) y \'Victoria\'(1986). La canci\xf3n \'Celebration\'(2 millones de copias vendidas en los EE. UU.) es elegido como himno de bienvenida para los rehenes estadounidenses en Ir\xe1n.<br><br>A partir de ese \xe9xito lograron muchas m\xe1s apariciones en listas como \'Big Fun\', \'Get Down on It\'y \'Joanna\'. Su \xe1lbum de 1984 llamado Emergency les dio cuatro \xe9xitos en el top 20 incluyendo \'Fresh\' y \'Cherish\'. Su presencia en listas se interrumpi\xf3 a partir del \xe1lbum Forever cuando Taylor y Ronald Bell (quien pas\xf3 a llamarse Khalis Bayyan) dejaron el grupo. En 1987 que hay un punto de inflexi\xf3n, con la salida de Taylor. Oficialmente, se separar\xedan de manera amistosa, pero m\xe1s tarde algunos de los miembros fundadores acusaron a Taylor de quedarse con varios de sus \xe9xitos.<br><br>El nombre del grupo volvi\xf3 a la actualidad en 1994, cuando la canci\xf3n Jungle Boogie fue incluida dentro del exitoso filme de Quentin Tarantino, Pulp Fiction en donde actuaban John Travolta, Uma Thurman y Samuel Jackson.<br><br>Al ser un grupo legendario del R&B, productores de Hip Hop han incluido algunos de sus tonos en sus creaciones, como lo hizo Jazzy Jeff para el hit Summertime de DJ Jazzy Jeff & The Fresh Prince (con Will Smith al micr\xf3fono), el cual contiene un sample del et\xe9reo y semi-jazzero tema Summer Madness. Madonna incluy\xf3 otro sample del grupo en su pol\xe9mica canci\xf3n \'Erotica\', el sample proven\xeda de la canci\xf3n Jungle Boogie, las trompetas del comienzo y del medio fueron usadas en casi toda la canci\xf3n.<br><br>Entre 1989 y 1993, Taylor lanz\xf3 tres \xe1lbumes en solitario: \'Master of the Game\', \'Feel the Need\'y \'Baby I\'m Back\', conduciendo \xe9xito en (Estados Unidos) con t\xedtulos como \'Sister Rosa\', \'Days a Week\' o \'Night Long Hot Summer\'.<br><br>Por su parte, los restantes miembros de Kool & The Gang reemplazaron a Taylor con tres vocalistas: Skip Martin (exmiembro de la banda Dazz, y tambi\xe9n una trompetista), Odeen Mays (tambi\xe9n claviettiste) y Gary Brown. Sin embargo el p\xfablico estaba acostumbrado a la voz y la imagen de Taylor, y los \xe1lbumes \'Sweat\'(1989) y \'Unite\'(1993) no logran escalar en las listas.<br><br>En 1995, bajo la presi\xf3n de los fanes, Taylor volvi\xf3 al grupo: con una larga gira internacional, que termina en marzo de 1999. Ellos grabaron el \xe1lbum \'State of Affairs\'(1996), pero la difusi\xf3n es escasa. Sin embargo, la versi\xf3n DJs remix de \'Celebration\' y \'Get Down On It\' se cuelan en lo alto de las listas del Reino Unido. Una vez m\xe1s, Taylor dej\xf3 la banda para reiniciar su carrera en solitario en 2000, lanz\xf3 el \xe1lbum \'A Brand New Me\', con dos singles exitosos \'On The Beach\'y \'How\'.<br><br>El grupo vuelve formado por cuatro miembros originales, y contin\xfaa realizando conciertos por todo el mundo. Charles \'Claydes\' Smith, guitarrista y miembro fundador, muri\xf3 en enero de 2007. Sin embargo Kool and the Gang siguen volando el cartel de \'no hay billetes\' en sus conciertos por todo el mundo. En ellos alternan sus canciones de \'jazz\' de los 70, con sus hits de los 80 y nuevos t\xedtulos. En julio de 2007, la banda lanz\xf3 el \xe1lbum \'Still Kool\', que alterna el jazz, soul, funk, rock y RnB moderno. Taylor sigue haciendo conciertos, principalmente en los EE. UU. y lanza un nuevo \xe1lbum en 2008.<br><br>Tambi\xe9n es justo mencionar la dimensi\xf3n instrumental de esta formaci\xf3n, con canciones como \'Messenger Of Wisdom\', \'Summer Madness / Winter sadness\'o \' I Remember John Coltrane","discografia":[{"album":"Kool & The Gang","any":"1969"},{"album":"Live at the Sex Machine","any":"1971"},{"album":"Live at PJ\'s","any":"1971"},{"album":"Music is the Message","any":"1972"},{"album":"Good Times","any":"1973"},{"album":"Wild and Peaceful","any":"1973"},{"album":"Light of Worlds","any":"1974"},{"album":"Spirit of the Boogie","any":"1975"},{"album":"Open Sesame","any":"1976"},{"album":"Love & Understanding","any":"1976"},{"album":"Behind the Eyes","any":"1977"},{"album":"The Force","any":"1978"},{"album":"Ladies\' Night","any":"1979"},{"album":"Celebrate!","any":"1980"},{"album":"Something Special","any":"1981"},{"album":"As One","any":"1982"},{"album":"In the Heart","any":"1983"},{"album":"Emergency","any":"1984"},{"album":"Forever","any":"1987"},{"album":"Sweat","any":"1989"},{"album":"Unite","any":"1993"},{"album":"State of Affairs","any":"1996"},{"album":"Gangland","any":"2001"},{"album":"Still Kool","any":"2007"},{"album":"Perfect union","any":"2021"}],"fotoGrup":"koolandthegang.jpg","web":"koolandthegang.com","credits":"wikipedia"},{"id":"7","nom":"Robert Miles","components":["Roberto Concina"],"estil":"Trance, electr\xf3nica, ambient, techno, chill-out","anyFundacio":"1984","historia":"Robert Miles era hijo de inmigrantes italianos en Suiza; Antonietta y Albino Concina.<br><br>Miles se convirti\xf3 en un experto en el piano durante su infancia y se introdujo a la escena musical en 1988. Trabaj\xf3 como DJ en algunos clubes italianos, y en 1990 us\xf3 sus ahorros para establecer su propio estudio y comprar equipo usado.<br><br>En 1994, Miles escribi\xf3 su composici\xf3n m\xe1s famosa: Children. El sencillo tom\xf3 popularidad lentamente, en las primeras dos semanas de estar a la venta. En 1995, vendi\xf3 m\xe1s de 30 000 copias en Europa y encabez\xf3 las listas de popularidad de muchos pa\xedses. Le dio a Miles disco de platino en Inglaterra y Alemania y disco de oro en otros pa\xedses. Fue considerado como el sencillo m\xe1s exitoso de 1996. En diciembre de 2004, Children alcanz\xf3 nueva audiencia en Inglaterra al ser usado en una colaboraci\xf3n entre Angel City y Ministry of Sound bajo la custodia de Dj MyR titulada \'Do You Know?\', que alcanz\xf3 entrar al Top 5 del Reino Unido. Cuenta el propio DJ que compuso este tema en un \'b\xfanker\' de 4 metros cuadrados que \xe9l mismo dise\xf1\xf3 en el garaje familiar, inspirado por la atrocidad de las muertes infantiles en la guerra de Yugoslavia.<br><br>El siguiente sencillo de Miles fue Fable, con la voz de Fiorella Quinn. Su \xe1lbum debut, Dreamland, fue lanzado el 7 de junio de 1996 en Europa mientras la canci\xf3n era un \xe9xito, unos d\xedas despu\xe9s sali\xf3 a la venta en los Estados Unidos con una canci\xf3n adicional One and One cantada por Maria Nayler y escrita por Billy Steinberg, Rick Nowels y Marie Claire D\'ubaldo. Esta canci\xf3n fue muy popular y despu\xe9s fue lanzada como sencillo en Estados Unidos y Alemania. A finales de 1996, Miles lanz\xf3 una nueva versi\xf3n de Dreamland, llamada Dreamland - The Winter Edition en Alemania, que conten\xeda la canci\xf3n One and One (que no hab\xeda sido incluida en la versi\xf3n original de Dreamland en Europa). La canci\xf3n fue escrita inicialmente para la cantante polaca Edyta G\xf3rniak, pero esta la grab\xf3 hasta un a\xf1o despu\xe9s y fue incluida en su \xe1lbum debut.<br><br>En noviembre de 1997, Miles lanz\xf3 la canci\xf3n Freedom como nuevo sencillo de su segundo \xe1lbum 23am, lanzado el 27 de noviembre de 1997. Conteniendo un sentido diferente a Dreamland, 23am incorpor\xf3 m\xe1s canciones con voz mientras manten\xeda la esencia de Miles con el piano. Fue en este tiempo cuando trabaj\xf3 junto a Richard D. James bajo el nombre de Aphex Twin.<br><br>Miles estuvo en receso hasta el 11 de junio de 2001 cuando lanz\xf3 su nuevo \xe1lbum, Organik, que fue presentado en vinil y CD. El nuevo sencillo fue Paths y es considerado por muchos fans como un cambio radical en el estilo musical de Miles.<br><br>En 2003, un \xe1lbum de remixes fue lanzado con el nombre de Organik Remixes, conteniendo las canciones ganadoras del concurso que Miles sostuvo en su p\xe1gina web y algunos remixes de artistas como The Future Sound of London. Tambi\xe9n se incluy\xf3 una canci\xf3n de Miles titulada Bhairav, cantada por Amelia Cuni.<br><br>A finales de 2003, Miles cambi\xf3 su residencia a Los \xc1ngeles, ah\xed inici\xf3 su casa productora S:alt Records y en 2004 lanz\xf3 un \xe1lbum creado con Trilok Gurtu, titulado Miles Gurtu. Ten\xeda su residencia en Ibiza desde hac\xeda varios a\xf1os, donde cre\xf3 la emisora de radio en l\xednea OpenLab que \xe9l defin\xeda como \'un proyecto de vanguardia que re\xfane a la cultura, las artes, los medios de comunicaci\xf3n, la tecnolog\xeda y la innovaci\xf3n\'.<br><br>De hecho, era un habitual de la isla, donde en el a\xf1o 2016 pinch\xf3 en algunas de sus discotecas (Heart) y donde ten\xeda previsto participar en el International Music Summit. Falleci\xf3 en Ibiza el 9 de mayo de 2017, a los 47 a\xf1os de edad, debido a un c\xe1ncer en fase 4 de met\xe1stasis.","discografia":[{"album":"Dreamland","any":"1996"},{"album":"23am","any":"1997"},{"album":"Organik","any":"2001"},{"album":"Miles_Gurtu (con Trilok Gurtu)","any":"2004"},{"album":"Th1rt3en","any":"2011"}],"fotoGrup":"robermiles.jpg","web":"robermiles.com","credits":"wikipedia"},{"id":"8","nom":"Erasure","components":["Andrew Ivan Bell","Vince Clarke"],"estil":"Synth-pop, Electropop, dance","anyFundacio":"1985","historia":"Erasure es un d\xfao brit\xe1nico de synthpop y electropop que ha destacado como uno de los grupos m\xe1s populares en la historia de la m\xfasica pop. La banda est\xe1 conformada por el compositor y tecladista Vince Clarke y el cantante y letrista Andy Bell. En el a\xf1o 1989, Erasure es nominado y obtiene el Brit Awards otorgado por la Industria Fonogr\xe1fica Brit\xe1nica como el Mejor Grupo Brit\xe1nico.<br><br>Con 35 a\xf1os de carrera y m\xe1s de 28 millones de discos vendidos, 14 \xe1lbumes top 20, de los cuales 10 han sido top 10, incluidos 5 \xe1lbumes n\xfamero 1 consecutivos en el Reino Unido (entre 1988 y 1994); 29 sencillos top 20, de los cuales 24 han sido top 20 consecutivamente (entre 1986 y 1997); incluyendo 17 sencillos Top 10, Erasure ha grabado m\xe1s de 200 canciones y es la tercera banda en la historia del tecno pop que m\xe1s discos ha vendido en el Reino Unido, solo detr\xe1s de Pet Shop Boys y Depeche Mode.","discografia":[{"any":"1986","album":"Wonderland"},{"any":"1987","album":"The Circus"},{"any":"1988","album":"The Innocents"},{"any":"1989","album":"Wild!"},{"any":"1991","album":"Chorus"},{"any":"1994","album":"I Say I Say I Say"},{"any":"1995","album":"Erasure"},{"any":"1997","album":"Cowboy"},{"any":"2000","album":"Loveboat"},{"any":"2003","album":"Other People\'s Songs"},{"any":"2005","album":"Nightbird"},{"any":"2006","album":"Union Street"},{"any":"2007","album":"Light at the End of the World"},{"any":"2011","album":"Tomorrow\'s World"},{"any":"2013","album":"Snow Globe"},{"any":"2014","album":"The Violet Flame"},{"any":"2017","album":"World Be Gone"},{"any":"2018","album":"World Beyond"},{"any":"2020","album":"The Neon"},{"any":"2022","album":"Day-Glo - Based On A True Story"}],"fotoGrup":"erasure.jpg","web":"erasure.com","credits":"wikipedia"},{"id":"9","nom":"Roosevelt","components":["Marius Lauber"],"estil":"Synth-pop, indie electronic, hypnagogic pop","anyFundacio":"2013","historia":"Su primer proyecto fue Beat!Beat!Beat!, una banda adolescente indie donde \xe9l era el baterista. A\xf1os m\xe1s tarde la banda se separ\xf3 y \xe9l se convirti\xf3 en solista.<br><br>Luego lanz\xf3 su aclamado EP debut \'Elliot\' en 2013. El sencillo principal \'Elliot\' fue nombrado como \'Best New Track\' de Pitchfork . Roosevelt luego lanz\xf3 la cara doble A \'Night Moves/Hold On\' en 2015 en Greco-Roman que continu\xf3 con un c\xe1lido sonido synth-pop con influencia balear .<br><br>En abril de 2016, anunci\xf3 su \xe1lbum debut hom\xf3nimo, cuyo lanzamiento est\xe1 previsto para el 19 de agosto de 2016, en Greco-Roman/City Slang, con el v\xeddeo de los temas \'Colours\' y \'Moving On\'. <br><br>Ha remezclado a artistas como Glass Animals , Jax Jones , Truls, Sundara Karma , Luka Vasta y Kakkmaddafakka , y en la gira ha apoyado a Hot Chip , Totally Enormous Extinct Dinosaurs y Crystal Fighters.<br><br>En junio de 2018, anunci\xf3 un segundo \xe1lbum, Young Romance . Fue lanzado el 28 de septiembre de 2018. El primer sencillo de este \xe1lbum, \'Under the Sun\', fue lanzado el 27 de junio de 2018.<br><br>En marzo de 2019, lanz\xf3 \'Falling Back\' y una versi\xf3n de \' Everywhere \' de Fleetwood Mac en W Records. Al a\xf1o siguiente, \'Everywhere\' apareci\xf3 en We Bare Bears: The Movie .<br><br>El 10 de junio de 2020, Roosevelt lanz\xf3 el sencillo Sign , que fue el primer material original desde su segundo \xe1lbum Young Romance . Roosevelt lanz\xf3 otros cuatro sencillos (Echoes, Feels Right, Strangers & Lovers) antes de su tercer \xe1lbum de estudio, Polydans, que se lanz\xf3 el 26 de febrero de 2021.","discografia":[{"any":"2016","album":"Roosevelt"},{"any":"2018","album":"Young Romance"},{"any":"2021","album":"Polydans"}],"fotoGrup":"roosevelt.jpg","web":"iammroosevelt.com","credits":"wikipedia"},{"id":"10","nom":"Dire Straits","components":["Mark Knopfler","John Illsley","Alan Clark","Guy Fletcher","David Knopfler","Pick Withers"],"estil":"Roots rock, Blues rock, Rock and roll, Pop rock","anyFundacio":"1977","historia":"Dire Straits (pronunciaci\xf3n: /daɪr streɪts/) fue una banda de rock brit\xe1nica formada en Londres en 1977 por Mark Knopfler (voz principal y guitarra principal), David Knopfler (guitarra r\xedtmica y coros), John Illsley (bajo y coros) y Pick Withers (bater\xeda y percusi\xf3n), estando activos hasta el a\xf1o 1995. Dire Straits es considerado como uno de los grupos musicales m\xe1s exitosos de la historia de la m\xfasica rock.<br><br>Su primer sencillo, \'Sultans of Swing\', de su \xe1lbum debut hom\xf3nimo de 1978, lleg\xf3 a los diez primeros en las listas de \xe9xitos del Reino Unido y los Estados Unidos. Le siguieron \xe9xitos como \'Romeo and Juliet\' (1981), \'Private Investigations\' (1982), \'Twisting by the Pool\' (1983), \'Money for Nothing\' (1985) y \'Walk of Life\' (1985). Su \xe1lbum de mayor \xe9xito comercial, Brothers in Arms (1985), ha vendido m\xe1s de 30 millones de copias; fue el primer \xe1lbum en vender un mill\xf3n de copias en disco compacto y es el octavo \xe1lbum m\xe1s vendido en la historia del Reino Unido. Seg\xfan el Guinness Book of British Hit Albums, Dire Straits ha pasado m\xe1s de 1100 semanas en la lista de \xe1lbumes del Reino Unido, la quinta mayor cantidad de todos los tiempos.<br><br>El sonido de Dire Straits —cuyo nombre, seg\xfan el mismo Mark Knopfler, en ingl\xe9s significa \xabsituaci\xf3n desesperada\xbb o \xabestar en apuros\xbb— se basa en varias influencias, incluyendo jazz, folk y country y el blues rock de J. J. Cale y Eric Clapton.Su sonido despojado contrastaba con el punk rock y demostraba una influencia del roots rock que surgi\xf3 del pub rock. Hubo varios cambios en el personal, con Mark Knopfler e Illsley siendo los \xfanicos miembros consistentes. Despu\xe9s de disolverse en 1995, Knopfler lanz\xf3 su carrera en solitario a tiempo completo. Dire Straits gan\xf3 cuatro premios Grammy, tres Brit Awards (Mejor grupo brit\xe1nico dos veces), dos MTV Video Music Awards y varios otros premios. Fueron incluidos en el Sal\xf3n de la Fama del Rock and Roll en 2018.","discografia":[{"any":"1978","album":"Dire Straits"},{"any":"1979","album":"Communiqu\xe9"},{"any":"1980","album":"Making Movies"},{"any":"1982","album":"Love Over Gold"},{"any":"1985","album":"Brothers in Arms"},{"any":"1991","album":"On Every Street"}],"fotoGrup":"direstraits.jpg","web":"direstraits.com","credits":"wikipedia"},{"id":"11","nom":"Talk Talk","components":["Mark Hollis","Paul Webb","Lee Harris"],"estil":"Post-rock, Art rock,Synth pop, Art pop, New romantic, New wave","anyFundacio":"1981","historia":"Talk Talk fue una banda inglesa de rock formada en 1981 en Londres, y disuelta en 1991. En el comienzo de su carrera el grupo fue encasillado dentro del estilo denominado synth pop. Sin embargo, el grupo sigui\xf3 luego una l\xednea m\xe1s experimental, y sus \xfaltimos \xe1lbumes fueron considerados por la cr\xedtica como precursores del post-rock.1​ A pesar de que los cr\xedticos recibieron favorablemente a los \xfaltimos \xe1lbumes de la banda, los mismos tuvieron poco \xe9xito en el mercado, lo que contribuy\xf3 a una disputa entre la banda y la compa\xf1\xeda discogr\xe1fica EMI.<br><br>Los integrantes del grupo fueron el cantante y multi-instrumentista Mark Hollis, el bajista y corista Paul Webb, el baterista Lee Harris y el tecladista Simon Brenner. El productor Tim Friese-Greene desempe\xf1\xf3 un papel importante en la evoluci\xf3n art\xedstica del grupo, adem\xe1s de tocar sintetizadores y colaborar en la composici\xf3n.","discografia":[{"album":"The Party\'s Over","any":"1982"},{"album":"It\'s My Life","any":"1984"},{"album":"The Colour of Spring","any":"1986"},{"album":"Spirit of Eden","any":"1988"},{"album":"Laughing Stock","any":"1991"}],"fotoGrup":"talktalk.jpg","web":"#","credits":"wikipedia"},{"id":"12","nom":"Yazoo","components":["Vince Clarke","Alison Moyet"],"estil":"Synth pop","anyFundacio":"1981","historia":"Yazoo (conocidos como Yaz en Estados Unidos, por razones legales que involucraban a la compa\xf1\xeda discogr\xe1fica Yazoo Records) fue un d\xfao brit\xe1nico de synth pop originarios de Basildon, Essex, Inglaterra, cuya carrera tuvo gran \xe9xito comercial al principio de los a\xf1os 1980. Aunque no tuvieron la misma suerte en Estados Unidos, Yazoo alcanz\xf3 tres Top 10 en el UK Singles a inicios de esa d\xe9cada<br><br>Se form\xf3 a finales de 1981 por el excompositor de Depeche Mode, Vince Clarke (sintetizador) y por Alison Moyet (vocalista).","discografia":[{"any":"1982","album":"Upstairs at Eric\'s"},{"any":"1983","album":"You and Me Both"}],"fotoGrup":"yazoo.jpg","web":"#","credits":"wikipedia"}]');

},{}],"8pC4X":[function(require,module,exports) {
module.exports = JSON.parse('[{"id":"1","titulo":"Strangers","\xe1lbum":"Polydans","a\xf1o":"2021","grupo":"Roosevelt","descripcion":"Brutal","webGrupo":"https://www.iamroosevelt.com/","creditos":"Roosevelt","categoria":["2","6"],"video":"https://www.youtube.com/embed/NOdkHf9uJjk","idVideo":"NOdkHf9uJjk","wikipedia":"#","popularitat":"5"},{"id":"2","titulo":"Closer to My Heart","\xe1lbum":"Polydans","a\xf1o":"2021","grupo":"Roosevelt","descripcion":"Brutal","webGrupo":"https://www.iamroosevelt.com/","creditos":"Roosevelt","categoria":["1","6"],"video":"https://www.youtube.com/embed/fkWnAkRwlrA","idVideo":"fkWnAkRwlrA","wikipedia":"#","popularitat":"5"},{"id":"3","titulo":"I Can\'t Tell You Why","\xe1lbum":"The Long Run","a\xf1o":"1979","grupo":"Eagles","descripcion":"Unes de les millors balades que mai he escoltat, la meva germana va comprar el single a l\'any si no recordo malament 1979 i mai m\'he cansat d\'escoltar-la.","webGrupo":"https://eagles.com/","creditos":"Timothy B. Schmit, Glenn Frey and Don Henley","categoria":["1","6"],"video":"https://www.youtube.com/embed/iP97m8jwRfE","idVideo":"iP97m8jwRfE","wikipedia":"https://en.wikipedia.org/wiki/I_Can%27t_Tell_You_Why","popularitat":"5"},{"id":"4","titulo":"How Deep Is Your Love","\xe1lbum":"Saturday Night Fever","a\xf1o":"1977","grupo":"Bee Gees","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.beegees.com/","creditos":"Barry Gibb","categoria":["1"],"video":"https://www.youtube.com/embed/XpqqjU7u5Yc","idVideo":"XpqqjU7u5Yc","wikipedia":"https://es.wikipedia.org/wiki/How_Deep_Is_Your_Love_(canci%C3%B3n_de_Bee_Gees)","popularitat":"5"},{"id":"5","titulo":"Sara","\xe1lbum":"Tusk","a\xf1o":"1979","grupo":"fleetwood mac","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.fleetwoodmac.com/","creditos":"Stevie Nicks","categoria":["1"],"video":"https://www.youtube.com/embed/vfs6X7boS1s","idVideo":"vfs6X7boS1s","wikipedia":"https://en.wikipedia.org/wiki/Sara_(Fleetwood_Mac_song)"},{"id":"6","titulo":"Children","\xe1lbum":"Dreams","a\xf1o":"1996","grupo":"Robert Miles","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://open.spotify.com/artist/2YVF0Ou5zIc4mpgtLIlGN0","creditos":"Roberto Concina","categoria":["6","2","3"],"video":"https://www.youtube.com/embed/DvyCbevQbtI","idVideo":"DvyCbevQbtI","wikipedia":"https://es.wikipedia.org/wiki/Children_(canci%C3%B3n)","popularitat":"5"},{"id":"7","titulo":"Fresh","\xe1lbum":"Emergency","a\xf1o":"1984","grupo":"Kool and The Gang","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.koolandthegang.com/","creditos":"Kool & The Gang","categoria":["2","6"],"video":"https://www.youtube.com/embed/sTJ1XwGDcA4","idVideo":"sTJ1XwGDcA4","wikipedia":"https://es.wikipedia.org/wiki/Fresh_(canci%C3%B3n_de_Kool_%26_the_Gang)","popularitat":"5"},{"id":"8","titulo":"Stayin\' Alive","\xe1lbum":"Saturday Night Fever","a\xf1o":"1977","grupo":"Bee Gees","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.beegees.com/","creditos":"Barry Gibb, Robin Gibb, Maurice Gibb","categoria":["2"],"video":"https://www.youtube.com/embed/I_izvAbhExY","idVideo":"I_izvAbhExY","wikipedia":"https://es.wikipedia.org/wiki/Stayin%27_Alive","popularitat":"5"},{"id":"9","titulo":"Enjoy The Silence","\xe1lbum":"Violator","a\xf1o":"1989","grupo":"Depeche Mode","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.depechemode.com/","creditos":"Martin Gore","categoria":["3","6"],"video":"https://www.youtube.com/embed/aGSKrC7dGcY","idVideo":"aGSKrC7dGcY","wikipedia":"https://es.wikipedia.org/wiki/Enjoy_the_Silence","popularitat":"5"},{"id":"10","titulo":"A Little Respect","\xe1lbum":"The Innocents","a\xf1o":"1988","grupo":"Erasure","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.erasureinfo.com/","creditos":"Vince Clarke, Andy Bell","categoria":["3","6"],"video":"https://www.youtube.com/embed/x34icYC8zA0","idVideo":"x34icYC8zA0","wikipedia":"https://en.wikipedia.org/wiki/A_Little_Respect","popularitat":"5"},{"id":"11","titulo":"Nobody\'s Diary","\xe1lbum":"Saturday Night Fever","a\xf1o":"1983","grupo":"Yazoo","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://yazooinfo.com/","creditos":"Alison Moyet","categoria":["3"],"video":"https://www.youtube.com/embed/1qq7jTPkjVg","idVideo":"1qq7jTPkjVg","wikipedia":"https://es.wikipedia.org/wiki/Nobody%27s_Diary","popularitat":"5"},{"id":"12","titulo":"Hot Water","\xe1lbum":"Sirens Tour Live 2015","a\xf1o":"1984","grupo":"Level 42","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://level42.com/","creditos":"Mark King, Mike Lindup, Phil Gould, Wally Badarou","categoria":["6","5"],"video":"https://www.youtube.com/embed/g88dvPMEDVA","idVideo":"g88dvPMEDVA","wikipedia":"https://en.wikipedia.org/wiki/Hot_Water_(song)"},{"id":"13","titulo":"Viva la vida","\xe1lbum":"Sirens Tour Live 2015","a\xf1o":"2008","grupo":"Coldplay","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.coldplay.com/","creditos":"Coldplay","categoria":["6","4"],"video":"https://www.youtube.com/embed/dvgZkm1xWPE","idVideo":"dvgZkm1xWPE","wikipedia":"https://en.wikipedia.org/wiki/Hot_Water_(song)","popularitat":"5"},{"id":"14","titulo":"Something about you","\xe1lbum":"World MAchine","a\xf1o":"1985","grupo":"Level 42","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://level42.com/","creditos":"Mike Lindup, Phil Gould, Mark King, Rowland Gould, Wally Badarou","categoria":["6","1"],"video":"https://www.youtube.com/embed/zpdQQoc-gkk","idVideo":"zpdQQoc-gkk","wikipedia":"https://en.wikipedia.org/wiki/Something_About_You_(Level_42_song)","popularitat":"5"},{"id":"15","titulo":"Joanna","\xe1lbum":"In the Heart","a\xf1o":"1983","grupo":"Kool and The Gang","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.koolandthegang.com/","creditos":"Robert Earl Bell, Ronald Nathan Bell, James Bonnefond, George Melvin Brown, James \'J.T.\' Taylor, Claydes Charles Smith, Clifford Adams and Curtis \'Fitz\' Williams","categoria":["6","1"],"video":"https://www.youtube.com/embed/hsklsxReSe0","idVideo":"hsklsxReSe0","wikipedia":"https://en.wikipedia.org/wiki/Joanna_(Kool_%26_the_Gang_song)","popularitat":"5"},{"id":"16","titulo":"Telegraph Road","\xe1lbum":"Love Over Gold","a\xf1o":"1983","grupo":"Dire Straits","descripcion":"indispensable.","webGrupo":"https://www.koolandthegang.com/","creditos":"Mark Knopfler","categoria":["6","1","4"],"video":"https://www.youtube.com/embed/1TTAXENx0bM","idVideo":"1TTAXENx0bM","wikipedia":"#","popularitat":"5"},{"id":"16","titulo":"It\'s my Life","\xe1lbum":"It\'s my Life","a\xf1o":"1984","grupo":"Talk Talk","descripcion":"indispensable.","webGrupo":"#","creditos":"Mark Hollis, Tim Friese-Greene","categoria":["6","4"],"video":"https://www.youtube.com/embed/cFH5JgyZK1I","idVideo":"cFH5JgyZK1I","wikipedia":"#","popularitat":"5"},{"id":"17","titulo":"Such a Shame","\xe1lbum":"It\'s my Life","a\xf1o":"1984","grupo":"Talk Talk","descripcion":"indispensable.","webGrupo":"#","creditos":"Mark Hollis","categoria":["6","4","2"],"video":"https://www.youtube.com/embed/lLdvpFIPReA","idVideo":"lLdvpFIPReA","wikipedia":"https://es.wikipedia.org/wiki/Such_a_Shame","popularitat":"5"}]');

},{}]},["6dt0U","a3oMs"], "a3oMs", "parcelRequire1f3a")

//# sourceMappingURL=grup.2cc86157.js.map
