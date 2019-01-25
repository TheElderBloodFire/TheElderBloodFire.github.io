//----------------------------Animations----------------------------------
// Top Nav to left animation
var navToLeft = anime({
    targets: '#nav-top',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 50,
    left: 0,
    width: "80px",
    duration: 350,
    elasticity: 250,
    autoplay: false,
    begin: function(anim) {
    $("#nav-text").text("☰");
    },
    complete: function(anim) {
    }
});

// Bot Nav animation
var navFromBot = anime({
    targets: '#nav-bot',
    bottom: 2,
    duration: 1000,
    elasticity: 400,
    autoplay: false,
});

// Flag Nav animation
var navFlag =  anime({
    targets: '.nav-flag',
    left: function(target, index, totalTargets) {
    return 20 + ((totalTargets - index - 1) * 80);
    },
    top: function(target, index, totalTargets) {
    return 20 + (index * 80);
    },
    duration: 450,
    elasticity: 350,
    autoplay: false,
});


//----------------------------Interactions----------------------------------
$("#nav-top").click(function() {
    if ($("#nav-text").text() == "☰") {
    if (!navFlag.completed) {
        navFlag.play();
    } else {
        navFlag.reverse();
        navFlag.play();
    };
    }
});


$("#nav-bot").click(function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    navFromBot.reverse();
    navFromBot.play();
});

$('.fa').hover(
    function() {
        var $this = $(this);
        $this.data('', $this.text());
        $this.text(" TheElderBloodFire");
    },
    function() {
        var $this = $(this);
        $this.text($this.data(''));
    }
);

$('.flag').hover(
    function() {
        var $this = $(this);
        $this.children().show();
    },
    function() {
        var $this = $(this);
        $this.children().hide();
    }
);



//----------------------------Rules----------------------------------
// Scrolling Callbacks for animations
window.onscroll = function() {scrollFunction()};
// Max Scrollable Y value of the page
var maxScrollableY = document.documentElement.scrollHeight - document.documentElement.clientHeight;

function scrollFunction() {
    // console.log(window.pageYOffset  + ":" + scrollY + "--" + maxScrollableY);
    // console.log(navFromBot.reversed + " : " + navFromBot.completed);

    if (scrollY < 200) {
    if (navFromBot.completed || navFromBot.reversed) {
        navFromBot.reverse();
        navFromBot.play();
    }
    } else if (scrollY > 200 && maxScrollableY - scrollY > 200) {
    $("#nav-text").text("☰");
    navToLeft.play();
    // ~may add reverse~

    if (navFromBot.completed || navFromBot.reversed) {
        navFromBot.reverse();
        navFromBot.play();
    }
    } else if (maxScrollableY - scrollY < 200) {
    navFromBot.play();

    if (navFromBot.completed && navFromBot.reversed) {
        navFromBot.reverse();
        navFromBot.play();
    }
    }
}

// On Language Change
function changeLanguage(language) {
    // i18ner datas
    lang = language;
    getLangJSON(i18ner);

    // reset Anims
    navToLeft.reset();
    navFlag.reverse();
    navFlag.play();

    // language directions
    languageQuery();
}

function languageQuery() {
    $('a[href^="/"]').each(function(index, element) {       
        var newAttr = $(element).attr('href').split("?")[0] + '?lang=' + lang;
        $(element).attr('href', newAttr);
    }); 

    // Change Current Page Url
    // var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?lang=' + lang;
    // window.history.pushState({path:newurl},'',newurl);
}

$(document).ready(function() {
    languageQuery();
});