// Require Configuration
require.config({
	paths: {
		// Libraries
		"jquery": 					"lib/jquery/jquery-1.7.1",
		"jquery.mobile": 			"lib/jquery.mobile/jquery.mobile-1.0.1",
		"jquery.mobile.datebox":	"lib/jquery.mobile.datebox/jquery.mobile.datebox-1.0.1",
		"jquery.mockjson":			"lib/jquery.mockjson/jquery.mockjson",
		"underscore": 				"lib/underscore/underscore-1.3.1",
		"backbone": 				"lib/backbone/backbone-0.9.2",
		"backbone.sync":			"lib/backbone/backbone.sync",
		"moment":					"lib/moment/moment-1.5.0",
		"bus": 						"lib/catalyst/bus",
		"ui": 						"lib/catalyst/ui",
		
		// Routers
		"router":					"app/router",	
		
		// Views	
		"LoginView":				"app/views/loginView",
		"HomeView":					"app/views/homeView",
		
		// Models
		"UserModel":				"app/models/userModel",
		
		// Other
		"mocks":					"app/mocks"
	}
});

require(["jquery"], function() {
	require(["mocks"]);
	
	require(["jquery.mobile"], function() {
		// JQM Initialization
		$(document).bind("mobileinit", function(){
			$.mobile.autoInitializePage = false;
			$.mobile.ajaxLoading = false;
			$.mobile.linkBindingEnabled = false;
			$.mobile.hashListeningEnabled = false;
			$.mobile.loadingMessage = "";
			$.mobile.loadingMessageTheme = "b";
		});
		
		
		
		require(["bus", "ui"], function(bus, ui) {
			// Build Global Application Object
			window.app = {
				bus: bus,
				ui: ui
			}
			
			require(["underscore"], function () {
				require(["backbone"], function () {
					require(["backbone.sync"]); // Override Backbone.sync() Function
					require(["router"]); // Load Router
					
					require(["LoginView", "HomeView"], function (LoginView, HomeView) {
						// Register Views
						window.app.ui.registerView("LoginView", LoginView);
						window.app.ui.registerView("HomeView", HomeView);
					
						// Register UIs
						window.app.ui.registerUI("StartupUI", ["LoginView"]);
						window.app.ui.registerUI("HomeUI", ["HomeView"]);
						
						// DOM Ready
						$(document).ready(function () {
							window.app.ui.show("StartupUI"); // Load the startup view.
						});
					});
				});
			});
		});
	});
});