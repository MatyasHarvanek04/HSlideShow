var pages = [];
var targetHorizontalScroll = 0;
var targetPage;



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
    targetPage = pages[0];
}

function OnKeyDown(e)
{
    if(e.code == "ArrowRight")
    {
        if(GetPage(Number(targetPage.x) +1, targetPage.y) != null)
        {
            targetPage = GetPage(Number(targetPage.x) +1 , 0);
            console.log("PageChnaged");
        }
        else
        {
            console.log("null page");
        }
    }
    if(e.code == "ArrowLeft")
    {
        if(GetPage(Number(targetPage.x) -1, targetPage.y) != null)
        {
            targetPage = GetPage(Number(targetPage.x) -1 , 0);
            console.log("PageChnaged");
        }
        else
        {
            console.log("null page");
        }
    }
    if(e.code == "ArrowDown")
    {
        if(GetPage(Number(targetPage.x), Number(targetPage.y) +1) != null)
        {
            targetPage = GetPage(Number(targetPage.x), Number(targetPage.y) +1);
            console.log("PageChnaged");
        }
        else
        {
            console.log("null page");
        }
    }
    if(e.code == "ArrowUp")
    {
        if(GetPage(Number(targetPage.x), Number(targetPage.y) -1) != null)
        {
            targetPage = GetPage(Number(targetPage.x), Number(targetPage.y) -1);
            console.log("PageChnaged");
        }
        else
        {
            console.log("null page");
        }
    }
    
}

function ChangePage(e.code)
{
    
}

function GetPage(x,y)
{
    for (let i = 0; i < pages.length; i++) 
    {
        if(pages[i].x == x && pages[i].y == y)
        {
            console.log("Page found!");
            
            return pages[i];
        }
    }
    console.log("page not found")
}


setInterval(Update, 1);
function Update()
{
    if(targetPage != null)
    {
        window.scrollTo(targetPage.x * window.innerWidth, targetPage.y * window.innerHeight);
    }
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