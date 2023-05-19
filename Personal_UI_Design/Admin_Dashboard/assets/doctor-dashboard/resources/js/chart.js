
        // Generate some random data to present in the chart
        var now = moment().endOf('day').toDate();
        var time_ago = moment().startOf('day').subtract(10, 'year').toDate();
        var data = d3.time.days(time_ago, now).map(function (date, index) {
          return {
            date: moment(date),
            value: Math.floor(Math.random() * 500) + (index % 7 * 100),
          }
        });
        
        // Bar chart settings
        var margin = {
          top: 100,
          right: 25,
          bottom: 25,
          left: 40,
        };
        
        var width = 750 - margin.left - margin.right;
        var height = 400 - margin.top - margin.bottom;
        
        var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);
        var y = d3.scale.linear().range([height, 0]);
        
        var xAxis = d3.svg.axis()
          .scale(x)
          .orient('bottom');
        
        var yAxis = d3.svg.axis()
          .scale(y)
          .orient('left')
          .ticks(10);
        
        // Create svg element for the bar chart
        var svgWidth = width + margin.left + margin.right;
        var svgHeight = height + margin.top + margin.bottom;
        var barChartSVG = d3.select('#bar-chart')
          .append('svg')
          .attr('width', '100%')
          .attr('height', svgHeight)
          .attr('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        
        // Initialize selection variables
        var modes = ['year', 'month', 'week', 'day'];
        var selectedMode = 'week';
        var selectedDate = moment();
        var intervals = {
          'year': 'months',
          'month': 'days',
          'week': 'days',
          'day': 'hours',
        };
        
        // Filter data to a specific range
        var filterData = function(range) {
          return range.map(function(d, i) {
            return {
              'key': function() {
                if ( selectedMode === 'year' ) {
                  return moment(d).month(i).format('MMM');
                } else if ( selectedMode === 'month' ) {
                  return moment(d).date(i+1).format('D');
                } else if ( selectedMode === 'week' ) {
                  return moment(d).weekday(i).format('dddd');
                } else if ( selectedMode === 'day' ) {
                  return moment(d).hour(i).format('H');
                }
              }(),
              'value': data.filter(function(e) {
                return moment(d).isSame(e.date.clone().startOf(intervals[selectedMode]));
              }).reduce(function(total, e) {
                return total + e.value;
              }, 0)
            }
          });
        }
        
        // Return data based on the selected mode and date
        var getData = function() {
          var p1 = selectedDate.clone().subtract(1, selectedMode).startOf(selectedMode);
          var p2 = selectedDate.clone().startOf(selectedMode);
          var p3 = selectedDate.clone().endOf(selectedMode);
          return {
            'previous': filterData(d3.time[intervals[selectedMode]](p1, p2)),
            'current': filterData(d3.time[intervals[selectedMode]](p2, p3)),
          }
        };
        
        var render = function() {
          renderModeButtons();
          renderControlButtons();
        
          var data = getData();
          if ( data ) {
            x.domain(data.current.map(function(d) { return d.key; }));
            y.domain([0, d3.max(
              [data.current, data.previous],
              function(arr) {
                return d3.max(arr,
                  function(d) {
                    return d.value;
                  });
              })
            ]);
        
            renderBarChartAxis();
        
            renderBarChart(data.current);
            renderBarChartLabels(data.current);
        
            renderPrevBarChart(data.previous);
            renderPrevBarChartLabels(data.previous);
          } else {
            barChartSVG.selectAll('.bar').remove();
            barChartSVG.selectAll('.prev-bar').remove();
          }
        };
        
        var renderModeButtons = function () {
          barChartSVG.selectAll('.mode-button').remove();
          var modeButtons = barChartSVG.selectAll('.mode-button')
            .data(modes)
            .enter()
            .append('g')
            .attr('class', function(d) {
              return d === selectedMode ? 'mode-button active' : 'mode-button';
            })
            .on('click', function(d) {
              selectedMode = d;
              render();
            });
        
          modeButtons.append('rect')
            .attr('class', 'button-rect')
            .attr('width', 50)
            .attr('height', 30)
            .attr('x', function(d, i) {
              return width - (60*i) - 50;
            })
            .attr('y', -100);
        
          modeButtons.append('text')
            .attr('class', 'button-label')
            .attr('text-anchor', 'middle')
            .attr('x', function(d, i) {
              return width - (60*i) - 25;
            })
            .attr('y', -80)
            .text(function(d) { return d; });
        };
        
        var renderControlButtons = function () {
          barChartSVG.selectAll('.controls').remove();
          var controls = barChartSVG.append('g')
            .attr('class', 'controls');
        
          // Show currently selected year
          var clText = controls.append('text')
            .attr('class', 'control-label')
            .attr('x', width-30)
            .attr('y', -30)
            .attr('text-anchor', 'end')
            .text(function () {
              if ( selectedMode === 'year' ) {
                return selectedDate.format('YYYY');
              } else if ( selectedMode === 'month' ) {
                return selectedDate.format('MMMM YYYY');
              } else if ( selectedMode === 'week' ) {
                return 'Week ' + selectedDate.format('W YYYY');
              } else if ( selectedMode === 'day' ) {
                return selectedDate.format('DD MMM YYYY');
              }
            });
        
          // Get the bounding box of the control label text
          var clTextBB = clText[0][0].getBBox();
        
          // Render prev button
          controls.append('path')
            .attr('class', 'button-prev')
            .attr('d', function() {
              return 'M ' + (width-(clTextBB.width+40)) +' '+ -50 + ' l 0 20 l -15 -10 z';
            })
            .on('click', function() {
              if ( selectedMode === 'year' ) {
                selectedDate.subtract(1, 'year');
              } else if ( selectedMode === 'month' ) {
                selectedDate.subtract(1, 'month');
              } else if ( selectedMode === 'week' ) {
                selectedDate.subtract(1, 'week');
              } else if ( selectedMode === 'day' ) {
                selectedDate.subtract(1, 'day');
              }
              render();
            })
        
          // Render next button
          controls.append('path')
            .attr('class', 'button-next')
            .attr('d', function() {
              return 'M ' + (width-20) +' '+ -50 + ' l 0 20 l 15 -10 z';
            })
            .on('click', function() {
              if ( selectedMode === 'year' ) {
                selectedDate.add(1, 'year');
              } else if ( selectedMode === 'month' ) {
                selectedDate.add(1, 'month');
              } else if ( selectedMode === 'week' ) {
                selectedDate.add(1, 'week').format('dddd');
              } else if ( selectedMode === 'day' ) {
                selectedDate.add(1, 'day').format('H');
              }
              render();
            })
        };
        
        var renderBarChartAxis = function () {
          barChartSVG.selectAll('.axis').remove();
          barChartSVG.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(0, ' + height + ')')
            .call(xAxis);
          barChartSVG.append('g')
            .attr('class', 'axis')
            .call(yAxis);
        };
        
        var renderBarChart = function(data) {
          barChartSVG.selectAll('.bar').remove();
          barChartSVG.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', function(d) { return x(d.key); })
            .attr('width', x.rangeBand())
            .attr('y', height)
            .attr('height', 0)
            .on('mouseover', function(d) {
              showLabels(d);
            })
            .on('mouseout', function(d) {
              hideLabels(d);
            })
            .transition()
              .delay(function(d, i) { return i * 150; })
              .duration(150)
              .ease('quad')
              .attr('height', function(d) {
                return Math.max((height-1) - y(d.value), 0);
              })
              .attr('y', function(d) {
                return y(d.value);
              });
        };
        
        var renderBarChartLabels = function(data) {
          barChartSVG.selectAll('.bar-label').remove();
          barChartSVG.selectAll('.bar-label')
            .data(data)
            .enter()
            .append('text')
            .attr('class', 'bar-label')
            .attr('text-anchor', 'middle')
            .attr('opacity', 0)
            .attr('x', function(d) {
              return x(d.key) + x.rangeBand() / 2;
            })
            .attr('y', function (d) {
              return y(d.value) + 50;
            })
            .text(function (d) {
              return d.value;
            });
        };
        
        var renderPrevBarChart = function(data) {
          barChartSVG.selectAll('.prev-bar').remove();
          barChartSVG.selectAll('.prev-bar')
            .data(data)
            .enter()
            .append('rect')
            .filter(function(d) {
              if ( selectedMode === 'month' ) {
                var daysInMonth = selectedDate.daysInMonth();
                var daysInPrevMonth = selectedDate.clone().subtract(1, 'month').daysInMonth();
                if ( daysInMonth < daysInPrevMonth ) {
                  return parseInt(d.key, 10) < daysInMonth;
                }
              }
              return true;
            })
            .attr('class', 'prev-bar')
            .attr('x', function(d) {
              return x(d.key) + x.rangeBand() / 2 - 1;
            })
            .attr('width', 1)
            .attr('y', height)
            .attr('height', 0)
            .transition()
              .delay(function(d, i) { return i * 150; })
              .duration(150)
              .ease('quad')
              .attr('height', function(d) {
                return Math.max((height-1) - y(d.value), 0);
              })
              .attr('y', function(d) {
                return y(d.value);
              });
        };
        
        var renderPrevBarChartLabels = function(data) {
          barChartSVG.selectAll('.prev-bar-label').remove();
          barChartSVG.selectAll('.prev-bar-label')
            .data(data)
            .enter()
            .append('text')
            .filter(function(d) {
              if ( selectedMode === 'month' ) {
                var daysInMonth = selectedDate.daysInMonth();
                var daysInPrevMonth = selectedDate.clone().subtract(1, 'month').daysInMonth();
                if ( daysInMonth < daysInPrevMonth ) {
                  return parseInt(d.key, 10) < daysInMonth;
                }
              }
              return true;
            })
            .attr('class', 'prev-bar-label')
            .attr('text-anchor', 'middle')
            .attr('opacity', 0)
            .attr('x', function(d) {
              return x(d.key) + x.rangeBand() / 2;
            })
            .attr('y', function (d) {
              return y(d.value) + 50;
            })
            .text(function (d) {
              return d.value;
            });
        };
        
        var showLabels = function(d) {
          d3.selectAll('.bar-label')
            .filter(function(l) {
              return l.key === d.key;
            })
            .transition()
              .duration(150)
              .ease('quad')
              .attr('opacity', function(d) {
                return +!!d.value;
              })
              .attr('y', function (d) {
                return y(d.value) - 10;
              });
          d3.selectAll('.prev-bar-label')
            .filter(function(l) {
              return l.key === d.key;
            })
            .transition()
              .duration(150)
              .ease('quad')
              .attr('opacity', function(d) {
                return +!!d.value;
              })
              .attr('y', function (d) {
                return y(d.value) - 10;
              });
        };
        
        var hideLabels = function(d) {
          d3.selectAll('.bar-label')
            .filter(function(l) {
              return l.key === d.key;
            })
            .transition()
              .duration(150)
              .ease('quad')
              .attr('opacity', 0)
              .attr('y', function (d) {
                return y(d.value) + 20;
              });
          d3.selectAll('.prev-bar-label')
            .filter(function(l) {
              return l.key === d.key;
            })
            .transition()
              .duration(150)
              .ease('quad')
              .attr('opacity', 0)
              .attr('y', function (d) {
                return y(d.value) + 20;
              });
        };
        
        // Key bindings for mode switching and next/prev navigation
        d3.select('body').on('keyup', function () {
        
          // Number 1 / day overview
          if ( d3.event.keyCode === 49 ) {
            selectedMode = 'day';
            render();
          }
        
          // Number 2 / week overview
          if ( d3.event.keyCode === 50 ) {
            selectedMode = 'week';
            render();
          }
        
          // Number 3 / month overview
          if ( d3.event.keyCode === 51 ) {
            selectedMode = 'month';
            render();
          }
        
          // Number 4 / year overview
          if ( d3.event.keyCode === 52 ) {
            selectedMode = 'year';
            render();
          }
        
          // Left arrow / prev
          if ( d3.event.keyCode === 37 ) {
            if ( selectedMode === 'year' ) {
              selectedDate.subtract(1, 'year');
            } else if ( selectedMode === 'month' ) {
              selectedDate.subtract(1, 'month');
            } else if ( selectedMode === 'week' ) {
              selectedDate.subtract(1, 'week');
            } else if ( selectedMode === 'day' ) {
              selectedDate.subtract(1, 'day');
            }
            render();
          }
        
          // Right arrow / next
          if ( d3.event.keyCode === 39 ) {
            if ( selectedMode === 'year' ) {
              selectedDate.add(1, 'year');
            } else if ( selectedMode === 'month' ) {
              selectedDate.add(1, 'month');
            } else if ( selectedMode === 'week' ) {
              selectedDate.add(1, 'week');
            } else if ( selectedMode === 'day' ) {
              selectedDate.add(1, 'day');
            }
            render();
          }
        });
        
        render();