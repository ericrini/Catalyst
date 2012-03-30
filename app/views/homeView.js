define(["text!templates/homeView/homeView.html"], function (homeViewTemplate) {
	var view = Backbone.View.extend({
		tagName: "div",
		
		id: "home_page",
		
		className: "",
		
		attributes: {
			"data-role": "page",
			"data-title": "home"
		},

		events: {
		},
		
		initialize: function () {
			this.template = homeViewTemplate;
		},

		render: function () {
			this.$el.html(this.template);
			this.$el.appendTo("#jqm_container");
		},
		
		show: function (viewModel) {
			$.mobile.changePage(this.$el);
		}
	});
	
	return new view();
});