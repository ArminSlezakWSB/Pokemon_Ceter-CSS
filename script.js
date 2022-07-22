


window.onload = pokemon();



function pokemon()
{
	var topic ="";
	
	for ( i=0; i<=150; i++)
	{
		var nr = i+1; 
		
		 topic = topic + '<div class="content"><a href="podstrony/poke'+nr+'.html"><img src="image/pokemon'+nr+'.png" alt="pokemon'+ nr +'"></a></div>';
		 if((i+1) %11==0) topic = topic + '<div style="clear:both;"></div>';
		
	}
	
	document.getElementById('main').innerHTML = topic;
};

$(document).ready(function()
{
	var ElementY = $("#menu").offset().top;
	function stickyElement()
	{
		var scrollY = $(window).scrollTop();
		if(scrollY > ElementY) $("#menu").addClass("sticky");
		else $("#menu").removeClass("sticky");
	};
	stickyElement();
	$(window).scroll(function()
	{
		stickyElement();
	});
});