import{i as f,S as m}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.querySelector(".form"),c=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";const h=i=>{const r="https://pixabay.com/api/",o="41530032-c682b7302a1559a8b9f540776",s=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${s}`).then(e=>{if(!e.ok)throw new Error("Request is not ok");return e.json()})};l.addEventListener("submit",i=>{i.preventDefault(),c.innerHTML="",a.style.display="inline-block";const r=i.target.elements.search.value;h(r).then(o=>{a.style.display="none",o.hits.length||f.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"12",backgroundColor:"#EF4040",messageColor:"#FFF"}),c.innerHTML=y(o.hits),new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),l.reset()}).catch(o=>{a.style.display="none",console.error("Error")})});const y=i=>i.reduce((r,{largeImageURL:o,webformatURL:s,tags:e,likes:t,views:n,comments:u,downloads:d})=>r+`
            <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
              width="360"
            />
          </a>
          <div class="info">
            <div class="info-item">
              <h2>Likes</h2>
              <p>${t}</p>
            </div>
            <div class="info-item">
              <h2>Views</h2>
              <p>${n}</p>
            </div>
            <div class="info-item">
              <h2>Comments</h2>
              <p>${u}</p>
            </div>
            <div class="info-item">
              <h2>Downloads</h2>
              <p>${d}</p>
            </div>
          </div>
        </li>`,"");
//# sourceMappingURL=commonHelpers.js.map
