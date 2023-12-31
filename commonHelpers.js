import{i as m,S as h}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=document.querySelector(".form"),c=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";const y=o=>{const r="https://pixabay.com/api/",s="41530032-c682b7302a1559a8b9f540776",l=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${l}`).then(e=>{if(!e.ok)throw new Error("Request is not ok");return e.json()})};n.addEventListener("submit",o=>{o.preventDefault(),c.innerHTML="",a.style.display="inline-block";const r=o.target.elements.search.value;y(r).then(s=>{a.style.display="none",s.hits.length||m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"12",backgroundColor:"#EF4040",messageColor:"#FFF"}),c.innerHTML=f(s.hits),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),n.reset()}).catch(s=>{a.style.display="none",console.error("Error")})});const f=o=>o.reduce((r,{largeImageURL:s,webformatURL:l,tags:e,likes:t,views:i,comments:u,downloads:d})=>r+`
            <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${l}"
              alt="${e}"
              width="360"
            />
          </a>
          <div class="info">
            <div class="block-item">
              <h2 class="tittle">Likes</h2>
              <p class="count">${t}</p>
            </div>
            <div class="block-item">
              <h2 class="tittle">Views</h2>
              <p class="count">${i}</p>
            </div>
            <div class="block-item">
              <h2 class="tittle">Comments</h2>
              <p class="count">${u}</p>
            </div>
            <div class="block-item">
              <h2 class="tittle">Downloads</h2>
              <p class="count">${d}</p>
            </div>
          </div>
        </li>`,"");
//# sourceMappingURL=commonHelpers.js.map
