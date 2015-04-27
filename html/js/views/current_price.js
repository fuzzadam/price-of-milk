define(
	[
		'backbone', 'handlebars'
	],
	function(Backbone, Handlebars) {

		var CurrentPrice = Backbone.View.extend({
			render: function() {
				var source = $("#tpl-current-price").html(),
					template = Handlebars.compile(source);

				this.$el.html(template(this.collection.at((this.collection.length - 1)).attributes));
			}
		});

		return CurrentPrice;
	}
);