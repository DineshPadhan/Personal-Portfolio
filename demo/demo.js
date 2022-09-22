// const circles = document.querySelector('.dot');  
// window.addEventListener('mousemove', (event) => {  
// const x = -(window.innerWidth / 2 - event.pageX) / 35;  
// const y = -(window.innerHeight / 2 - event.pageY) / 35;  
// circles.style.transform = `rotate(-45deg) translateY(${y}px) translateX(${x}px)`;       
//    });   


// let pos=(event) => {  
//     let circle = document.getElementById('.circle');
//     // let compStyle = window.getComputedStyle(element);
//     let left = event.clientX;
//     let top = event.clientY;
//     // circle.style.left = left + 'px';
//     // circle.style.top = top + 'px';
//     console.log(window.getComputedStyle(".circle"))
//     console.log(window.getComputedStyle)
//   }; 
  

// let circle = document.getElementById('.circle');
// const pos = (event) =>{
//   circle.style.left = event.pageX + 'px';
//   circle.style.top = event.pageY + 'px';
// }
// document.addEventListener('mousemove', onMouseMove);


function pos(event) {
  // Get x and y positions
  let x = event.clientX-25;
  let y = event.clientY-25;
  let element = document.querySelector('.circle');
  let compStyle = window.getComputedStyle(element);
  // Get height and width of circle  to center it
  let h = compStyle.getPropertyValue('height');
  let w = compStyle.getPropertyValue('width');
  // Write positions to screen
  // Set top and left positions of circle
  element.style.top = y + "px";
  element.style.left = x + "px";
}