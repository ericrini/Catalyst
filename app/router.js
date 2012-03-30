define([], function () {
	var router = Backbone.Router.extend({
		initialize: function () {
			Backbone.history.start();
		},
		
		routes: {
			"": "root",
			"#": "root",
			"startup": "startup",
			"home": "home"
		},
		
		root: function () {
			window.location.hash = "#startup";
		},
		
		startup: function () {
			window.app.ui.show("StartupUI");
		},
		
		home: function () {
			window.app.ui.show("HomeUI");
		}
	});
	
	return new router();
});