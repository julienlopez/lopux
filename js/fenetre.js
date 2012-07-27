Fenetre = function(titre, id)
{
	this.titre = titre;
  	this.jobject = $('<div class="fenetre" id="' + id + '"></div>');
  	this.jobject.draggable({
      		containment : Screen.getId()
    	});
  	this.jentete = $('<div class="fenetre_entete"><center>' + titre + '</center></div>');

  	this.jcorps = $('<div class="fenetre_corps"></div>');
  
  	this.jobject.append(this.jentete);
  	this.jobject.append(this.jcorps);

	Screen.addFenetre(this);
	Screen.setFocused(this);
}
