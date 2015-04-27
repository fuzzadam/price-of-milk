define(
	[
		'backbone'
	],
	function(Backbone) {

		return Backbone.Model.extend({

			initialize: function(params) {
				_.extend(this, params);
				this.set('value', Math.round(this.get('value') * 100) / 100);
				this.set('month_num', parseInt(this.get('period').substring(1)));
				this.set('id', this.get('year').toString() + '-' + this.get('period').substring(1));
			}
		});

	}
);