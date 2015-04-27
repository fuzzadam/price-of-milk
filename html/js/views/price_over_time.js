define(
	[
		'backbone', 'highcharts'
	],
	function(Backbone, Highcharts) {

		var PriceOverTime = Backbone.View.extend({
			render: function() {
				var data = this.buildData();

				this.$("#hc-price-over-time").highcharts({
					chart: {
						type: 'line',
						zoomType: 'x'
					},
					title: {
						text: 'Average National Price of Milk Over Time'
					},
					subtitle: {
						text: document.ontouchstart === undefined ?
							'Click and drag in the plot area to zoom in' :
							'Pinch the chart to zoom in'
					},
					xAxis: {
						type: 'datetime',
					},
					yAxis: {
						title: {
							text: 'Dollars ($)'
						}
					},
					plotOptions: {
						area: {
							fillColor: {
								linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
								stops: [
									[0, Highcharts.getOptions().colors[0]],
									[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
								]
							},
							marker: {
								radius: 2
							},
							lineWidth: 1,
							states: {
								hover: {
									lineWidth: 1
								}
							},
							threshold: null
						}
					},
					series: [{
						type: 'area',
						name: 'Average Price of Milk',
						'data': data
					}]
				});
			},

			buildData: function() {
				var data = [];
console.log(this.collection);
				this.collection.each(function(model) {
					data.push([Date.UTC(model.get('year'), model.get('month_num')), model.get('value')]);
				});

				return data;
			}
		});

		return PriceOverTime;
	}
);