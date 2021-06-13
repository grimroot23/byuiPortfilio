var subjectContainer = document.getElementById("subject-container");
var subBootstrap = subjectContainer.childNodes[3];
var subJquery = subjectContainer.childNodes[7];
var subFontAwesome = subjectContainer.childNodes[11];
var smallToolDevice = window.matchMedia("(max-width: 685px)");

function colRow(b) {
  if (b.matches) {
    subBootstrap.classList.add("col");
    subBootstrap.classList.remove("row");

    subJquery.classList.add("col");
    subJquery.classList.remove("row");

    subFontAwesome.classList.add("col");
    subFontAwesome.classList.remove("row");
  } else {
    subBootstrap.classList.add("row");
    subBootstrap.classList.remove("col");

    subJquery.classList.add("row");
    subJquery.classList.remove("col");

    subFontAwesome.classList.add("row");
    subFontAwesome.classList.remove("col");
  }
}

smallToolDevice.addListener(colRow);

colRow(smallToolDevice);
