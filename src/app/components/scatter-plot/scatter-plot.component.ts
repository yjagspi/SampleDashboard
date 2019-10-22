import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
//import * as d3 from 'd3';
//import { ScatterDataServiceService } from '../../services/scatter-data-service.service';

import { STOCKS } from '../../shared/stock';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';



@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.css']
})
export class ScatterPlotComponent implements OnInit {

  // title = 'Line Chart';

  private margin = { top: 20, right: 20, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;
  //private point: d3Shape.Point<[number, number]>;
  xAxisScale: any;
  yAxisScale: any;


  constructor() {
    this.width = 600 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;    
  }

  ngOnInit() {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    //this.drawLine();
    this.drawScatterPlot();
  }

  private initSvg() {
    this.svg = d3.select('svg')
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  private initAxis() {
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(STOCKS, (d) => d.date));
    this.y.domain(d3Array.extent(STOCKS, (d) => d.value));
  }

  private drawAxis() {

    this.svg.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));

    this.svg.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Price ($)');
  }

  private drawLine() {
    this.line = d3Shape.line()
      .x((d: any) => this.x(d.date))
      .y((d: any) => this.y(d.value));

    this.svg.append('path')
      .datum(STOCKS)
      .attr('class', 'line')
      .attr('d', this.line);
  }

  private drawScatterPlot() {
    // this.svg.append('circle')
    // .attr('class', 'dot')
    // .attr('cx', d => this.xAxisScale(d.date))
    // .attr('cy', d => this.yAxisScale(d.value))
    // .attr('r', 7);

    this.svg.append('g')
      .selectAll("dot")
      .data(STOCKS)
      .enter()
      .append("circle")
      // .attr("cx", function (d) { console.log("d->" + d) ;return this.x(d.date); })
      // .attr("cy", function (d) { return this.y(d.value); })
      .attr("cx", (d: any) => this.x(d.date))
      .attr("cy", (d: any) => this.y(d.value))
      .attr("r", 1.5)
      .style("fill", "#69b3a2")
      // .style("fill", "#FF0000")
  }
}
