// $('body').ripples({
//     dropRadius: 25,
//     perturbance: 0.001,
//   });
  var interval ;

   function navigate(id){
    interval = setInterval(scrollVertical,30,id)
   }
   
 function scrollVertical (id){
  
    var targetSectionCordinate = document.getElementById(id).getBoundingClientRect()
    if (targetSectionCordinate.top <= 50){
        clearInterval(interval);
        return
    }
    window.scrollBy(0,50)
 }
  function inVisible(){
    if(scrollY >= 174){
       document.getElementById('scr').style.display = "none"
    }
    else{
      document.getElementById('scr').style.display = "block"
    }
  }
  window.addEventListener('scroll',inVisible)


  
  
