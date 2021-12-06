var pages = [];
var targetHorizontalScroll = 0;
var targetPage;
var targetScrollX;
var targetScrollY;
var lastPage;
var MainDiv;

var UpPage;
var DownPage;
var LeftPage;
var RightPage;
var Controlls;

setTimeout(Init, 1);
setTimeout(InitUpdate,2);

function InitUpdate()
{
    setInterval(Update, 1);
}


function Init()
{
    Controlls = document.getElementById("Controlls")
    MainDiv = document.getElementById("Presentation");
    var StartPage;
    var divs = document.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) 
    {
        if(divs[i].classList.contains("page"))
        {
            var position = divs[i].id.split("-");
            pages.push(new Page(position[0].substring(1), position[1], divs[i]));
            if(divs[i].classList.contains("startingPage"))
            {
                StartPage = pages[pages.length - 1];
            }
        }
    }
    for (let i = 0; i < pages.length; i++) 
    {
        console.log("x:" + pages[i].x + " y:" + pages[i].y);
    }
    targetPage = StartPage;
    targetScrollX = StartPage.RealX;
    targetScrollY = StartPage.RealY;
    RefreshPages();
    
}
function OnKeyDown(e)
{
    if(e.code == "ArrowRight")
    {
        if(GetPage(Number(targetPage.x) +1, targetPage.y) != null)
        {
            ChangePage(GetPage(Number(targetPage.x) +1 , 0));
            return;
        }
    }
    if(e.code == "ArrowLeft")
    {
        if(GetPage(Number(targetPage.x) -1, targetPage.y) != null)
        {
            ChangePage(GetPage(Number(targetPage.x) -1 , 0));
            return;
        }
    }
    if(e.code == "ArrowDown")
    {
        if(GetPage(Number(targetPage.x), Number(targetPage.y) +1) != null)
        {
            ChangePage(GetPage(Number(targetPage.x), Number(targetPage.y) +1));
            return;
        }
    }
    if(e.code == "ArrowUp")
    {
        if(GetPage(Number(targetPage.x), Number(targetPage.y) -1) != null)
        {
            ChangePage(GetPage(Number(targetPage.x), Number(targetPage.y) -1));
            return;
        }
        else
        {
            console.log("tessst");
        }
    }
    
}

function ChangePage(page)
{
    targetPage = page;
}



function GetPage(x,y)
{
    for (let i = 0; i < pages.length; i++) 
    {
        if(pages[i].x == x && pages[i].y == y)
        {
            return pages[i];
        }
    }
}



function Update()
{
    if(targetScrollX != targetPage.RealX)
    {
        targetScrollX = Lerp(targetScrollX, targetPage.RealX, 0.02);
        if(Math.abs(targetScrollX - targetPage.RealX) < 0.5)
        {
            targetScrollX = targetPage.RealX;
        }
    }
    if(targetScrollY != targetPage.RealY)
    {
        targetScrollY = Lerp(targetScrollY, targetPage.RealY, 0.02);
        if(Math.abs(targetScrollY - targetPage.RealY) < 0.5)
        {
            targetScrollY = targetPage.RealY;
        }
    }
    if(targetPage != null)
    {
        MainDiv.scroll(targetScrollX , targetScrollY);
    }
    //Controlls.style.left = Number(MainDiv. + ) + "px";
    //Controlls.style.top = Number(MainDiv.scrollTop + MainDiv.clientHeight - Controlls.clientHeight) + "px";
}

function Lerp(start, end, t)
{
    return start + (end - start) * t; 
}


function RefreshPages()
{
    for (let i = 0; i < pages.length; i++) 
    {
        pages[i].Refresh();
    }
    targetScrollX = targetPage.RealX;
    targetScrollY = targetPage.RealY;
}




class Page
{
    constructor(x, y, div)
    {
        this.x = x;
        this.y = y;
        this.RealX = this.x * MainDiv.clientWidth;
        this.RealY = this.y * MainDiv.clientHeight;
        this.div = div;
    }

    Refresh()
    {
        this.div.style.left = (this.x * MainDiv.clientWidth) + "px";
        this.div.style.top = (this.y * MainDiv.clientHeight) + "px";
        this.RealX = this.x * MainDiv.clientWidth;
        this.RealY = this.y * MainDiv.clientHeight;
    }
}