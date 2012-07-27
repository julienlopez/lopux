$(function(){
  	$('#screen').height($(document).innerHeight()-$('#barre_outils_top').height()-$('#barre_outils_bottom').height());


  	var barre_boutons_top = new BarreBouton('#barre_outils_top');
  	barre_boutons_top.loadDefault();
});
