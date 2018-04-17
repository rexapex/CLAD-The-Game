/*
    @author James - (www.github.com/rexapex)
    @date 2018.04.17
*/

// load the last save
document.getElementById("continuebtn").onclick = () => {
    if(typeof(Storage) !== "undefined") {
        if(localStorage.lastSavedIndex != null) {
            sessionStorage.saveToLoadIndex = localStorage.lastSavedIndex;
        } else {
            sessionStorage.saveToLoadIndex = null;
        }
        window.location = "clad.html";
    } else {
        console.log("error: no local storage to load");
    }
};

// create a blank save game
document.getElementById("newbtn").onclick = () => {
    window.location = "clad.html";
};

// present the user with a list of saves to load
document.getElementById("loadbtn").onclick = () => {
    window.location = "clad.html";
};

// TODO - either remove or add customisable settings
document.getElementById("settingsbtn").onclick = () => {
    alert("settingsbtn clicked");
};
