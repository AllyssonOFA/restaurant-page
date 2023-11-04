(()=>{"use strict";const e={cones:[{flavor:"Banana",price:"$7"},{flavor:"Mint Chocolate Chip",price:"$10"},{flavor:"Vanilla",price:"$5"},{flavor:"Avocado",price:"$7"},{flavor:"Mango",price:"$5"},{flavor:"Blueberry",price:"$10"},{flavor:"Chocolate",price:"$5"},{flavor:"Cookies N' Cream",price:"$8"},{flavor:"Pistachio",price:"$7"},{flavor:"Coconut",price:"$5"},{flavor:"Lemon",price:"$8"},{flavor:"Strawberry",price:"$5"},{flavor:"Peanut Butter",price:"$10"},{flavor:"Watermelon",price:"$7"},{flavor:"Peach",price:"$8"}],sundaes:[{flavor:"Hot Fudge",price:"$15"},{flavor:"Banana Split",price:"$12"},{flavor:"Chocolate Sundae Pie",price:"$20"},{flavor:"Cereal Milk",price:"$15"},{flavor:"Rum Caramel Banana Bread",price:"$15"},{flavor:"Ultimate Turtle",price:"$20"},{flavor:"Homemade Brownie",price:"$12"},{flavor:"Strawberry & Berries",price:"$15"}]};function t(t){const n=document.createElement("section");n.classList.add("menu-section");const a=document.createElement("h2");return a.textContent=t,n.appendChild(a),e[t].forEach((e=>{n.appendChild(function(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h3");a.textContent=e;const c=document.createElement("div");c.classList.add("item-divider");const o=document.createElement("h3");return o.textContent=t,n.appendChild(a),n.appendChild(c),n.appendChild(o),n}(e.flavor,e.price))})),n}function n(){const e=document.getElementById("main");e.textContent="",e.appendChild(t("cones")),e.appendChild(t("sundaes"))}function a(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("section");e.classList.add("hero-section");const t=document.createElement("div");t.classList.add("hero-content");const a=document.createElement("h3");a.textContent="The best ice cream around";const c=document.createElement("h2");c.textContent="Discover new flavors with our homemade desserts";const d=document.createElement("i");d.classList.add("fas"),d.classList.add("fa-chevron-right"),d.classList.add("fa-xs");const i=document.createElement("button");i.textContent="Flavors",i.appendChild(d),i.addEventListener("click",(function(){o(document.querySelectorAll(".nav-btn")[1]),n()})),t.appendChild(a),t.appendChild(c),t.appendChild(i);const s=document.createElement("div");s.classList.add("hero-image");const r=document.createElement("img");return r.src="assets/hero-img.jpg",r.alt="A variety of frozen dessets on a table",s.appendChild(r),e.appendChild(t),e.appendChild(s),e}())}function c(){const e=document.createElement("header");return e.classList.add("header"),e.appendChild(function(){const e=document.createElement("div");e.classList.add("header-logo");const t=document.createElement("i");t.classList.add("fas"),t.classList.add("fa-ice-cream");const n=document.createElement("h1");return n.classList.add("logo-title"),n.appendChild(t),n.innerHTML+="&nbsp;ICE & CREAM",e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("nav");e.classList.add("header-nav");const t=document.createElement("button");t.classList.add("nav-btn"),t.textContent="Home",t.addEventListener("click",(function(e){e.target.classList.contains("active")||(o(t),a())}));const c=document.createElement("button");c.classList.add("nav-btn"),c.textContent="Flavors",c.addEventListener("click",(function(e){e.target.classList.contains("active")||(o(c),n())}));const d=document.createElement("button");return d.classList.add("nav-btn"),d.textContent="About Us",d.addEventListener("click",(function(e){e.target.classList.contains("active")||(o(d),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("section");e.classList.add("about-section");const t=document.createElement("div"),n=document.createElement("h2");n.textContent="About Us";const a=document.createElement("p");a.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis arcu purus. Curabitur sed auctor orci. Sed in dictum mauris. In ac orci ut mauris tristique tincidunt sed eget enim.",t.appendChild(n),t.appendChild(a);const c=document.createElement("div"),o=document.createElement("h2");o.textContent="Contact Us";const d=document.createElement("i");d.classList.add("fas"),d.classList.add("fa-phone");const i=document.createElement("p");i.appendChild(d),i.innerHTML+="&nbsp;+14241262731";const s=document.createElement("i");s.classList.add("fas"),s.classList.add("fa-map-location-dot");const r=document.createElement("p");return r.appendChild(s),r.innerHTML+="&nbsp;Somewhere, 129 9th Avenue",c.appendChild(o),c.appendChild(i),c.appendChild(r),e.appendChild(t),e.appendChild(c),e}())}())})),e.appendChild(t),e.appendChild(c),e.appendChild(d),e}()),e}function o(e){document.querySelectorAll(".nav-btn").forEach((function(t){e!==this&&t.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.getElementById("content");e.appendChild(c()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.textContent=`Copyright © ${(new Date).getFullYear()} AllyssonOFA`;const n=document.createElement("a");n.href="https://github.com/AllyssonOFA";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),t.appendChild(n),e.appendChild(t),e}()),o(document.querySelector(".nav-btn")),a()}()})();