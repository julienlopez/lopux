FileSystem = function() 
{
	this.pwd = "/";
}

FileSystem.prototype = 
{
	cd : function(dir)
	{

	},
	
	getPwd : function()
	{
		return this.pwd;
	},
}
