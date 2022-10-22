/* Global Variables */
var loadMain = document.getElementById("main");
var currentPage = "noPage";

/* Calling pages */
function goBookPage(bookPage){
    let selectedPage = document.getElementById(bookPage);

    /* Doesn't allow calling the current page */
    if(currentPage != bookPage){
        loadMain.innerHTML = selectedPage.innerHTML;
        currentPage = bookPage;
    }
}

/* General creator engine of elements */
function procreate(father, child, numId){
    //console.log("chamado procreate ");
    let elemFather = document.getElementById(father);
    elemFather.innerHTML += child;

    if(!elemFather.lastElementChild.id){
        return;
    }

    //console.log(elemFather.lastElementChild.id);
    let elemChild = document.getElementById(elemFather.lastElementChild.id);
    //console.log(elemFather.id+", "+elemChild.id);
    elemFather.lastElementChild.id = elemFather.lastElementChild.id + numId;
    //console.log(elemFather.lastElementChild.id);
    mediaNameInherited = elemFather.lastElementChild.id;
}

//Current year on developer informations
var inDevInfo = new Date();
document.getElementById("devInfo").innerHTML += " " + inDevInfo.getFullYear();

function searchTopic(){

}

/* Starting with pageHome */
window.addEventListener("load", function(){
    goBookPage("pageHome");
    currentPage = "pageHome";
    mediaLinesCall();
});