define(["text!templates/loginView/loginView.html", "UserModel"], function (loginViewTemplate, UserModel) {
	var view = Backbone.View.extend({
		tagName: "div",
		
		id: "login_page",
		
		className: "",
		
		attributes: {
			"data-role": "dialog",
			"data-title": "login"
		},

		events: {
			"click #login": "login"
		},
		
		initialize: function () {
			this.template = loginViewTemplate;
		},

		render: function () {
			this.$el.html(this.template);
			this.$el.appendTo("#jqm_container");
		},
		
		show: function (viewModel) {
			$.mobile.changePage(this.$el);
		},
		
		login: function () {
			var user = new UserModel();
			user.set({
				email: $("#email").val(),
				password: $("#password").val()
			});
			user.fetch({
				success: function (model, response) {
					window.app.user = model;
					window.location.hash = "#home";
				}
			});
		}
	});
	
	return new view();
});