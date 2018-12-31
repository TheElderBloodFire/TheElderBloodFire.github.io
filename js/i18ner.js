var lang = "tr";
var tr = {};
var en = {};

$(document).ready(function() {
  var localLang = navigator.language || navigator.userLanguage;

  if (localLang === "tr-TR") {
    lang = "tr";
  }else {
    lang = "en";
  }  

  getLangJSON(i18ner);
});

function getLangJSON(callback) {
  $.getJSON( "/i18n/" + lang + "/general.json", function() {
    // console.log( "Func:" );
  })
  .done(function(text) {

    i18n.translator.add(text);

    if (lang == "tr") {
      tr.general = i18n.create(text);
    } else if(lang == "en") {
      en.general = i18n.create(text);
    }     

    // console.log(text);

    callback();
  })
  .fail(function(jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
    console.log( "Failed!");
  })
  .always(function() {
    // console.log( "Always!" );
  });
}

// Translate -> i18ner
// add name and data-lang for i18ner texts
function i18ner() {

  for (const named in document.getElementsByName("lang")) {
    if (document.getElementsByName("lang").hasOwnProperty(named)) {
      const element = document.getElementsByName("lang")[named];
      if (lang == "tr") {
        element.innerText = tr.general(element.getAttribute("data-lang"));        
      } else if (lang == "en") {
        element.innerText = en.general(element.getAttribute("data-lang"));      
      }      
    }
  }
}
