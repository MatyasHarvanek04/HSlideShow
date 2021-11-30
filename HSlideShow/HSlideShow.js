var pages = [];
var targetHorizontalScroll = 0;




function Init()
{
    var divs = document.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) 
    {
        var position = divs[i].id.split("-");
        pages.push(new Page(position[0].substring(1), position[1], divs[i]));
    }
    for (let i = 0; i < pages.length; i++) 
    {
        console.log("x:" + pages[i].x + " y:" + pages[i].y);
    }
    RefreshPages();
}

function OnKeyDown(e)
{
    if(e.code == "ArrowRight")
    {
        if(targetHorizontalScroll != window.innerWidth * pages.length - window.innerWidth)
        {
            targetHorizontalScroll += window.innerWidth;
        }
        
        
    }
    if(e.code == "ArrowLeft")
    {
        if(targetHorizontalScroll != window.innerWidth);
        {
            targetHorizontalScroll -= window.innerWidth;
        }
        
    }
    
}

setInterval(Update, 1);
function Update()
{
    window.scrollTo(targetHorizontalScroll, 0);
}


function RefreshPages()
{
    for (let i = 0; i < pages.length; i++) 
    {
        pages[i].Refresh();
        
    }
}


class Page
{
    constructor(x, y, div)
    {
        this.x = x;
        this.y = y;
        this.div = div;
    }

    Refresh()
    {
        this.div.style.left = (this.x * window.innerWidth) + "px";
        this.div.style.top = (this.y * window.innerHeight) + "px";
        console.log(this.div.style.left);
    }
}