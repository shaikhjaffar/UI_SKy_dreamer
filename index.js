$('body').ripples({
    dropRadius: 10,
    perturbance: 0.002,
  });
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
  
 function sendData() {
   const AllInput = document.querySelectorAll('.main input')  
   for (let Input of AllInput){
    console.log(Input.value)
   }
   AllInput.forEach(input => input.value = "")
  const requestOption = {
    method:"POST",
    header : {'Content-Type':'application/json'},
    body:{} ,
 }
    fetch('',requestOption)
    .then((res) => {res.json()
     console.log(res)
     
   })
 }


  
  
