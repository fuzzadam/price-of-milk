define(
	[
		'backbone', 'model/state'
	],
	function(Backbone, State) {

		var States = Backbone.Collection.extend({
			model: State,

			formatDataForChart: function() {
				var data = [];

				this.forEach(function(model) {
					data.push(model.attributes);
				});

				return data;
			}
		});

		return States;
	}
);