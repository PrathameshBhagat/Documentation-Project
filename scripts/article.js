 
 function load() {
//set language to english ,hide hindi
change('h','none');
//hide all chapters
const ch = document.getElementsByTagName("chapter");
    for (let i = 0; i < ch.length; i++) {
      ch[i].style.display = "none";
}
//display first chapter and save active chapter index in c
document.getElementsByTagName("chapter")[0].style.display="block";
};
var c=0;
function change(tag,val)//function to change language
{  
    const nodes = document.getElementsByTagName(tag);
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].style.display = val;
    }
}
function ehchange(){
        if(document.getElementsByTagName("h")[0].style.display=="none")
            {change("h","block");change("e","none");}
        else if(document.getElementsByTagName("e")[0].style.display=="none")
            {change("e","block");change("h","none");}
}
function set(v){if(v=="english"){change("e","block");change("h","none");}
else {change("h","block");change("e","none");}
}
 function dot()
{ var key=('which' in event) ? event.which : event.keyCode;
   if(key=="190"){
    if(document.getElementsByTagName("select")[0].selectedIndex==0)
{document.getElementsByTagName("select")[0].selectedIndex=1;set("hindi");}
    else {document.getElementsByTagName("select")[0].selectedIndex=0;set("english");}
     }
}
function pchapter()
{
    if(c>0)
{document.getElementsByTagName("chapter")[c-1].style.display="block";
document.getElementsByTagName("chapter")[c].style.display="none";
c=c-1;}
}
function nchapter()
{
    if(c<(document.getElementsByTagName("chapter").length-1)){
document.getElementsByTagName("chapter")[c+1].style.display="block";
document.getElementsByTagName("chapter")[c].style.display="none";
c=c+1;}
}
