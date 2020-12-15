var btnTranslate= document.querySelector("#btn-translate");
var textInput= document.querySelector("#text-input");
var outputDiv= document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslateURL(text)
{
    return serverURL +"?" + "text= "+ text
    

}

function errorHandler(error)
{
    console.log("error Occured",error)
    alert("Something Wrong")

}

 btnTranslate.addEventListener("click",function clickEventHandler()
{

    var inputText= textInput.value;//input
    console.log("clicked")

    // calling sever for processing
    fetch(getTranslationURL(inputText)).then(Response=>Response.json()).
    then(json=>
        {
            
            var translatedText=json.contents.translated;
            outputDiv.innerHTML=translatedText;// output
        })
        .catch(errorHandler)


 })

