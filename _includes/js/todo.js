var initTodo = {
	Init: function () {
		this.SetStrokeDash();
		this.SetItemClick();
	},
	/* Set % ready indigator */
	SetStrokeDash: function(){
		var readyItems = document.getElementsByName("ready");
		this.LootNames(readyItems,function(r_items){
			r_items.addEventListener("load", function() {
				var value = this.getAttribute("data-ready"),
					doc = this.getSVGDocument(),
					path = doc.querySelector('.path'),
					length = path.getTotalLength();

		  		path.setAttribute("style", "stroke-dasharray: "+length+";stroke-dashoffset: "+(length/100)*(100-value)+";");		
			});
		});
	},
/* Toggle class */
	SetItemClick: function(){
		var self = this;
		var todoItems = document.getElementsByName("todoItem");
		this.LootNames(todoItems,function(r_items){
			r_items.addEventListener("touchstart", function( event ) {
				self.Toggle(this);
			}, false);	
			r_items.addEventListener("click", function( event ) {
				self.Toggle(this);						
			}, false);	
		});	
	},	
	Toggle: function(self){	
		var all = document.getElementsByName("todoItem");
		initTodo.LootNames(all,function(r_all){
			var c = r_all.getAttribute("class");
			if(r_all == self){
				if(c.split(" ").indexOf('to-hover') == -1){
					r_all.className += " to-hover";
				}else{
					r_all.className = c.replace("to-hover","");
				}
			}else{
				r_all.className = c.replace("to-hover","");
			}
		});
	},
	/* Utility */
	LootNames: function(collection,call){
		for (var i = 0; i < collection.length; i++) { 
			call(collection[i]);
		}
	},	
};
initTodo.Init();
