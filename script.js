//================ Index ==================================
function bgSize(z) {
	if (z.matches) {
		introBg.style.backgroundSize = 'cover';
	}
	else {
		introBg.style.backgroundSize = '100vw';
	}
}

bgChangeSize.addListener(bgSize);

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

whileColumn.addListener(firstImgMarg);

firstImgMarg(whileColumn);
//================ End of Index ===============================

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

//================ Tools ======================================
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

smallToolDevice.addListener(colRow);

colRow(smallToolDevice);
//================ End of Tools ===============================
