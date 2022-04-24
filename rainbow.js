var container=document.getElementById('container')
var svg=document.getElementById('svg')
var season=document.getElementById('seasons')
var daytime=document.getElementById('daytime')
var time=document.getElementById('time')
function builderseason(e){
  console.log(e.value)
  if(e.value==='winter')
  { container.innerHTML=''
   const x=`<svg width="800" height="400" id="svg" >
       
   <circle cx="400" cy="450" r="200" stroke="none"
       stroke-width="2" fill="blue" />

   <!-- r defines the radius of the circle  -->
   <circle cx="400" cy="450" r="180" stroke="none" 
       stroke-width="2" fill="#ADD8E6" />
   <circle cx="400" cy="450" r="175" stroke="none" 
       stroke-width="2" fill="#007FFF" />
   <circle cx="400" cy="450" r="150" stroke="none" 
       stroke-width="2" fill="#4166F5" />
   <circle cx="400" cy="450" r="125" stroke="none" 
       stroke-width="2" fill="#0067A5" />
   <circle cx="400" cy="450" r="100" stroke="none" 
       stroke-width="2" fill="#OF4D92" />
   <circle cx="400" cy="450" r="90" stroke="none" 
       stroke-width="2" fill="darkblue" />
</svg>`
container.innerHTML=x;



  }
 else if(e.value==='summer')
  { container.innerHTML=''
   const x=`<svg width="800" height="400" id="svg" >
       
   <circle cx="400" cy="450" r="200" stroke="none"
       stroke-width="2" fill="red" />

   <!-- r defines the radius of the circle  -->
   <circle cx="400" cy="450" r="180" stroke="none" 
       stroke-width="2" fill="yellow" />
   <circle cx="400" cy="450" r="175" stroke="none" 
       stroke-width="2" fill="orange" />
   <circle cx="400" cy="450" r="150" stroke="none" 
       stroke-width="2" fill="red" />
   <circle cx="400" cy="450" r="125" stroke="none" 
       stroke-width="2" fill="yellow" />
   <circle cx="400" cy="450" r="100" stroke="none" 
       stroke-width="2" fill="orange" />
   <circle cx="400" cy="450" r="90" stroke="none" 
       stroke-width="2" fill="red" />
</svg>`
container.innerHTML=x;



  }
  else if(e.value==='spring')
  { container.innerHTML=''
   const x=`<svg width="800" height="400" id="svg" >
       
   <circle cx="400" cy="450" r="200" stroke="none"
       stroke-width="2" fill="red" />

   <!-- r defines the radius of the circle  -->
   <circle cx="400" cy="450" r="180" stroke="none" 
       stroke-width="2" fill="orange" />
   <circle cx="400" cy="450" r="175" stroke="none" 
       stroke-width="2" fill="yellow" />
   <circle cx="400" cy="450" r="150" stroke="none" 
       stroke-width="2" fill="green" />
   <circle cx="400" cy="450" r="125" stroke="none" 
       stroke-width="2" fill="blue" />
   <circle cx="400" cy="450" r="100" stroke="none" 
       stroke-width="2" fill="indigo" />
   <circle cx="400" cy="450" r="90" stroke="none" 
       stroke-width="2" fill="violet" />
</svg>`
container.innerHTML=x;



  }

}
function builderdaytime(e){
      console.log(e.value)
if(e.value=='noon')
{   svg.removeAttribute('class')
    svg.classList.add('normal')
    console.log(svg.classList)
}
if(e.value=='morning'){
    svg.removeAttribute('class')
    svg.classList.add('white')
    console.log(svg.classList)
}
if(e.value=='dusk')
{     svg.removeAttribute('class')
    svg.classList.add('dusk')
    console.log(svg.classList)
}


}
function buildertime(f){
    const svgs=document.getElementById('svg')
  svgs.style.transform = 'rotate('+f+'deg)';
  console.log(svg)
console.log(f)

}







