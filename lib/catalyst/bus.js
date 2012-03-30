define(function () {
	var Catalyst = Catalyst || {};

	Catalyst.Bus = function () {
		this.options = {
			showLoading: true,
			showDebug: true
		}
		this.resources = {};
		this.subscribers = {};
		this.ajaxCount = 0;
	}

	Catalyst.Bus.prototype.registerResource = function (name, options, mockResponse) {
		if (this.options.showDebug) {
			console.log("Catalyst.Bus.registerResource ==> " + name, options);
		}
		this.resources[name] = options;
	}

	Catalyst.Bus.prototype.invokeResource = function (name, settings, showLoading) {
		if (this.options.showDebug) {
			console.log("Catalyst.Bus.invokeResource ==> " + name, settings);
		}
		var resource = this.resources[name];
		this.showLoading();
		$.ajax(resource.url, settings);
	}

	Catalyst.Bus.prototype.subscribe = function (subject, handler) {
		if (this.options.showDebug) {
			console.log("Catalyst.Bus.subscribe ==> " + subject, handler);
		}
		this.subscribers[subject] = handler;
	}

	Catalyst.Bus.prototype.publish = function (subject, data) {
		if (this.options.showDebug) {
			console.log("Catalyst.Bus.publish ==> " + subject, message);
		}
		this.subscribers[subject](data);
	}

	Catalyst.Bus.prototype.showError = function (header, message) {
		var $dialog = $("#error_dialog");
		$("div[data-role='header']", $dialog).find("h1").text(header);
		$("div[data-role='content']", $dialog).find("p").text(message);
		$.mobile.changePage($dialog);
	}

	Catalyst.Bus.prototype.showLoading = function () {
		this.ajaxCount++;
		if (this.ajaxCount === 1 && this.options.showLoading) {
			$.mobile.showLoading();
		}
	}

	Catalyst.Bus.prototype.hideLoading = function () {
		this.ajaxCount--;
		if (this.ajaxCount === 0) {
			$.mobile.hideLoading();
		}
	}
	
	return new Catalyst.Bus();
});