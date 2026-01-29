// Active nav
const links=document.querySelectorAll("nav a");
const page=location.pathname.split("/").pop()||"index.html";
links.forEach(l=>{
  if(l.getAttribute("href")===page)l.classList.add("active");
});

// Fade animation
const faders=document.querySelectorAll(".fade");
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add("show");
  });
});
faders.forEach(f=>obs.observe(f));

// WhatsApp booking
const form=document.querySelector(".booking-form");
if(form){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const v=form.querySelectorAll("input,select,textarea");
    const msg=`Hello, I need a graphic design service:%0A
Name: ${v[0].value}%0A
Email: ${v[1].value}%0A
Phone: ${v[2].value}%0A
Service: ${v[3].value}%0A
Details: ${v[4].value}`;
    window.open(`https://wa.me/254700000000?text=${msg}`,"_blank");
  });
}
