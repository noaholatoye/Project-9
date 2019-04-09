// Get Elements

let webTrafficChart = document.getElementById("web-traffic").getContext("2d");
let btnFdi = document.getElementById("btn-fdi");
let btnPortfolio = document.getElementById("btn-portfolio");
let btnOther = document.getElementById("btn-other");
let btnCapital = document.getElementById("btn-capital");

/* ==============================
Declare data for line chart
=================================*/

let labelTable = [
	"Q3-13",
	"Q1-14",
	"Q3-14",
	"Q1-15",
	"Q3-15",
	"Q1-16",
	"Q3-16",
	"Q1-17",
	"Q3-17",
	"Q1-18",
	"Q3-18"
];

let labelFdi = "Foreign Direct Investment";
let dataFdi = [
	0.2,
	0.1,
	0.5,
	0.5,
	0.5,
	0.8,
	0.4,
	0.2,
	0.7,
	0.1,
	0.2,
	0.2,
	0.3,
	0.3,
	0.2,
	0.3,
	0.1,
	0.4,
	0.2,
	0.3,
	0.5
];

let labelPortfolio = "Portfolio Investment";
let dataPortfolio = [
	3.7,
	3.4,
	2.9,
	4.9,
	5.1,
	2.0,
	1.9,
	2.2,
	1.0,
	1.0,
	0.3,
	0.3,
	0.9,
	0.3,
	0.3,
	0.8,
	2.8,
	3.5,
	4.6,
	4.1,
	1.7
];

let labelOther = "Other Investment";
let dataOther = [
	0.5,
	1.2,
	0.5,
	0.4,
	0.9,
	1.7,
	0.4,
	0.3,
	1.0,
	0.5,
	0.3,
	0.5,
	0.6,
	0.9,
	0.4,
	0.7,
	1.3,
	1.5,
	1.5,
	1.1,
	0.6
];

let labelCapital = "Capital Importation";
let dataCapital = [
	4.4,
	4.7,
	3.9,
	5.8,
	6.5,
	4.5,
	2.7,
	2.7,
	2.7,
	1.6,
	0.7,
	1.0,
	1.8,
	1.5,
	0.9,
	1.8,
	4.1,
	5.4,
	6.3,
	5.5,
	2.9
];

// Display chart
// var myLineChart = new Chart(webTrafficChart, {
// 	responsive: true,
// 	type: "line",
// 	data: {
// 		labels: labelTable,
// 		datasets: [
// 			{
// 				label: labelFdi,
// 				data: dataFdi,
// 				backgroundColor: "rgba(77, 75, 113, 0.2)",
// 				pointBackgroundColor: "#fff",
// 				pointBorderColor: "#4d4b71"
// 			},
// 			{
// 				label: labelPortfolio,
// 				data: dataPortfolio,
// 				backgroundColor: "rgba(179, 179, 179, 0.3)",
// 				pointBackgroundColor: "#fff",
// 				pointBorderColor: "#b3b3b3"
// 			},
// 			{
// 				label: labelOther,
// 				data: dataOther,
// 				backgroundColor: "rgba(130, 201, 144, 0.3)",
// 				pointBackgroundColor: "#fff",
// 				pointBorderColor: "#81c98f"
// 			},
// 			{
// 				label: labelCapital,
// 				data: dataCapital,
// 				backgroundColor: "rgba(115, 118, 191, 0.3)",
// 				pointBackgroundColor: "#fff",
// 				pointBorderColor: "#7376bf"
// 			}
// 		]
// 	},
// 	options: {
// 		legend: {
// 			display: false
// 		}
// 	}
// });

// Toggle Line Chart

let myLineChart = new Chart(webTrafficChart, {
	responsive: true,
	type: "line",
	data: {
		labels: labelTable,
		datasets: [
			{
				label: labelFdi,
				data: dataFdi,
				backgroundColor: "rgba(77, 75, 113, 0.2)",
				pointBackgroundColor: "#fff",
				pointBorderColor: "#4d4b71"
			}
		]
	},
	options: {
		legend: {
			display: false
		},
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: false
					}
				}
			],
			xAxes: [
				{
					ticks: {
						beginAtZero: false
					}
				}
			]
		}
	}
});

function changeChart(chart, labels, data) {
	chart.data.labels = labels;
	chart.data.datasets.forEach(dataset => {
		dataset.data = data;
	});
	chart.update();
}

function clickToggle(element) {
	if (element == btnFdi) {
		changeChart(myLineChart, labelFdi, dataFdi);
	}
	if (element == btnOther) {
		changeChart(myLineChart, labelOther, dataOther);
	}
	if (element == btnCapital) {
		changeChart(myLineChart, labelCapital, dataCapital);
	}
	if (element == btnPortfolio) {
		changeChart(myLineChart, labelPortfolio, dataPortfolio);
	}
}

clickToggle(btnFdi);
clickToggle(btnOther);
clickToggle(btnCapital);
clickToggle(btnPortfolio);
