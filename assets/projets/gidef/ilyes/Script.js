function saveChoice(c){
    localStorage.setItem("choice", c);
}

function getChoice(){
    return localStorage.getItem("choice");
}