BarreBouton = function(id)
{
  this.jobject = $(id);
  this.boutons = [];
}

BarreBouton.prototype = {
  addBouton: function(bouton)
  {
    this.boutons.push(bouton);
    this.jobject.append(bouton.jobject);
  },
  
  loadDefault: function()
  {
    this.addBouton(new Bouton("bouton_console", "images/console.png", Screen.creerConsole));
  }
}