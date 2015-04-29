define(
	[
		'backbone'
	],
	function(Backbone) {

		var State = Backbone.Model.extend({
			initialize: function(params) {
				_.extend(this, params);

				//Need to round over the 3rd decimal place, leaving just 2
				this.set('value', Math.round(this.get('value') * 100) / 100);
			}
		});

		return State;
	}
);