

$('.form button').on('click', function (e) {

  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var age = document.getElementById("age").value;

  if (name == "" || email == "" || phone == "" || age == "") {
    message.innerHTML = "All fields are required"
  }
  else if (!(email.includes("@") && email.includes(".com"))) {
    message.innerHTML = "Please provide a valid Email Address"
  }
  else if (phone.length != 10) {
    message.innerHTML = "Required 10 digits, (exclude '+91')"
  } else if (age < 13 || age > 50) {
    message.innerHTML = "You do not fall under the Allowed Age Group to Register"
  }

  else {
    jsonObject = {
      "name":"",
      "email":"",
      "phone":"",
      "age":""
    }
    jsonObject.name=name;
    jsonObject.email=email;
    jsonObject.phone=phone;
    jsonObject.age=age;
    
    var str = JSON.stringify(jsonObject);



    axios({
      method: 'post',
      url: 'https://script.google.com/macros/s/AKfycbyX9pPGLQxTtkA_2xgbNILgA6I3MKqmXKGU3TYYXAqiqbWwyWE_jGg0KxPvqKw2iux6Vg/exec?action=addUser',
      data: str
    });
 
    document.getElementById("form").reset();

    $('.belt').addClass('transitioned-1');
    $('.progress-inner').addClass('loading');

    setTimeout(function () {
      $('.form-container').addClass('transitioned-3');
    }, 3000);

    setTimeout(function () {

      $('.belt').removeClass('transitioned-1');
      $('.belt').addClass('transitioned-2');

    }, 3300);

    $('.success button').on('click', function () {

      $('.progress-inner').removeClass('loading');
      $('.belt').removeClass('transitioned-2');
      $('.form-container').removeClass('transitioned-3');

    });
  }

});


 

"use strict";
var _a, _b;
const ID = "bongo-cat";
const s = (selector) => `#${ID} ${selector}`;
const notes = document.querySelectorAll(".note");
for (let note of notes) {
    (_a = note === null || note === void 0 ? void 0 : note.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(note.cloneNode(true));
    (_b = note === null || note === void 0 ? void 0 : note.parentElement) === null || _b === void 0 ? void 0 : _b.appendChild(note.cloneNode(true));
}
const music = { note: s(".music .note") };
const cat = {
    pawRight: {
        up: s(".paw-right .up"),
        down: s(".paw-right .down"),
    },
    pawLeft: {
        up: s(".paw-left .up"),
        down: s(".paw-left .down"),
    },
};
const style = getComputedStyle(document.documentElement);
const green = style.getPropertyValue("--green");
const pink = style.getPropertyValue("--pink");
const blue = style.getPropertyValue("--blue");
const orange = style.getPropertyValue("--orange");
const cyan = style.getPropertyValue("--cyan");
gsap.set(music.note, { scale: 0, autoAlpha: 1 });
const animatePawState = (selector) => gsap.fromTo(selector, { autoAlpha: 0 }, {
    autoAlpha: 1,
    duration: 0.01,
    repeatDelay: 0.19,
    yoyo: true,
    repeat: -1,
});
const tl = gsap.timeline();
tl.add(animatePawState(cat.pawLeft.up), "start")
    .add(animatePawState(cat.pawRight.down), "start")
    .add(animatePawState(cat.pawLeft.down), "start+=0.19")
    .add(animatePawState(cat.pawRight.up), "start+=0.19")
    .timeScale(1.6);
gsap.from(".terminal-code line", {
    drawSVG: "0%",
    duration: 0.1,
    stagger: 0.1,
    ease: "none",
    repeat: -1,
});
// typing for pipe function doesn't seem to be working for usage when partially applied?
const noteElFn = gsap.utils.pipe(gsap.utils.toArray, gsap.utils.shuffle);
const noteEls = noteElFn(music.note);
const numNotes = noteEls.length / 3;
const notesG1 = noteEls.splice(0, numNotes);
const notesG2 = noteEls.splice(0, numNotes);
const notesG3 = noteEls;
const colorizer = gsap.utils.random([green, pink, blue, orange, cyan, "#a3a4ec", "#67b5c0", "#fd7c6e"], true);
const rotator = gsap.utils.random(-50, 50, 1, true);
const dir = (amt) => `${gsap.utils.random(["-", "+"])}=${amt}`;
const animateNotes = (els) => {
    els.forEach((el) => {
        gsap.set(el, {
            stroke: colorizer(),
            rotation: rotator(),
            x: gsap.utils.random(-25, 25, 1),
        });
    });
    return gsap.fromTo(els, {
        autoAlpha: 1,
        y: 0,
        scale: 0,
    }, {
        duration: 2,
        autoAlpha: 0,
        scale: 1,
        ease: "none",
        stagger: {
            from: "random",
            each: 0.5,
        },
        rotation: dir(gsap.utils.random(20, 30, 1)),
        x: dir(gsap.utils.random(40, 60, 1)),
        y: gsap.utils.random(-200, -220, 1),
        onComplete: () => animateNotes(els),
    });
};
tl.add(animateNotes(notesG1)).add(animateNotes(notesG2), ">0.05").add(animateNotes(notesG3), ">0.25");
