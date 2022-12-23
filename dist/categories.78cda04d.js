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
})({"9OBwL":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5538908478cda04d";
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

},{}],"9P53f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _categoriesJson = require("../data/categories.json");
var _categoriesJsonDefault = parcelHelpers.interopDefault(_categoriesJson);
var _songsJson = require("../data/songs.json");
var _songsJsonDefault = parcelHelpers.interopDefault(_songsJson);
//Recuperem el container de les categories
const cat = document.getElementById("containerCat");
//Farem una llista amb les diferents categories
const llistaCat = document.createElement("ul");
llistaCat.className = "llista";
//Comencem el bucle de les categories
(0, _categoriesJsonDefault.default).forEach((categoria)=>{
    let img = document.createElement("img");
    img.src = `img/${categoria.img}`;
    img.className = "miniatura";
    img.alt = categoria.titulo;
    let titolPuntCat = document.createElement("H1");
    titolPuntCat.innerText = categoria.titulo;
    titolPuntCat.className = "puntTitol";
    let puntCat = document.createElement("li");
    puntCat.id = categoria.id;
    puntCat.className = "puntCat";
    //Donem d'alta un escoltador d'events, justament al fer clic sobre la imatge
    //de la categoria
    //Una vegada es produeix l'event cridem a la funció 'callback' procesaCat
    //on llistarem les cançons de la categoria triada.
    img.addEventListener("click", procesaCat);
    puntCat.append(img);
    puntCat.append(titolPuntCat);
    llistaCat.appendChild(puntCat);
});
function procesaCat(event) {
    //Posem en gris totes les categories actives
    const cats = document.getElementsByClassName("puntActiu");
    [].forEach.call(cats, function(c) {
        c.className = "puntCat";
    });
    //resaltem la categoria activa
    event.target.parentElement.className = "puntActiu";
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
    const espaiSongs = document.getElementById("llistaSongs");
    const llista = document.createElement("ul");
    llista.className = "containerSongs";
    //Recuperem l'id del contenidor pare de la imatge
    const categoria = event.target.parentElement.id;
    //Aquí està la màgia, fem un filtre de qualsevol de les categories d'una canço 
    //que coincideixi amb la categoria activa.
    //Recordem que el camp categories és un array de més d'una categoria.
    const songsCat = (0, _songsJsonDefault.default).filter((x)=>x.categoria.some((xx)=>xx === categoria));
    //Bucle per llistar les cançons filtrades per categoria
    songsCat.forEach((song)=>{
        let single = document.createElement("li");
        single.id = single.id;
        single.className = "song";
        let video = document.createElement("div");
        video.className = "videoSong";
        video.innerHTML = `<iframe src="${song.video}" title="${song.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        let dades = document.createElement("div");
        dades.className = "dadesSong";
        let titolSong = document.createElement("H1");
        titolSong.className = "titolSong";
        titolSong.innerText = song.titulo;
        let grupSong = document.createElement("a");
        grupSong.href = `./grup.html?grup=${song.grupo}`;
        grupSong.innerText = song.grupo;
        grupSong.className = "songGrup";
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
        dades.append(grupSong);
        dades.append(dadesSong);
        single.append(video);
        single.append(dades);
        llista.appendChild(single);
    });
    espaiSongs.append(llista);
}
cat.append(llistaCat);

},{"../data/categories.json":"jsTyj","../data/songs.json":"8pC4X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsTyj":[function(require,module,exports) {
module.exports = JSON.parse('[{"id":"1","titulo":"Rom\xe0ntiques","descripcion":"M\xfasica per somiar","img":"catRomantiques.jpg"},{"id":"2","titulo":"Dance","descripcion":"Anem a deixar-ho tot i disfrutar","img":"catDance.jpg"},{"id":"3","titulo":"Techno","descripcion":"M\xfasica electr\xf2nica per volar","img":"catTechno.jpg"},{"id":"4","titulo":"Pop/Rock","descripcion":"Cl\xe0ssics popularts per disfrutar amb tothom","img":"catPop.jpg"},{"id":"5","titulo":"Concerts","descripcion":"Els millors concerts amb bons m\xfasics","img":"catConcert.jpg"},{"id":"6","titulo":"Selecci\xf3 d\'autor","descripcion":"Aqu\xed la meva selecci\xf3","img":"catAutor.jpg"}]');

},{}],"8pC4X":[function(require,module,exports) {
module.exports = JSON.parse('[{"id":"1","titulo":"Strangers","\xe1lbum":"Polydans","a\xf1o":"2021","grupo":"Roosevelt","descripcion":"Brutal","webGrupo":"https://www.iamroosevelt.com/","creditos":"Roosevelt","categoria":["2","6"],"video":"https://www.youtube.com/embed/NOdkHf9uJjk","wikipedia":"#","popularitat":"5"},{"id":"2","titulo":"Closer to My Heart","\xe1lbum":"Polydans","a\xf1o":"2021","grupo":"Roosevelt","descripcion":"Brutal","webGrupo":"https://www.iamroosevelt.com/","creditos":"Roosevelt","categoria":["1","6"],"video":"https://www.youtube.com/embed/fkWnAkRwlrA","wikipedia":"#","popularitat":"5"},{"id":"3","titulo":"I Can\'t Tell You Why","\xe1lbum":"The Long Run","a\xf1o":"1979","grupo":"Eagles","descripcion":"Unes de les millors balades que mai he escoltat, la meva germana va comprar el single a l\'any si no recordo malament 1979 i mai m\'he cansat d\'escoltar-la.","webGrupo":"https://eagles.com/","creditos":"Timothy B. Schmit, Glenn Frey and Don Henley","categoria":["1","6"],"video":"https://www.youtube.com/embed/iP97m8jwRfE","wikipedia":"https://en.wikipedia.org/wiki/I_Can%27t_Tell_You_Why","popularitat":"5"},{"id":"4","titulo":"How Deep Is Your Love","\xe1lbum":"Saturday Night Fever","a\xf1o":"1977","grupo":"Bee Gees","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.beegees.com/","creditos":"Barry Gibb","categoria":["1"],"video":"https://www.youtube.com/embed/XpqqjU7u5Yc","wikipedia":"https://es.wikipedia.org/wiki/How_Deep_Is_Your_Love_(canci%C3%B3n_de_Bee_Gees)","popularitat":"5"},{"id":"5","titulo":"Sara","\xe1lbum":"Tusk","a\xf1o":"1979","grupo":"fleetwood mac","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.fleetwoodmac.com/","creditos":"Stevie Nicks","categoria":["1"],"video":"https://www.youtube.com/embed/vfs6X7boS1s","wikipedia":"https://en.wikipedia.org/wiki/Sara_(Fleetwood_Mac_song)"},{"id":"6","titulo":"Children","\xe1lbum":"Dreams","a\xf1o":"1996","grupo":"Robert Miles","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://level42.com/","creditos":"Roberto Concina","categoria":["6","2","3"],"video":"https://www.youtube.com/embed/DvyCbevQbtI","wikipedia":"https://es.wikipedia.org/wiki/Children_(canci%C3%B3n)","popularitat":"5"},{"id":"7","titulo":"Fresh","\xe1lbum":"Emergency","a\xf1o":"1984","grupo":"Kool and The Gang","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.koolandthegang.com/","creditos":"Kool & The Gang","categoria":["2","6"],"video":"https://www.youtube.com/embed/sTJ1XwGDcA4","wikipedia":"https://es.wikipedia.org/wiki/Fresh_(canci%C3%B3n_de_Kool_%26_the_Gang)","popularitat":"5"},{"id":"8","titulo":"Stayin\' Alive","\xe1lbum":"Saturday Night Fever","a\xf1o":"1977","grupo":"Bee Gees","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.beegees.com/","creditos":"Barry Gibb, Robin Gibb, Maurice Gibb","categoria":["2"],"video":"https://www.youtube.com/embed/I_izvAbhExY","wikipedia":"https://es.wikipedia.org/wiki/Stayin%27_Alive","popularitat":"5"},{"id":"9","titulo":"Enjoy The Silence","\xe1lbum":"Violator","a\xf1o":"1989","grupo":"Depeche Mode","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.depechemode.com/","creditos":"Martin Gore","categoria":["3","6"],"video":"https://www.youtube.com/embed/aGSKrC7dGcY","wikipedia":"https://es.wikipedia.org/wiki/Enjoy_the_Silence","popularitat":"5"},{"id":"10","titulo":"A Little Respect","\xe1lbum":"The Innocents","a\xf1o":"1988","grupo":"Erasure","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.erasureinfo.com/","creditos":"Vince Clarke, Andy Bell","categoria":["3","6"],"video":"https://www.youtube.com/embed/x34icYC8zA0","wikipedia":"https://en.wikipedia.org/wiki/A_Little_Respect","popularitat":"5"},{"id":"11","titulo":"Nobody\'s Diary","\xe1lbum":"Saturday Night Fever","a\xf1o":"1983","grupo":"Yazoo","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://yazooinfo.com/","creditos":"Alison Moyet","categoria":["3"],"video":"https://www.youtube.com/embed/1qq7jTPkjVg","wikipedia":"https://es.wikipedia.org/wiki/Nobody%27s_Diary","popularitat":"5"},{"id":"12","titulo":"Hot Water","\xe1lbum":"Sirens Tour Live 2015","a\xf1o":"1984","grupo":"Level 42","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://level42.com/","creditos":"Mark King, Mike Lindup, Phil Gould, Wally Badarou","categoria":["6","5"],"video":"https://www.youtube.com/embed/g88dvPMEDVA","wikipedia":"https://en.wikipedia.org/wiki/Hot_Water_(song)"},{"id":"13","titulo":"Viva la vida","\xe1lbum":"Sirens Tour Live 2015","a\xf1o":"2008","grupo":"Coldplay","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.coldplay.com/","creditos":"Coldplay","categoria":["6","4"],"video":"https://www.youtube.com/embed/dvgZkm1xWPE","wikipedia":"https://en.wikipedia.org/wiki/Hot_Water_(song)","popularitat":"5"},{"id":"14","titulo":"Something about you","\xe1lbum":"World MAchine","a\xf1o":"1985","grupo":"Level 42","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://level42.com/","creditos":"Mike Lindup, Phil Gould, Mark King, Rowland Gould, Wally Badarou","categoria":["6","1"],"video":"https://www.youtube.com/embed/zpdQQoc-gkk","wikipedia":"https://en.wikipedia.org/wiki/Something_About_You_(Level_42_song)","popularitat":"5"},{"id":"15","titulo":"Joanna","\xe1lbum":"In the Heart","a\xf1o":"1983","grupo":"Kool and The Gang","descripcion":"Que m\xe9s dir sobre aquesta balada, indispensable.","webGrupo":"https://www.koolandthegang.com/","creditos":"Robert Earl Bell, Ronald Nathan Bell, James Bonnefond, George Melvin Brown, James \'J.T.\' Taylor, Claydes Charles Smith, Clifford Adams and Curtis \'Fitz\' Williams","categoria":["6","1"],"video":"https://www.youtube.com/embed/hsklsxReSe0","wikipedia":"https://en.wikipedia.org/wiki/Joanna_(Kool_%26_the_Gang_song)","popularitat":"5"},{"id":"16","titulo":"Telegraph Road","\xe1lbum":"Love Over Gold","a\xf1o":"1983","grupo":"Dire Straits","descripcion":"indispensable.","webGrupo":"https://www.koolandthegang.com/","creditos":"Mark Knopfler","categoria":["6","1","4"],"video":"https://www.youtube.com/embed/1TTAXENxbM0","wikipedia":"#","popularitat":"5"},{"id":"16","titulo":"It\'s my Life","\xe1lbum":"It\'s my Life","a\xf1o":"1984","grupo":"Talk Talk","descripcion":"indispensable.","webGrupo":"#","creditos":"Mark Hollis, Tim Friese-Greene","categoria":["6","4"],"video":"https://www.youtube.com/embed/cFH5JgyZK1I","wikipedia":"#","popularitat":"5"},{"id":"17","titulo":"Such a Shame","\xe1lbum":"It\'s my Life","a\xf1o":"1984","grupo":"Talk Talk","descripcion":"indispensable.","webGrupo":"#","creditos":"Mark Hollis","categoria":["6","4","2"],"video":"https://www.youtube.com/embed/lLdvpFIPReA","wikipedia":"https://es.wikipedia.org/wiki/Such_a_Shame","popularitat":"5"}]');

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["9OBwL","9P53f"], "9P53f", "parcelRequire1f3a")

//# sourceMappingURL=categories.78cda04d.js.map
