define(["underscore", "backbone"], function (_, backbone) {
	return Backbone.Model.extend({
		defaults: {
			userId: undefined,
			groups: undefined,
			email: undefined
		},
		
		initialize: function () {
			this.read = "api/user"
		}
	});
});