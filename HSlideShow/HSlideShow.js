var pages = [];
var targetHorizontalScroll = 0;
var targetPage;



function Init()
{
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
    RefreshPages();
}

function OnKeyDown(e)
{
    if(e.code == "ArrowRight")
    {
        if(GetPage(Number(targetPage.x) +1, targetPage.y) != null)
        {
            targetPage = GetPage(Number(targetPage.x) +1 , 0);
        }
    }
    if(e.code == "ArrowLeft")
    {
        if(GetPage(Number(targetPage.x) -1, targetPage.y) != null)
        {
            targetPage = GetPage(Number(targetPage.x) -1 , 0);
        }
    }
    if(e.code == "ArrowDown")
    {
        if(GetPage(Number(targetPage.x), Number(targetPage.y) +1) != null)
        {
            targetPage = GetPage(Number(targetPage.x), Number(targetPage.y) +1);
        }
    }
    if(e.code == "ArrowUp")
    {
        if(GetPage(Number(targetPage.x), Number(targetPage.y) -1) != null)
        {
            targetPage = GetPage(Number(targetPage.x), Number(targetPage.y) -1);
        }
    }
    
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