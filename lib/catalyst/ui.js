define(function () {
	var Catalyst = Catalyst || {};

	Catalyst.UI = function () {
		this.views = {};
		this.uis = {};
	}

	Catalyst.UI.prototype.registerView = function (viewName, viewObject) {
		this.views[viewName] = viewObject;
		this.views[viewName].rendered = false;
		this.views[viewName].shown = false;
	}

	Catalyst.UI.prototype.registerUI = function (uiName, viewNames) {
		this.uis[uiName] = viewNames;
	}

	Catalyst.UI.prototype.show = function (uiName, data) {
		var outer = this;
		
		// Hide any view that is displayed that is not in this UI.
		_.each(this.views, function (view) {
			if (_.indexOf(outer.uis[uiName], view) === -1) {
				if (view.hide) {
					view.hide();
				}
				view.shown = false;
			}
		});
		
		// Render and show and view in this UI that is not already rendered and shown.
		_.each(this.uis[uiName], function (viewName) {
			var view = outer.views[viewName];
			if (!view.rendered) {
				view.render();
				view.rendered = true;
			}
			if (!view.shown) {
				view.show();
				view.shown = true;
			}
		});
	}
	
	return new Catalyst.UI();
});