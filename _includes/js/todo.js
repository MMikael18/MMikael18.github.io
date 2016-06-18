var r = document.getElementsByName("ready");
for (var i = 0; i < r.length; i++) { 
    r[i].addEventListener("load", function() {
		var value = this.getAttribute("data-ready");
	    var doc = this.getSVGDocument();
	    var path = doc.querySelector('.path');
		var length = path.getTotalLength();

  		path.setAttribute("style", "stroke-dasharray: "+length+";stroke-dashoffset: "+length/100*value+";");		
	});
}