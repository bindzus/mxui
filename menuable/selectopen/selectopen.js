steal.apps('phui/menuable').then(function(){
	Phui.Menuable.extend("Phui.Menuable.SelectOpen",
	{
		"{child_selector} default.activate:before" : function(el, ev){
			el.trigger("activate:after")
		},
		"{child_selector} default.deactivate:before" : function(el, ev ){
			el.trigger("deactivate:after")
		},
		// select shows the submenus
		"{child_selector} default.select:before" : function(newActiveMenu, ev ){
			if(newActiveMenu.hasClass(this.options.select))
				return newActiveMenu.trigger("select:after")
			this.ifThereIs({
				a: this.sub(newActiveMenu),
				triggerDefault: "show",
				withData: newActiveMenu,
				andWaitFor: "show:after",
				beforeTriggering: "select:after",
				on: newActiveMenu
			})
		},
		// deselect hides the submenus
		"{child_selector} default.deselect:before": function(deactiveMenu, ev){
			this.ifThereIs({
				a: this.sub(deactiveMenu),
				triggerDefault: "hide",
				andWaitFor: "hide:after",
				beforeTriggering: "deselect:after",
				on: deactiveMenu
			})
		}
	});
	
})
