var currentLang = "en";

StartLanguage();

function SelectLanguage(language) {
  currentLang = language;
  var langs = document.getElementsByName('lang');
  for (var i = 0; i < langs.length; i++) {
    langs[i].style.display = "none";
    if(langs[i].lang == currentLang){
      //console.log("Language: " + currentLang);
      langs[i].style.display = "block";
    }
    //console.log(i + ": " + langs[i].lang );
  }
}

function ChangeLanguage() {
  if (currentLang == "en") {
    currentLang = "tr";
    SelectLanguage(currentLang);
    ChangeiframeLanguage();
  }else {
    currentLang = "en";
    SelectLanguage(currentLang);
    ChangeiframeLanguage();
  }
}

function ChangeiframeLanguage() {
  if (document.getElementById("WorkViewer")) {
    document.getElementById("WorkViewer").contentWindow.ChangeLanguage();
  }
}

function StartLanguage() {
  var localLang = navigator.language || navigator.userLanguage;
  if (localLang == "tr-TR") {
    currentLang = "tr";
  }else {
    currentLang = "en";
  }
  SelectLanguage(currentLang);
}
