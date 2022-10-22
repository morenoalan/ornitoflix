/* Variables of Tags */
const callMediaLinePart1 = "<div id='mediaLine' class='mediaLine'><div class='mediaTopic'><div class='mediaTopicName'><h3>Tópico</h3></div><div class='mediaTopicLength'><div class='mediaTopicLengthRound'></div><div class='mediaTopicLengthRound'></div><div class='mediaTopicLengthRound'></div><div class='mediaTopicLengthRound'></div></div></div><div id='mediaCarousel' class='mediaCarousel'>";
const callMediaLinePart2 = "<input type='button' class='mediaToLeft' value='&#x276C;' onmouseover='moveShelfLeft(this.parentNode.firstElementChild.id);' onmouseout='stopMoves();' /><input type='button' class='mediaToRight' value='&#x276D;' onmouseover='moveShelfRight(this.parentNode.firstElementChild.id);' onmouseout='stopMoves();' /></div></div></div>";

const callMediaShelfPart1 = "<div id='mediaShelf' class='mediaShelf'>";
const callMediaShelfPart2 = "</div>";

const callMediaShield = "<div id='mediaShield' class='mediaShield'><div class='mediaCover'><img src='https://static.tvtropes.org/pmwiki/pub/images/trollhunters.jpg' /><div class='mediaInfo'><h3 class='mediaInfoYear'>2021</h3><br /><h3 class='mediaInfoTitle'>Título da Mídia</h3><br /><h3 class='mediaInfoDescription'>Descrição Lorem ipsum ipsum lorem.</h3></div></div></div>";


var numLines = 3
var numShields = 5;

var mediaNameInherited = "";

async function mediaShieldsCall(father){
    //console.log("mediaShieldsCall ok");
    let shieldFather;
    shieldFather = father;
    for(j = 0; j < numShields; j++){
        await procreate(shieldFather, callMediaShield, j);
    }
}

async function mediaShelvesCall(father, numId){
    //console.log("mediaShelvesCall ok");
    let shelfFather;
    shelfFather = father;
    await procreate(shelfFather, callMediaShelfPart1, numId);
    await mediaShieldsCall(mediaNameInherited);
    await procreate(shelfFather, callMediaShelfPart2, "");
}

async function mediaLinesCall() {
    //console.log("mediaLinesCall ok");
    if(currentPage == "pageHome"){
        for(i = 0; i < numLines; i++){
            //console.log("mediaLinesCall "+i);
            await procreate("main", callMediaLinePart1, i);
            
            /* Variable carousel only exist after be created in the function above. It's necessary rename it. */
            document.getElementById("main").lastElementChild.lastElementChild.id = document.getElementById("main").lastElementChild.lastElementChild.id + i;
            
            let carousel = document.getElementById("main").lastElementChild.lastElementChild.id;

            await mediaShelvesCall(carousel, i);
            await procreate(carousel, callMediaLinePart2, "");
        }
        activeDrag((i-1));
        console.log("aqui vai "+(i-1));
    }
}