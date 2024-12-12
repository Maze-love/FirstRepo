var typed= new Typed(".text", {
    strings:["Junior Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 10,
    loop: true

});
const close_btn= document.querySelector('.btn');
const side_sec= document.querySelector('.sidebar')
close_btn.addEventListener('click',(e)=>{
        e.preventDefault(true);
        close_btn.classList.toggle('show')
        side_sec.classList.toggle('visible')
})