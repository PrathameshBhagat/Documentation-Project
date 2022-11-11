function load() {
    //set language to english ,hide hindi
    change('h','none');
    //hide all chapters
    const ch = document.getElementsByTagName("chapter");
    for (let i = 0; i < ch.length; i++) {
          ch[i].style.display = "none";
    }
    //add event to change language on . press 
    document.getElementsByTagName("body")[0].addEventListener("keydown", dot);
    //add event to change language on . press only outside all coding area to print "."
    const cdarea = document.getElementsByClassName("code");
    for (let i = 0; i < cdarea.length; i++) {
        cdarea[i].addEventListener("mouseover",revent );
        cdarea[i].addEventListener("mouseout", aevent);
    }
    //display first chapter and save active chapter index in c
    document.getElementsByTagName("chapter")[0].style.display="block";
};
var c=0;
//function to add event to change la.......nguage on . press 
function aevent(){document.getElementsByTagName("body")[0].addEventListener("keydown", dot);}
//function to remove event to change language on . press 
function revent(){document.getElementsByTagName("body")[0].removeEventListener("keydown", dot);} 
//function to change display of all given tags via parameters passed
function change(tag,val)
{  
    const nodes = document.getElementsByTagName(tag);
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].style.display = val;
    }
}
//check and change language depricated other available only use in index.html can update

function codeload()//load editor
{
const cd = document.getElementsByClassName("code");
    for (let i = 0; i < cd.length; i++) {
        let editor = 0;
        ace.edit(cd[i],{theme:"ace/theme/cobalt",
        mode:"ace/mode/javaa",
    });
    }
} 
//change display of indivisual tag
function set(v){
    if(v=="english")
        {change("e","block");change("h","none");}
    else 
        {change("h","block");change("e","none");}
}
function dot()//on click of button change language/chapter
{ 
    var key=('which' in event) ? event.which : event.keyCode;
    if(key=="190"){
        if(document.contains(document.getElementsByTagName("select")[0]))
            if(document.getElementsByTagName("select")[0].selectedIndex==0){
                document.getElementsByTagName("select")[0].selectedIndex=1;set("hindi");}
            else {
                document.getElementsByTagName("select")[0].selectedIndex=0;set("english");}
        else
            if(document.getElementsByTagName("h")[0].style.display=="none")
                {change("h","block");change("e","none");}
            else if(document.getElementsByTagName("e")[0].style.display=="none")
                {change("e","block");change("h","none");}
     }
     else if(key=="78")nchapter();
     else if(key=="80")pchapter();
     else if(key=="72")help();
}
function pchapter()//previous chapter
{
    if(c>0){
        document.getElementsByTagName("chapter")[c-1].style.display="block";
        document.getElementsByTagName("chapter")[c].style.display="none";
        c=c-1;}
    if(c<=0)
        if(document.body.getAttribute("prev")=="undefined"||document.body.getAttribute("prev")==null)
            alert("Previous Link is not defined");
        else
        window.location.replace(document.body.getAttribute("prev"));
}
function nchapter()//next chapter
{
    if(c==(document.getElementsByTagName("chapter").length-1))
        if(document.body.getAttribute("next")=="undefined"
            ||document.body.getAttribute("next")==null)
            alert("Next Link is not defined");
        else
            window.location.replace(document.body.getAttribute("next"));
    if(c<(document.getElementsByTagName("chapter").length-1)){
        document.getElementsByTagName("chapter")[c+1].style.display="block";
        document.getElementsByTagName("chapter")[c].style.display="none";
        c=c+1;}
}
function openNav()
    {document.getElementById("Sidenav").style.width = "20%";}
function closeNav()
    {document.getElementById("Sidenav").style.width = "0";}
function help(){
    alert('Hit dot(.) out of coding space to change text language(eng/hindi)\n'+
        'To go to next chapter press (N) key \n'+
        'To go to previous chapter press (P) key on key board\n'+
        'To go to editor change /Docs to  /edit on search bar\n '+
        'Press (H) for this help list\n\n\n\n'+
        'भाषा बदलने के लिए डॉट (.) coding की जगह के बाहर दबाए'+
        'अगले पाठ पर जाने के लिए (N)दबाए '+
        'पिछले पाठ पर जाने के लिए (P)दबाए '+
        'editor पर जाने के लिए ऊपर (..../Docs)  (..../edit) ');}