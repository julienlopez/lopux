Console = function()
{
  	Fenetre.call(this, 'Console', 'console');
  	this.jcorps.css('background-color' , 'black');
  	this.jcorps.css('color' , 'white');
	this.jcorps.append('$> ');
	this.line = '';

	this.filesystem = new FileSystem();
	this.path = '/bin/';
}

Console.keys = {32:' ', 
65:'A', 66:'B', 67:'C', 68:'D', 69:'E', 70:'F', 71:'G', 72:'H', 73:'I', 74:'J', 75:'K', 76:'L', 77:'M', 78:'N', 79:'O', 80:'P', 81:'Q', 82:'R', 83:'S', 84:'T', 85:'U', 86:'V', 87:'W', 88:'X', 89:'Y', 90:'Z',
97:'a', 98:'b', 99:'c', 100:'d', 101:'e', 102:'f', 103:'g', 104:'h', 105:'i', 106:'j', 107:'k', 108:'l', 109:'m', 110:'n', 111:'o', 112:'p', 113:'q', 114:'r', 115:'s', 116:'t', 117:'u', 118:'v', 119:'w', 120:'x', 121:'y', 122:'z'};

Console.prototype = 
{
	onKeyPress : function(event)
	{
		if(event.which == 13)
		{
			this.jcorps.append('<br />');
			this.process(this.line);
			this.line = '';
			this.jcorps.append('$> ');
			return;
		}
		if(event.which == 8)
		{
			if(this.line != '')
			{	
				this.line = this.line.substr(0, this.line.length -1);
				var html = this.jcorps.html();
				this.jcorps.html(html.substr(0, html.length - 1));
			}
			return;
		}
		var key = Console.keys[event.which];
		if(key == undefined) alert('yes ' + event.which);
		this.line = this.line + key;
		this.jcorps.append(key);
		return true;
	},

	process : function(line)
	{
		if(line == 'pwd')
		{
			this.jcorps.append(this.filesystem.getPwd());
			this.jcorps.append('<br />');
			return;
		}
		var commande = line.substr(0, line.indexOf(' '));
		alert(line + " => " + commande);
		try
		{
			var file = this.lookForInPath(commande);
		}
		catch(error)
		{
			this.jcorps.append(error.message);
			this.jcorps.append('<br />');
			return;
		}
	},
		
	lookForInPath : function(fileName)
	{
	
		throw new Exception("Unable to find executable " + fileName);
	}
}
