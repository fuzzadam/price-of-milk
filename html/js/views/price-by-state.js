define(
	[
		'underscore', 'backbone', 'highmaps', 'data/us-map'
	],
	function(_, Backbone, Highcharts, MapInfo) {

		var PriceByState = Backbone.View.extend({
			render: function() {
				var data = this.buildData();

				this.$('.hc-container').highcharts('Map', {
					title : {
						text : 'Average Price By State ($)'
					},

					mapNavigation: {
						enabled: false
					},

					colorAxis: {
						min: this.collection.min,
						max: this.collection.max,
						endOnTick: false,
						startOnTick: false
					},

					series : [{
						data : this.collection.formatDataForChart(),
						mapData: MapInfo,
						joinBy: 'hc-key',
						name: 'Price of Milk',
						tooltip: {
							valuePrefix: '$'
						}
					}, {
						name: 'Separators',
						type: 'mapline',
						data: Highcharts.geojson(MapInfo, 'mapline'),
						color: 'silver',
						showInLegend: false,
						enableMouseTracking: false
					}]
				});
			},

			buildData: function() {
				this.collection.min = this.collection.max = this.collection.models[0].get("value");

				this.collection.forEach(_.bind(function(model) {
					if(model.get("value") < this.collection.min) this.collection.min = model.get("value");
					if(model.get("value") > this.collection.max) this.collection.max = model.get("value");
				}, this));
			}
		});

		return PriceByState;
	}
);