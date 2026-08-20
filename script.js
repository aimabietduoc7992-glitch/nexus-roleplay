const menuBtn=document.getElementById("menuBtn"),mobileMenu=document.getElementById("mobileMenu"),closeBtn=document.getElementById("closeBtn");
menuBtn?.addEventListener("click",()=>mobileMenu.classList.add("open"));
closeBtn?.addEventListener("click",()=>mobileMenu.classList.remove("open"));
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>mobileMenu.classList.remove("open")));
window.addEventListener("scroll",()=>document.getElementById("header").style.boxShadow=scrollY>50?"0 20px 80px #000":"0 20px 80px #0008");
let n=128, dir=1; setInterval(()=>{n+=dir*(Math.random()>.55?1:0);if(n>142)dir=-1;if(n<118)dir=1;document.getElementById("players").textContent=n},4000);
