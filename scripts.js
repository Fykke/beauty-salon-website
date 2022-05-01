window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.documentElement.scrollTop > 1) {
        document.getElementById('logo').style.display = "block";
    }
    else {
        document.getElementById('logo').style.display = "none";
    }
}