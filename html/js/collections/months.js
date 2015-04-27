define(
	[
		'backbone',
		'model/month'
	],
	function(Backbone, Month) {

		return Backbone.Collection.extend({
			model: Month
		});

	}
);