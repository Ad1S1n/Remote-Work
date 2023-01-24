


window.addEventListener("scroll",function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
 });

 const navigation = document.querySelector('nav');
 document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
 }





 document.addEventListener("mousemove",parallax)
 function parallax(e){
     this.querySelectorAll(".layer").forEach(layer => {
         const speed =layer.getAttribute('data-speed')
         const x =(window.innerWidth -e.pageX*speed)/100
         const y =(window.innerHeight -e.pageY*speed)/100
         layer.style.transform = `translate(${x}px) translateY(${y}px)`
     });
 }



rows[1,2,null,4,3]
