import React, { Component } from 'react';
import { Line} from 'react-chartjs-2';


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "BTC",
            backgroundColor: "rgba(255, 0, 255, 0.75)",
            data: [4, 5, 1, 10, 32, 2, 12]
          },
          // {
          //   label: "Subscriptions",
          //   backgroundColor: "rgba(0, 255, 0, 0.75)",
          //   data: [14, 15, 21, 0, 12, 4, 2]

          // }
        ]
      }
    }
  }
  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, "rgba(133, 255, 144, 0.85)");
    return gradient;
  }

  getChartData = canvas => {
    const data = this.props.data;
    if (data.datasets) {
      let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 255, 0, 0.75)"];
      data.datasets.forEach((set, i) => {
        set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        set.borderColor = "red";
        set.borderWidth = 2;
      });
    }
    return data;
  }


  render() {
    return (
      <div style={{ position: "absolute", width: 800, height: 750 }}>
        <h3> Stock Chart </h3>

        <Line 
        options={{
          responsive: true
        }}
        data={this.getChartData}

        />
        
        </div>
    )
  }


}




export default Chart;
