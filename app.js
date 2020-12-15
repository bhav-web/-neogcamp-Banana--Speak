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
//  const uri = "https://api.funtranslations.com/translate/minion.json?";

//  function encode(uri)
//  {
//      return uri+ "?" + "text= "+ uri
//  }
// const encoded = encodeURI(uri);
// console.log(encoded);
// // expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

// try {
//   console.log(decodeURI(encoded));
//   // expected output: "https://mozilla.org/?x=шеллы"
// } catch (e) { // catches a malformed URI
//   console.error(e);
//
