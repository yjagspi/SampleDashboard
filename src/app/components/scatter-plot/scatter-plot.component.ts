import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
//import * as d3 from 'd3';
//import { ScatterDataServiceService } from '../../services/scatter-data-service.service';

import { STOCKS } from '../../shared/stock';
import { TIMELINES } from '../../shared/item_arrival';

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

  private margin = { top: 20, right: 50, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private y1: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;
  //private point: d3Shape.Point<[number, number]>;
  xAxisScale: any;
  yAxisScale: any;
  yAxisRight: any;


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

    this.svg.append("text")
      .attr("x", (this.width / 2))
      .attr("y", this.margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("text-decoration", "underline")
      .text("Files vs. SLA: Scatterplot");
  }

  private initAxis() {
    //this.x = d3Scale.scaleTime().range([0, this.width]);
    let singleWidth = TIMELINES.length;

    this.x = d3Scale.scaleLinear().range([this.width, 0]);
    //this.x.domain(TIMELINES.map((d) => d.arrival_time));
    this.x.domain([-30, 30]);

    //this.y = d3Scale.scaleLinear().range([this.height, 0]).ticks(3);
    //this.y.domain([10, 20]);

    this.y1 = d3Scale.scaleBand().range([this.height, 0]);
    // this.y1 = d3Scale.scaleBand().range([0, this.height]);
    this.y1.domain(["Node 1", "Node 2", "Node 3"]);

 
  }



  private drawAxis() {

    this.svg.append('g')
      .attr('class', 'axis axis--x')
      // .attr('transform', 'translate(0,' + this.height + ')')
      .attr('transform', 'translate(0,' + (this.height) + ')')
      .call(d3Axis.axisBottom(this.x));

    // Add the Y1 Axis
    this.svg.append("g")
      .attr("class", "axisRed")
      .attr("transform", "translate( " + this.width + ", 0 )")
      // .attr('transform', "translate( " + this.width+ ", " + (this.height - (this.height/3)) + ")")
      .call(d3Axis.axisRight(this.y1));

    // this.svg.append('g')
    //   .attr('class', 'axis axis--y')      
    //   .append('text')
    //   .attr('class', 'axis-title')
    //   .attr('transform', 'translate(270)')
    //   .call(d3Axis.axisRight(this.y))
    //   .attr('y', 6)
    //   .attr('dy', '.71em')
    //   .style('text-anchor', 'end')
    //   .text('Price ($)');     

    // this.svg.append('g')
    // .attr('class', 'axis axis--y')
    // .call(d3Axis.axisLeft(this.y))
    // .append('text')
    // .attr('class', 'axis-title')
    // .attr('transform', 'rotate(-270)')
    // .attr('y', 6)
    // .attr('dy', '.71em')
    // .style('text-anchor', 'end')
    // .text('Price ($)');
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
      .data(TIMELINES)
      .enter()
      .append("circle")
      // .attr("cx", function (d) { console.log("d->" + d) ;return this.x(d.date); })
      // .attr("cy", function (d) { return this.y(d.value); })
      // .attr("cx", (d: any) => { console.log("X ->" + this.calcXPlacement(d)); return this.calcXPlacement(d) })
      //.attr("cy", (d: any) => this.y(d.item_id))
      .attr("cx", (d: any) => { console.log("Cx is: " + this.x(d.arrival_time)); return this.x(d.arrival_time) })
      .attr("cy", (d: any) => { return this.calcNodeYValues(d) })
      .attr("r", 5)
      //.style("fill", "#69b3a2")
      .style("fill", "#FF0000");

    //Draw a line for the different plots
    // this.svg.append("path")
    //   .attr("class", "line")
    //   .style("stroke-dasharray", ("3, 3"))
    //   .attr({
    //     x1: -30, y1: "Node 1",
    //     x2: 30, y2: "Node 1"
    //   });
  }

  private calcXPlacement(d: any) {
    let count = TIMELINES.indexOf(d) + 1;
    return count * (this.width / TIMELINES.length);
  }

  private calcNodeYValues(d: any) {
    console.log("Node Number Y is : -> " + this.y1(d.item_id.node_number));
    console.log("Item Number: -> " + d.item_id.item_number);
    console.log("Y is -> :" + (this.height - this.y1(d.item_id.node_number) * d.item_id.item_number));

    return  this.y1(d.item_id.node_number) * d.item_id.item_number;
  }
}
