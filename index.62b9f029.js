!function(){var e,t,n,o;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),function(){var e={openModalBtn:document.querySelector("[data-menu-order-open]"),closeModalBtn:document.querySelector("[data-menu-order-close]"),modal:document.querySelector("[data-menu-order]"),newopenModalBtn:document.querySelector(".new-btn-menu-order")};function t(){e.modal.classList.toggle("is-hidden-menu-order")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.newopenModalBtn.addEventListener("click",t)}();tns({container:".my-slider",items:1,slideBy:"page",autoplay:!0,controls:!1,autoplayButtonOutput:!1,navPosition:"bottom",rewind:!0})}();
//# sourceMappingURL=index.62b9f029.js.map
