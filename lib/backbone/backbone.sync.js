// This overrides the Backbone.sync() behavior to allow models to define their own endpoint names better.
Backbone.sync = function (method, model, options) {
	// Setup Options
	options.url = model[method];
	options.dataType = "json";
	$.ajax(options);
}