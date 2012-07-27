Screen = function() 
{
  	if(Screen.caller != Screen.getInstance)
      	throw new Error("This object cannot be instanciated");

  	this.jobject = $('#screen');

  	this.fenetres = [];

	this.focus = null;

	$(document).keypress(function(event) 
	{
		if(Screen.getInstance().focus == null)  return false;
		return Screen.getInstance().focus.onKeyPress(event);
	});
}

// propriété statique qui contient l'instance unique
Screen.instance = null;

Screen.getInstance = function() 
{
  	if (this.instance == null) {
    	this.instance = new Screen();
  	}
  	return this.instance;
}

Screen.addFenetre = function(fenetre)
{
  	var i = this.getInstance();
  	i.fenetres.push(fenetre);
  	i.jobject.append(fenetre.jobject);
}

Screen.creerConsole = function()
{
  	var console = new Console();
  	Screen.addFenetre(console);
}

Screen.getId = function()
{
  	return '#screen';
}

Screen.getFocused = function()
{
	return Screen.getInstance().focus;
}

Screen.setFocused = function(window)
{
	var instance = this.getInstance();
	if(instance.fenetres.indexOf(window) < 0) throw new Error("Fenetre non enregistrée par le Screen");
	instance.focus = window;
}
