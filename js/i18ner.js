var lang = "tr";
var tr = {};
var en = {};

$(document).ready(function() {
  var localLang = navigator.language || navigator.userLanguage;

  if (localLang === "tr-TR" || window.location.href.endsWith('?lang=tr')) {
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

  for (const langed in $("[data-lang]")) {
    if ($("[data-lang]").hasOwnProperty(langed)) {
      const element = $("[data-lang]")[langed];
      if (lang == "tr") {
        element.innerText = tr.general($(element).data("lang"));
      } else if (lang == "en") {
        element.innerText = en.general($(element).data("lang"));
      }
    }
  }
}

// Json based data-lang
var languageDatas = {}

// Language information(data-lang) to object(json)  
function languageToJson() {
  languageDatas.values = {} // i18n library require
  for (const langed in $("[data-lang]")) {
    if ($("[data-lang]").hasOwnProperty(langed)) {
      const element = $("[data-lang]")[langed];
      if($(element).data("lang") != undefined){
        languageDatas.values[$(element).data("lang")] = $(element).text();
      }
    }
  }
  console.log(languageDatas);
  // console.log(JSON.stringify(languageDatas));
  downloadFile(JSON.stringify(languageDatas, null, 2), 'language.json', 'text/json');
}

// Basic Browser File Download
function downloadFile(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
