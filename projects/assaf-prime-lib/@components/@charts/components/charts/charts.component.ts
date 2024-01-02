import { Component, Input } from '@angular/core';
import { ChartsMode } from '../../models/charts-model';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { CurveFactory } from 'd3-shape';

@Component({
  selector: 'assaf-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class AssafChartsComponent {
  //#region Declerations
  // Sets chart scheme type
  @Input() schemeType: ScaleType = ScaleType.Linear;
  //Sets view Curve  Linear
  @Input() linearCurve!: CurveFactory;
  // Array containg chart data to be viewed
  @Input() chartData!: Array<any>;
  //The dimensions of the chart [width, height].
  @Input() chartDimensions!: [number, number];
  //linear-gauge the value represented on the gauge
  @Input() value!: number;
  //linear-gauge the value represented by the vertical line on the gauge
  @Input() previousValue!: number;
  //The color scheme object of the chart.
  @Input() colorScheme!: Color;
  //Set the X axis Label text
  @Input() xAxisLabel!: string;
  //Set the Y axis Label text
  @Input() yAxisLabel!: string;
  //number-card Color of the card backGround
  @Input() cardColor: string = '#82AAE3';
  //number-card Color of the text Color
  @Input() textColor: string = 'white';
  // Set The legend title of chart
  @Input() legendTitle!: string;
  // show or hide the X axis
  @Input() showXAxis: boolean = false;
  // show or hide the Y axis
  @Input() showYAxis: boolean = false;
  // show or hide the X axis label
  @Input() showXAxisLabel: boolean = false;
  // show or hide the Y axis label
  @Input() showYAxisLabel: boolean = false;
  //show Time Line
  @Input() timeline: boolean = false;
  // view data doughnt or pie
  @Input() isDoughnut: boolean = false;
  //enable animations
  @Input() animations: boolean = false;
  //the minimum value of the y axis
  @Input() yScaleMin!: number;
  //maximum bubble radius in px
  @Input() maxRadius!: number;
  //minimum bubble radius in px
  @Input() minRadius!: number;
  //bubble-chart the maximum value of the y axis (if the y scale is linear or time)
  @Input() yScaleMax!: number;
  // the minimum value of the x axis (if the x scale is linear or time)
  @Input() xScaleMin!: number;
  //the maximum value of the x axis (if the x scale is linear or time)
  @Input() xScaleMax!: number;
  //Pie-chart show labels
  @Input() showLabels: boolean = false;
  // Gradient Color
  @Input() gradient: boolean = false;
  //Show or hide Legend
  @Input() showLegend: boolean = false;
  // Sets chart label formatting
  @Input() labelFormatting: string = '';
  //Sets Charts mode
  @Input() mode!: ChartsMode;

  /* Internal component variables */
  _below: LegendPosition = LegendPosition.Below;
  //#endregion Declreation
}


// npm i @types/d3-shape@3.1.0