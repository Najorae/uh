//Music
var musicPrevious = document.getElementById("music-previous");
var musicNext = document.getElementById("music-next");
var audio = document.getElementById("audio");

var musicDescription = document.getElementById("music-description");
var musicBackground = document.getElementById("music-background");
var songTitle = document.getElementById("song-title");
var source = document.getElementById("current-song");

const titles = ["Estranged (2022)", "Shopping on Jupiter (2021)", "Gravity (2021)", "Atmosphere (2020)", "Rain (2021)", "Flow (2018-2019)", "Procedure (2022)", "Tracking Project (2022)", "Midi Song (2020)", "Streetlamp (2022)", "Shift (2021)", "Wake up (2021)", "Change the World (2020)", "Breeze (2021)", "S&S Adventure 1 (2020)"];
const descriptions = ["Started as a freestyle during a call with friends on discord haha. This is more of 2nd version with a wacky ending", "Made last summer sort of about feeling different/alien from people", "Made the synth sound, actually followed a format as I usually have a bunch of wacky song-parts stringed together, about online friends being distracting? ha", "Just starting out on production ~the snare omg no~ but actually put time into arranging vocals haha. One of the first big projects in the program. About a conversation between a part that feels stuck and a part that's living in a fantasy world according to past me - wanting to escape to the moon as with the 'atmosphere' section.", "Don't think there was much meaning behind this, probably wrote off of an imagery - being lost.", "The song that got me into production <3!", "About a few things - Puppet politicians, not having free will, how I was drivin by philosophy to try to escape being human in a sense, being apathetic before learning to feel again, feeling numb/trying to feel, not talking to people, etc.", "This was a little school assignment in which some friends remade a song I made in a previous collab with live instruments.", "little song for a podcast assignment", "little song for a podcast assignment", "song made for a fassion show made to be similar as 'Jinx' by Crumb the Band", "Song about lack of motivation, others and your own expectations, people trying to shape you, transitioning into section about adults in power not listening to the youth who are speaking out.", "Our class made songs after the verdict of Breona Taylor in which she did not get justice. We took clips of speeches- I already had the initial 'Change the World' part before the assignment was given.", "Just a little song I made at 4 a.m. haha. Nostalgic.", "A song I made for my video game! Meow!"];
const sources = ["https://www.dropbox.com/s/q8i28bu4axnngjs/Estranged.wav?raw=1", "https://www.dropbox.com/s/nqyxfjfkfxhua13/Najorae%20-%20Shopping%20on%20Jupiter.wav?raw=1", "https://www.dropbox.com/s/jigayck7qqnlxzm/Najorae%20-%20Gravity%28MIDI%20S2%20Project%29.wav?raw=1", "https://www.dropbox.com/s/quylthm41gn4gat/atmosphere%20ig.wav?raw=1", "https://www.dropbox.com/s/gxtticmmbe2uean/Rain%28SP%20S2%20Project%29.wav?raw=1", "https://www.dropbox.com/s/z6i4s58b3fgcmh7/Flow%20%28MP3%29.mp3?raw=1", "https://www.dropbox.com/s/u2hzkly0mqzg8lr/Najorae%20Procedure%20Mastered.wav?raw=1", "https://www.dropbox.com/s/k9ewohtpzr2l08e/Tracking%20proj%20w_%20tillie%20and%20maddy.wav?raw=1", "https://www.dropbox.com/s/sp1g8izqqj684m6/Midi%20Project.wav?raw=1", "https://www.dropbox.com/s/tkw126gzclazjvi/streetlamp.wav?raw=1", "https://www.dropbox.com/s/t232k9171s2h290/Shift%202.wav?raw=1", "https://www.dropbox.com/s/bg2c0ioim65csen/Wake%20up.wav?raw=1", "https://www.dropbox.com/s/fbvuh533ey5v1ug/Change%20the%20World.wav?raw=1", "https://www.dropbox.com/s/mljxeitpffdq0xk/breeze.wav?raw=1", "https://www.dropbox.com/s/psnk45ktz9r54jp/S%26S%20Adventure%202.wav?raw=1"]
const backgrounds = ["linear-gradient(to right, pink, blue)", "linear-gradient(to right, #e569c100, blue)", "linear-gradient(to right, green, orange)", "linear-gradient(to right, purple, blue, pink)", "linear-gradient(to right, #ec238a, rgb(131 61 155 / 69%), blue)", "linear-gradient(to right, #fbbbc6, rgb(87 59 210 / 18%), #78f0c0)", "linear-gradient(214deg, rgba(243, 241, 245, 0.76), rgb(225, 214, 235), rgb(43, 247, 43))", "linear-gradient(to right, green, purple, blue)", "linear-gradient(to right, #e569c100, #7a2da3)", "linear-gradient(194deg, rgb(255 255 30), rgb(232 232 129), #6c63d7)", "linear-gradient(to right, #af8be9, #18fa32)", "linear-gradient(to right, rgb(175, 139, 233), rgb(24 162 250))", "linear-gradient(14deg, rgb(139 233 169 / 93%), rgb(24 162 250), #9a4cd6e6)", "linear-gradient(132deg, #e890f8, #eded96, rgb(139 233 169 / 93%), rgb(24 162 250), #bf3fe3)", "linear-gradient(166deg, black 15%, rgb(24 162 250), #ab5ae4, black 97%)"]

var i = 0;

if(musicPrevious) {
  musicPrevious.addEventListener("click", function() {
      console.log("previous clicked");
      if (i == 0) {
        i = descriptions.length - 1;
      }
      else {
          i --;
      }

    source.src = sources[i];
    audio.load();
    audio.play();
    songTitle.innerHTML = titles[i];
    musicDescription.innerHTML = descriptions[i];
    musicBackground.style.background = backgrounds[i];
  });
}

if(musicNext){
  musicNext.addEventListener("click", function() {
    console.log("next clicked");
    if (i == descriptions.length - 1) {
      i = 0;
    }
      else {
        i ++;
      }

    source.src = sources[i];
    audio.load();
    audio.play();
    songTitle.innerHTML = titles[i];
    musicDescription.innerHTML = descriptions[i];
    musicBackground.style.background = backgrounds[i];
  });
}

// Index

var abtmeText = document.getElementById("abtmeText");
var abtmeImg = document.getElementById("abtmeImg");
var abtmeNext = document.getElementById("abtmeNext");

const imgList = ["abtme/love.png", "abtme/logic.png", "abtme/smites.png", "abtme/bgm.jpeg", "abtme/sns.png", "abtme/dubs.png", "abtme/panilla.jpeg", "abtme/autocad.png", "abtme/viet.jpeg", "abtme/CSfilter.png", "abtme/irl.png", "abtme/online.png", "abtme/beach.jpg", "abtme/pisshead.png", "abtme/Naj-and-Naru-performing.jpeg"];

const textList = ["I am a recent high school graduate who studied Audio Production & Engineering following 6 years of Vocal Music. At 3 years old, I wrote and recorded my first song which was put on HBO's documentary 'Family is a Family.'", "Since then I have written, composed, recorded, produced, arranged, sung, mixed, and mastered my own and other´s music along with working on podcasts, sound for short films, and audio books on Logic Pro X and Pro Tools. I hopes to release and album or EP soon..ish",
"I've performed with OSA choirs at many venues which I loved. I also dabbled in theatre and was the lead in Starmites run by Bay Area Zeta Players. I've performed with Young Gifted & Black when I was younger.", "I was in an organization for young Black girls where we planned the Black Girls March Oakland. At OSA, I led the Queer & Trans Club for three years and are was on the Board of Students of Color. With Zeta Phi Beta and Street Level Najorae I've volunteered to help feed the community and at other pop-ups.",
"On scratch, with block based coding, I created my first game, The Adventures of Starbuck of Stanley, incorporating a self made soundtrack, which led to teaching a few Block Based Coding workshops to Black youth and wanting to learn coding more.", "I have recorded and performed with my dad who intermixes science with Hip-Hop. We made a Golden State Warriors rap HA.", "We also wrote a book together when I was around 4-8. We used to write as we ate breakfast and listened to live music.", "I often find myself reshaping curriculum for myself - going off and teaching myself things related to the topic or recreating a homework assignment to benefit the most from it. Generally as a perfectionist I liked creating big projects which were fun and more fufiling but time consuming so I learned to better prioritize and time manage.", "I used to sing Vietnamese in annual shows before the pandemic for the Vietnamese Saturday school I went to. I went back and taught students a vietnamese festival song in harmony-ish haha", "I plan to create a second video game on Unity and expand my knowledge of coding languages which I've started with codecademy, Girls Who Code, & CS50. I also attended a 10 week High School Engineering Program with UC Berkeley where I learned AutoCAD, cultivating an environmentally friendly, community oriented tiny homes project.",
"Love my friends and fam! Got my folks from old school and other parts of my life. Also enjoy the company of animals haha.", " Over quarantine I spent some time on discord and got to know some cool people on there. Met some in person too! Twitch days..", "I like spontieity and adventures! I used to do trapeze arts which I miss and I enjoy swimming/being at the beach a lot as well. Rock climbing and being in nature is rewarding - exciting and peaceful. Martial arts is another thing I've dabbled with - more for self defense.", "I've enjoyed playing video games since the DS days. I also like some shows here and there. Netflix & Anime. Of course I enjoy listening to music which I find hard to multitask with cause I spend so much time analyzing it. Piano has been an amazing force in my life yet I'm not very good haha!", "Other links! <a href='assets/Resume.pdf'>My Resume</a> || <a href='assets/A Story of Development.pdf'> A Story of Development (2020) || <a href='assets/CV.pdf'"];

if(abtmeNext){
  abtmeNext.addEventListener("click", function() {
    if (i == descriptions.length - 1) {
      i = 0;
    }
      else {
        i ++;
      }
    abtmeText.innerHTML = textList[i];
    abtmeImg.src = imgList[i];
  });
}

// Navbar on Scroll

window.onscroll = function() {
	myFunction()
};

var navbar = document.getElementById("navbar");
var oldScrollY = window.scrollY;
// var sticky = navbar.offsetTop;

// function myFunction() {
// 	if (window.pageYOffset > sticky) {
// 		navbar.style.background = "rgba(0, 0, 0, 1)";
// 	} else {
// 		navbar.style.background = "rgba(0, 0, 0, 0.5)";
// 	}
// }

function myFunction() {
  if(oldScrollY < window.scrollY){
      navbar.style.background = "rgba(0, 0, 0, 1)";
  } else {
      navbar.style.background = "rgba(0, 0, 0, 0.5)";
  }
  oldScrollY = window.scrollY;
}

/* ref: https://stackoverflow.com/questions/26694385/fade-in-on-scroll-down-fade-out-on-scroll-up-based-on-element-position-in-win,
https://www.educative.io/answers/how-to-detect-the-direction-of-the-scroll-of-a-page-in-javascript*/

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight() + ($(this).innerHeight()/1.5);
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0)
          {$(this).fadeTo(475,1);}
      }
//       else if (objectBottom > windowBottom - ($(this).innerHeight()/3)) { //object goes out of view (scrolling up)
//         if ($(this).css("opacity")==1)
//           {$(this).fadeTo(475,0);}
//       }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

function nav() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  var x = document.getElementById("yes");
  if (x.className === "yuhh") {
    x.className += " responsive";
  } else {
    x.className = "yuhh";
  }
}


//https://stackoverflow.com/questions/31223341/detecting-scroll-direction

// add event listner for next and previous
// change inner html for song-title and source for current song

//https://stackoverflow.com/questions/10792163/change-audio-src-with-javascript
