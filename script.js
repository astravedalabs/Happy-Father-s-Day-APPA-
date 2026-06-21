// =========================
// ELEMENTS
// =========================

const giftBtn = document.getElementById("giftBtn");

const startScreen = document.getElementById("startScreen");

const letterScreen = document.getElementById("letterScreen");

const envelope = document.getElementById("envelope");

const typedText = document.getElementById("typedText");

const memoryBtn = document.getElementById("memoryBtn");

const memoryScreen = document.getElementById("memoryScreen");

const finishBtn = document.getElementById("finishBtn");

const finalMessage = document.getElementById("finalMessage");

const music = document.getElementById("bgMusic");

let envelopeOpened = false;

let typingStarted = false;

let index = 0;


// =========================
// OPEN GIFT
// =========================

giftBtn.addEventListener("click",()=>{

    startScreen.classList.add("hidden");

    letterScreen.classList.remove("hidden");

});


// =========================
// OPEN LETTER
// =========================

envelope.addEventListener("click",()=>{

    if(envelopeOpened) return;

    envelopeOpened=true;

    envelope.classList.add("open");

    music.play().catch(()=>{});

    startFloating();

    if(!typingStarted){

        typingStarted=true;

        setTimeout(startTyping,700);

    }

});


// =========================
// TYPEWRITER
// =========================

function startTyping(){

    if(index<letterText.length){

        typedText.innerHTML+=letterText.charAt(index);

        index++;

        setTimeout(startTyping,35);

    }

}


// =========================
// GO TO MEMORIES
// =========================

memoryBtn.addEventListener("click",()=>{

    letterScreen.classList.add("hidden");

    memoryScreen.classList.remove("hidden");

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// =========================
// FINAL MESSAGE
// =========================

finishBtn.addEventListener("click",()=>{

    launchCelebration();

    setTimeout(()=>{

        finalMessage.classList.remove("hidden");

    },800);

});


// =========================
// CLOSE FINAL MESSAGE
// =========================

finalMessage.addEventListener("click",()=>{

    finalMessage.classList.add("hidden");

});


// =========================
// CURSOR HEARTS
// =========================

document.addEventListener("mousemove",(e)=>{

    if(Math.random()>0.5) return;

    const heart=document.createElement("div");

    heart.className="cursorHeart";

    const icons=[

        "❤️",

        "✨",

        "⭐"

    ];

    heart.innerHTML=

        icons[Math.floor(Math.random()*icons.length)];

    heart.style.left=e.pageX+"px";

    heart.style.top=e.pageY+"px";

    heart.style.fontSize=

        (Math.random()*15+15)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },1000);

});


// =========================
// FLOATING ITEMS
// =========================

let floatingStarted=false;

function startFloating(){

    if(floatingStarted) return;

    floatingStarted=true;

    setInterval(()=>{

        const item=document.createElement("div");

        item.className="floatingItem";

        const icons=[

            "❤️",

            "✨",

            "⭐",

            "💛"

        ];

        item.innerHTML=

            icons[Math.floor(Math.random()*icons.length)];

        item.style.left=

            Math.random()*100+"vw";

        item.style.fontSize=

            (Math.random()*25+20)+"px";

        item.style.animationDuration=

            (Math.random()*4+6)+"s";

        document.body.appendChild(item);

        setTimeout(()=>{

            item.remove();

        },9000);

    },300);

}


// =========================
// CELEBRATION
// =========================

function launchCelebration(){

    for(let i=0;i<180;i++){

        const piece=document.createElement("div");

        piece.className="explosion";

        const icons=[

            "❤️",

            "✨",

            "⭐",

            "💛"

        ];

        piece.innerHTML=

            icons[Math.floor(Math.random()*icons.length)];

        piece.style.left=

            Math.random()*100+"vw";

        piece.style.top=

            Math.random()*100+"vh";

        piece.style.fontSize=

            (Math.random()*30+15)+"px";

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },3000);

    }

}


// =========================
// MUSIC FADE IN
// =========================

music.volume=0;

giftBtn.addEventListener("click",()=>{

    let volume=0;

    const fade=setInterval(()=>{

        volume+=0.05;

        if(volume>=1){

            volume=1;

            clearInterval(fade);

        }

        music.volume=volume;

    },150);

});


// =========================
// CONSOLE
// =========================

console.log(`
❤️ Happy Father's Day ❤️

Made with love by Taarun.

Love you Appa.
`);