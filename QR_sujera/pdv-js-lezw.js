
function dialogo(event, option, tab) {
    var i, contentDialog, dialoglinks, contentTab;

    contentDialog = document.getElementsByClassName("contentDialog");
    for(i = 0; i < contentDialog.length; i++) {
        contentDialog[i].style.display = "none";
    }
    dialoglinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < dialoglinks.length; i++) {
        dialoglinks[i].className = dialoglinks[i].className.replace( "active", "");
    }
    document.getElementById(option).style.display = "block";
    event.currentTarget.className += " active";

    contentTab = document.getElementsByClassName("tabOption");

    for(i = 0; i < contentTab.length; i++) {
        contentTab[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";


}