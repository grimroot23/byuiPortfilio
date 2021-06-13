//================ Index ==================================
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

//================ End of Index ===============================

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

//================ Tools ======================================
var subjectContainer = document.getElementById('subject-container');

var subBootstrap = subjectContainer.childNodes[3];
var subJquery = subjectContainer.childNodes[7];
var subFontAwesome = subjectContainer.childNodes[11];

function colRow(b) {
  if (b.matches) {
		subBootstrap.classList.add('col');
    subBootstrap.classList.remove('row');
		
		subJquery.classList.add('col');
    subJquery.classList.remove('row');
		
		subFontAwesome.classList.add('col');
    subFontAwesome.classList.remove('row');
  }
  else {
    subBootstrap.classList.add('row');
    subBootstrap.classList.remove('col');
		
		subJquery.classList.add('row');
    subJquery.classList.remove('col');
		
		subFontAwesome.classList.add('row');
    subFontAwesome.classList.remove('col');
  }
}

var smallToolDevice = window.matchMedia('(max-width: 685px)');
smallToolDevice.addListener(colRow);

colRow(smallToolDevice);
//================ End of Tools ===============================
