function pos(event) {
  // Get x and y positions
  let x = event.clientX-25;
  let y = event.clientY-25;
  let element = document.querySelector('.mouseCircle');
  let compStyle = window.getComputedStyle(element);
  // Get height and width of circle  to center it
  let h = compStyle.getPropertyValue('height');
  let w = compStyle.getPropertyValue('width');
  // Write positions to screen
  // Set top and left positions of circle
  element.style.top = y + "px";
  element.style.left = x + "px";
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        document.querySelector("nav").style.background = "#000";
        document.querySelector(".navText").classList.add("onBlack");
    } else {
        document.querySelector(".navText").classList.remove("onBlack");
        document.querySelector("nav").style.background = "none";
    }
}

var typing = new Typed(".text", {
    strings: ["", "Coder", "Freelancer", "Web Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});



gsap.registerPlugin(TextPlugin, EasePack);

var container = $("#demo"),
    _sentenceEndExp = /(\.|\?|!)$/g; //regular expression to sense punctuation that indicates the end of a sentence so that we can adjust timing accordingly

function machineGun(text) {
  var words = text.split(" "),
      tl = gsap.timeline({delay:0.7, repeat:100, repeatDelay:2}),
      wordCount = words.length,
      time = 0,
      word, element, duration, isSentenceEnd, i;
  
  for(i = 0; i < wordCount; i++){
    word = words[i];
    isSentenceEnd = _sentenceEndExp.test(word);
    element = $("<h3>" + word + "</h3>").appendTo(container);
    duration = Math.max(0.5, word.length * 0.08); 
    if (isSentenceEnd) {
      duration += 0.6; 
    }
    gsap.set(element, {autoAlpha:0, scale:0, z:0.01});
    
    tl.to(element, duration, {scale:1.2,  ease:"slow(0.25, 0.9)"}, time)
      //notice the 3rd parameter of the SlowMo config is true in the following tween - that causes it to yoyo, meaning opacity (autoAlpha) will go up to 1 during the tween, and then back down to 0 at the end. 
		 	.to(element, duration, {autoAlpha:1, ease:"slow(0.25, 0.9, true)"}, time);
    time += duration - 0.05;
    if (isSentenceEnd) {
      time += 0.6; //at the end of a sentence, add a pause for dramatic effect.
    }
  }
  
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.documentElement.scrollTop > 650) {
      machineGun("Hello I am Dinesh what can I Help You Hire me for your help");
  }
}

