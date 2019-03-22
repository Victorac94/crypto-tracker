import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';

import * as classes from './MyChart.module.sass';

class MyChart extends Component {

  loadDataOnChart = details => {
    let price;
    let volume;
    let volSmallest;
    let unit = null;
    let labels;
    console.log(details);

    price = details.Data.map(c => c.close);
    volume = details.Data.map(c => c.volumeto);
    volSmallest = [...volume];
    volSmallest = volSmallest.sort((a, b) => a - b)[0];

    // Setting the volume to display in Thousands, Millions or Billions
    volume = ((volS) => {
      let u = null;
      volS = volS.toFixed(0);
      volS.toString();

      if (volS.length >= 5 && volS.length < 8) {
        u = unit = "(K)";
      } else if (volS.length >= 8 && volS.length < 11) {
        u = unit = "(Millions)";
      } else if (volS.length >= 11) {
        u = unit = "(Billions)";
      }

      let result = volume.map(v => {
        return u === "(K)" ? v / 1000 :
        u === "(Millions)" ? v / 1000000 :
        u === "(Billions)" ? v / 1000000000 : v
      })
      return result;
    })(volSmallest)

    labels = details.Data.map(c => {
      const d = new Date(c.time*1000);

      return `${d.getDate()}/${d.getMonth() + 1}`;
    });

    const ctx = document.getElementById("myChart").getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: '$ Price',
              yAxisID: 'price',
              data: price,
              backgroundColor: [
                  'rgba(76, 226, 45, 0.2)',
              ],
              borderColor: [
                  'rgba(82, 201, 33, 1)',
              ],
              borderWidth: 1
          },
          {
              label: '$ Volume ' + unit,
              yAxisID: 'volume',
              data: volume,
              backgroundColor: [
                'rgba(85, 184, 255, 0.2)',
              ],
              borderColor: [
                'rgba(85, 184, 255, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                id: 'price',
                type: 'linear',
                position: 'left',
                ticks: {
                    beginAtZero: false
                }
              },
              {
                id: 'volume',
                type: 'linear',
                position: 'right'
              }
            ]
          },
          tooltips: {
            backgroundColor: 'rgba(24, 25, 28, 0.61)',
            callbacks: {
              labelColor: function(tooltipItem, chart) {
                  return {
                      backgroundColor: 'rgb(36, 36, 36)',
                      borderColor: 'rgb(36, 36, 36)'
                  };
              }
            }
          },
          responsiveAnimationDuration: 1
      }
    });

  }

  componentDidMount () {
    this.loadDataOnChart(this.props.detailsReducer.details);
  }

  render () {
    return (
      <div className={classes.chartWrapper}>
        <canvas id="myChart"></canvas>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    detailsReducer: state.detailsReducer
  }
}

export default connect(mapStateToProps)(MyChart);
