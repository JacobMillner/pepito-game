var hunger = 0;
var sleep = 0;
var fun = 0;
var anger = 0;
var bible = 0;

var pepitoPos = 0;
var isInverted = false;

var currentFood = "";

var pepitoHtmlSnippet = '<a target="message_frame" href="../messages/room_001_mouse.txt"><img src="../sprites/pepito.gif" /></a>';
var burritoSnippet = '<img src="../sprites/burrito.png" />';
var bedSnippet = '<img src="../sprites/bed.png" />';
var weedSSnippet = '<img src="../sprites/weed_s.png" />';
var weedISnippet = '<img src="../sprites/weed_i.png" />';
var bibleSnippet = '<img src="../sprites/bible.png" />';

const placeFoodAudio = new Audio('../sfx/boop.mp3');
const crunchAudio = new Audio('../sfx/big_crunch.mp3');
const coughAudio = new Audio('../sfx/cough.mp3');
const snoreAudio = new Audio('../sfx/snore.mp3');
const bibleAudio = new Audio('../sfx/holy.mp3');
var loopLength = 2000


const sleepFunc = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const incrementRandomStat = () => {
    const randomInt = Math.floor(Math.random() * 6);
    switch(randomInt) {
        case 0:
            hunger += 1;
            break;
        case 1:
            sleep += 1;
            break;
        case 2:
            fun += 1;
            break;
        case 3:
            anger += 1;
            break;
        case 4:
            bible += 1;
            break;
        case 5:
            break;
    }
}

window.onload = async function () {
    let space1 = document.getElementById("space-1");
    let space2 = document.getElementById("space-2");
    let space3 = document.getElementById("space-3");
    let space4 = document.getElementById("space-4");
    let foodLoc = document.getElementById("foodLoc");
    let hungerStat = document.getElementById("hunger");
    let sleepStat = document.getElementById("sleep");
    let funStat = document.getElementById("fun");
    let angerStat = document.getElementById("anger");
    let bibleStat = document.getElementById("bible");

    document.getElementById('clickBurrito').addEventListener('click', function () {
        foodLoc.innerHTML = burritoSnippet;
        currentFood = "burrito"
        placeFoodAudio.play()
    });
    document.getElementById('clickBed').addEventListener('click', function () {
        foodLoc.innerHTML = bedSnippet;
        currentFood = "bed"
        placeFoodAudio.play()
    });
    document.getElementById('clickWeedS').addEventListener('click', function () {
        foodLoc.innerHTML = weedSSnippet;
        currentFood = "weed_s"
        placeFoodAudio.play()
    });
    document.getElementById('clickWeedI').addEventListener('click', function () {
        foodLoc.innerHTML = weedISnippet;
        currentFood = "weed_i"
        placeFoodAudio.play()
    });
    document.getElementById('clickBible').addEventListener('click', function () {
        foodLoc.innerHTML = bibleSnippet;
        currentFood = "bible"
        placeFoodAudio.play()
    });


    
    const eatFood = () => {
        switch (currentFood) {
            case "burrito":
                hunger = 0;
                foodLoc.innerHTML = ""
                currentFood = "";
                crunchAudio.play();
                break;
            case "bed":
                sleep = 0;
                foodLoc.innerHTML = ""
                currentFood = "";
                snoreAudio.play()
                break;
            case "weed_s":
                fun = 0;
                foodLoc.innerHTML = ""
                currentFood = "";
                coughAudio.play()
                break;
            case "weed_i":
                anger = 0;
                foodLoc.innerHTML = ""
                currentFood = "";
                coughAudio.play()
                break;
            case "bible":
                bible = 0;
                foodLoc.innerHTML = ""
                currentFood = "";
                bibleAudio.play()
                break;
        }
    }

    const setStats = () => {
        hungerStat.innerHTML = 'HUNGER<br>' + hunger + '/10</br>'
        sleepStat.innerHTML = 'SLEEP<br>' + sleep + '/10</br>'
        funStat.innerHTML = 'FUN<br>' + fun + '/10</br>'
        angerStat.innerHTML = 'ANGER<br>' + anger + '/10</br>'
        bibleStat.innerHTML = 'BIBLE<br>' + bible + '/10</br>'
    }
    

    const clearSpaces = () => {
        space1.innerHTML = "";
        space2.innerHTML = "";
        space3.innerHTML = "";
        space4.innerHTML = "";
    }

    const iteratePosition = () => {
        if (!isInverted) {
            pepitoPos++;
        } else {
            pepitoPos--;
        }

    }
    while (true) {
        clearSpaces();
        incrementRandomStat();
        setStats();
        switch (pepitoPos) {
            case 0:
                space1.innerHTML = pepitoHtmlSnippet;
                eatFood()
                if (isInverted) {
                    isInverted = false
                }
                iteratePosition()
                break;
            case 1:
                space2.innerHTML = pepitoHtmlSnippet;
                iteratePosition()
                break;
            case 2:
                space3.innerHTML = pepitoHtmlSnippet;
                iteratePosition()
                break;
            case 3:
                space4.innerHTML = pepitoHtmlSnippet;
                if (!isInverted) {
                    isInverted = true
                }
                iteratePosition()
                break;
        }

        if (loopLength >= 100) {
            loopLength -= 25;
        }
        if (hunger > 10 || sleep > 10 || fun > 10 || anger > 10 || bible > 10) {
            alert('PEPITO HAS DIED')
            sleepFunc(100000);
            break;
        }
        await sleepFunc(loopLength);
    }
};