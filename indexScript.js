var introBg = document.getElementById('introBg');

function bgSize(z) {
	if (z.matches) {
		introBg.style.backgroundSize = 'cover';
	}
	else {
		introBg.style.backgroundSize = '100vw';
	}
}

var bgChangeSize = window.matchMedia('(max-width: 650px)');
bgChangeSize.addListener(bgSize);

// imgContent = parentNode, parentElement
// Solved by console.log(parentNode.childNodes);

var imgContent = document.getElementById('img-content');
var firstImgContainer = imgContent.childNodes[1];
var firstImage = firstImgContainer.children[0];
var lastImgContainer = imgContent.childNodes[3];
var lastImage = lastImgContainer.children[0];

function handleDeviceChange(e) {
  if (e.matches) {
		firstImage.style.width = '480px';
		firstImage.style.margin = '0 0 1.5em 0';
    lastImage.style.width = '480px';
  }
	else {
    firstImage.style.width = '275.5px';
		firstImage.style.margin = '0';
    lastImage.style.width = '275.5px';
  }
} 

var smallDevice = window.matchMedia('(max-width: 767px)');
smallDevice.addListener(handleDeviceChange);

handleDeviceChange(smallDevice);

function rowCol(z) {
  if (z.matches) {
    imgContent.classList.add('row');
    imgContent.classList.remove('col');
  }
  else {
    imgContent.classList.add('col');
    imgContent.classList.remove('row');
  }
}

var bigDevice = window.matchMedia('(min-width: 1000px)');
bigDevice.addListener(rowCol);

rowCol(bigDevice);

function firstImgMarg(b) {
  if (b.matches) {
    firstImgContainer.style.margin = '0 0 1.5em 0';
  }
}

var whileColumn = window.matchMedia('(min-width: 768px)');
whileColumn.addListener(firstImgMarg);

firstImgMarg(whileColumn);
