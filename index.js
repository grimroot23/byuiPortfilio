const introBg = document.getElementById("introBg");
const bgChangeSize = window.matchMedia("(max-width: 650px)");
const imgContent = document.getElementById("img-content");
const firstImgContainer = imgContent.childNodes[1];
const firstImage = firstImgContainer.children[0];
const lastImgContainer = imgContent.childNodes[3];
const lastImage = lastImgContainer.children[0];
const whileColumn = window.matchMedia("(min-width: 768px)");

function bgSize(z) {
  if (z.matches) {
    introBg.style.backgroundSize = "cover";
  } else {
    introBg.style.backgroundSize = "100vw";
  }
}

bgChangeSize.addListener(bgSize);

function rowCol(z) {
  if (z.matches) {
    imgContent.classList.add("row");
    imgContent.classList.remove("col");
  } else {
    imgContent.classList.add("col");
    imgContent.classList.remove("row");
  }
}

var bigDevice = window.matchMedia("(min-width: 1000px)");
bigDevice.addListener(rowCol);

rowCol(bigDevice);

function firstImgMarg(b) {
  if (b.matches) {
    firstImgContainer.style.margin = "0 0 1.5em 0";
  }
}

whileColumn.addListener(firstImgMarg);

firstImgMarg(whileColumn);
