/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

/* global moment:false, Chart:false, Sparkline:false */
const colorsTemplate = {
  'caribbean-green': {
      '50': '#ebfef6',
      '100': '#cefde8',
      '200': '#a2f8d6',
      '300': '#66efc2',
      '400': '#20c997',
      '500': '#05c492',
      '600': '#009f77',
      '700': '#007f63',
      '800': '#00654f',
      '900': '#015343',
      '950': '#002f26',
  }
};


$(function () {
  'use strict'

  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder: 'sort-highlight',
    connectWith: '.connectedSortable',
    handle: '.card-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex: 999999
  })
  $('.connectedSortable .card-header').css('cursor', 'move')


  // bootstrap WYSIHTML5 - text editor
  $('.textarea').summernote()
  

  /* jQueryKnob */
  $('.knob').knob()

 



  /* Chart.js Charts */
  // Sales chart
  var salesChartCanvas = document.getElementById('revenue-chart-canvas').getContext('2d')
  // $('#revenue-chart').get(0).getContext('2d');

  var salesChartData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [
      {
        label: '2024',
        backgroundColor: 'rgba(60,141,188,0.9)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#cefde8',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [28000, 48000, 40000, 19000, 86000, 27000, 90000],
        tension: 0.3
      },
      {
        label: '2023',
        backgroundColor: 'rgba(200, 214, 222, 1)',
        borderColor: 'rgba(200, 214, 222, 1)',
        pointRadius: false,
        pointColor: 'rgba(200, 214, 222, 1)',
        pointStrokeColor: '#c1c7d1',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(200,220,220,1)',
        data: [65000, 59000, 80000, 81000, 56000, 55000, 40000],
        tension: 0.2
      }
    ]
  }

  var salesChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: true
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }

  // This will get the first returned node in the jQuery collection.
  // eslint-disable-next-line no-unused-vars
  var salesChart = new Chart(salesChartCanvas, { // lgtm[js/unused-local-variable]
    type: 'line',
    data: salesChartData,
    options: salesChartOptions
  })

  // Donut Chart
  var pieChartCanvas = $('#sales-chart-canvas').get(0).getContext('2d')
  var pieData = {
    labels: [
      'Producto 1',
      'Producto 2',
      'Producto 3'
    ],
    datasets: [
      {
        data: [22, 17, 10],
        backgroundColor: [colorsTemplate["caribbean-green"]['700'], colorsTemplate["caribbean-green"]['500'], colorsTemplate["caribbean-green"]['100']]
      }
    ]
  }
  var pieOptions = {
    legend: {
      display: true
    },
    maintainAspectRatio: false,
    responsive: true
  }
  // Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  // eslint-disable-next-line no-unused-vars
  var pieChart = new Chart(pieChartCanvas, { // lgtm[js/unused-local-variable]
    type: 'doughnut',
    data: pieData,
    options: pieOptions
  })

  // Sales graph chart
  var salesGraphChartCanvas = $('#revenue-chart-canvas').get(0).getContext('2d');
  //var salesGraphChartCanvas = $('#line-chart').get(0).getContext('2d')
  //var salesGraphChartCanvas = $('#revenue-chart').get(0).getContext('2d');

  var salesGraphChartData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [
      {
        label: '2024',
        backgroundColor: 'rgba(60,141,188,0.9)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: false,
        pointColor: '#cefde8',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [28000, 48000, 40000, 19000, 86000, 27000, 90000],
        tension: 0.3
      },
      {
        label: '2023',
        backgroundColor: 'rgba(200, 214, 222, 1)',
        borderColor: 'rgba(200, 214, 222, 1)',
        pointRadius: false,
        pointColor: 'rgba(200, 214, 222, 1)',
        pointStrokeColor: '#c1c7d1',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(200,220,220,1)',
        data: [65000, 59000, 80000, 81000, 56000, 55000, 40000],
        tension: 0.2
      }
    ]
  }

  var salesGraphChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: '#efefef'
        },
        gridLines: {
          display: false,
          color: '#efefef',
          drawBorder: false
        }
      }],
      yAxes: [{
        ticks: {
          stepSize: 5000,
          fontColor: '#efefef'
        },
        gridLines: {
          display: true,
          color: '#efefef',
          drawBorder: false
        }
      }]
    }
  }

  // This will get the first returned node in the jQuery collection.
  // eslint-disable-next-line no-unused-vars
  var salesGraphChart = new Chart(salesGraphChartCanvas, { // lgtm[js/unused-local-variable]
    type: 'line',
    data: salesGraphChartData,
    options: salesGraphChartOptions
  })
})
