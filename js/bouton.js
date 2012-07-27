Bouton = function(nom, icone, callback)
{
  this.jobject = $('<img class="bouton" id="' + nom + '" src="' + icone + '" alt="' + nom + '" />');
  this.jobject.click(callback);
}