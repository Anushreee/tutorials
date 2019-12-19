import { Chart } from "@scuf/charts";
import React from "react";
import "./KPIDonut.scss";
import { IKPIDonutProps } from "./IKPIDonutProps";

export default class KPIDonut extends React.Component<IKPIDonutProps> {

  getChartData(): Array<[string,number]> {
    const {data} = this.props;
    const chartData = [];
    if(Object.keys(data)){
      Object.keys(data).forEach(key=>{
        const value = [key, this.props.data[key]]
        chartData.push(value);
      })
    }
    return chartData;
  }

  render() {
    const {
          size,
          innerSize,
          colors,
          borderWidth,
          legendEnabled,
          centerBlockData
        } = this.props;
        
      const customText = (
        <React.Fragment>
          <div className="center">
            {centerBlockData.prefix && <span className="center__prefix">{centerBlockData.prefix}</span>}
            {centerBlockData.value && <span className="center__value"> {centerBlockData.value}</span>}
            {centerBlockData.suffix && <span className="center__suffix">{centerBlockData.suffix}</span>}
            {centerBlockData.units && <div> <span className="center__units">{centerBlockData.units}</span> </div>}
            {centerBlockData.text && <div><span className="center__text">{centerBlockData.text}</span></div>}
          </div>
           
        </React.Fragment>
      );

      return (
        <Chart
          colors = {colors}
        >
          <Chart.Donut
            data = {this.getChartData()}
            size = {size}
            borderWidth = {borderWidth}
            innerSize = {innerSize}
          >
            <Chart.CenterBlock>
              {customText}
            </Chart.CenterBlock>
          </Chart.Donut>
          <Chart.Legend enabled = {legendEnabled} />
        </Chart>
      );
  }
}
