
var customEvent = new Event("test");
var elem = document.getElementById("mainDiv");
elem.addEventListener("test", testing);


function testing()
{
    console.log("Testing has been invoked");
}



setTimeout(Init, 1);

function Init()
{

    
    elem.dispatchEvent(customEvent);
}

function mouseMove(e)
{
    console.log(e.x);
    if(e.x > 300)
    {

    }
}

