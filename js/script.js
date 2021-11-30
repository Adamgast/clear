"use strict"

//ibg photo ======================================================================================
function ibg(){
	let ibg=document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
  }
}
ibg();
//=====================================================================================================
//Динамический адаптив=====================================================================================================
const parent_orig = document.querySelector('.footer__container');
const parent = document.querySelector('.company__container');
const item = document.querySelector('.footer__footer');

	// Слушаем изменение размера экрана
window.addEventListener('resize', function(event){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width<=767) {
		if (!item.classList.contains('_done')) {
			parent.insertBefore(item,parent.children[2]);
			item.classList.add('_done');
		}
	} else{
		if (item.classList.contains('_done')) {
			parent_orig.insertBefore(item,parent_orig.children[0]);
			item.classList.remove('_done');
		}
	}
});
//=====================================================================================================

