import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
    ArcElement,
  } from 'chart.js';
  import { Bar, Doughnut, Pie } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );
  const months= ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  interface BarChartProps {
    horizontal?:boolean;
    data_1:number[];
    data_2:number[];
    title_1:string;
    title_2:string;
    bgColor_1:string;
    bgColor_2:string;
    labels?:string[];
  }
  
  

export const BarChart = ({
  data_1=[],
  data_2=[],
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  horizontal = false,
  labels=months


}: BarChartProps) =>{
   const options:ChartOptions<"bar">= {
    responsive: true,
    indexAxis:horizontal ? "y":"x",
    plugins: {
      legend: {
          display:false,
      },
      title: {
        display: false,
        // text: 'Chart.js Bar Chart',
      },
    },
    scales:{
      y:{
        beginAtZero:true,
        grid:{
          display:false,
        },
      },
    
    x:{
      
      grid:{
        display:false,
      }
    }
  }
  };
  
  
  
   const data:ChartData<"bar",number[], string>= {
    labels,
    datasets: [
      {
        label: title_1,
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data:data_1,
        
        backgroundColor: bgColor_1,
        barThickness:"flex",
        barPercentage:1,
        categoryPercentage:0.4
      },
      {
        label: title_2,
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data:data_2,
        backgroundColor: bgColor_2,
        barThickness:"flex",
        barPercentage:1,
        categoryPercentage:0.4
      },
    ],
  };
    return <Bar width={horizontal?"200%":""} options={options} data={data}/>
}
interface DoughnutChartProps {
  
  labels:string[];
    data:number[];
    backgroundColor:string[];
   cutout?:number |string;
   legends?:boolean;
   offset?:number[];
}
export const DoughnutChart = ({
  labels,
  data,
  backgroundColor,
  cutout,
  legends = true,
  offset
}: DoughnutChartProps) =>{
  const doughnutData: ChartData<"doughnut",number[],string> ={
    labels,
   datasets:[{
    data,
    backgroundColor,
    borderWidth:0,
    offset

   }]

  };
  const doughnutOptions:ChartOptions<"doughnut">={
    responsive:true,
    plugins:{
      legend:{
        display:legends,
        position:"bottom",
        labels:{
          padding:40
        },


      },
    },
    cutout,
  };
  return <Doughnut data={doughnutData} options={doughnutOptions}/>

}

interface PieChartProps {
  
  labels:string[];
    data:number[];
    backgroundColor:string[];
   offset?:number[];
}
  export const PieChart = ({
    labels,
    data,
    backgroundColor,
    offset
  }: PieChartProps) =>{
    const pieChartData: ChartData<"pie",number[],string> ={
      labels,
     datasets:[{
      data,
      backgroundColor,
      borderWidth:1,
      offset
  
     }]
  
    };
    const pieChartOptions:ChartOptions<"pie">={
      responsive:true,
      plugins:{
        legend:{
          display:false,
        },
      },
      
    };
    return <Pie data={pieChartData} options={pieChartOptions}/>

}

  