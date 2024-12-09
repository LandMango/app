import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import '../CSS/GameStatsChart.css'; 

ChartJS.register(CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const GameStatsChart = ({ games }) => {
  if (!games || games.length === 0) {
    return <div>No game data available</div>;
  }

  
  const aggregateStats = games.reduce(
    (acc, game) => {
      acc.smashfg += parseFloat(game.smashfg) || 0;
      acc.smashattempt += parseFloat(game.smashattempt )|| 0;
      acc.dropfg += parseFloat(game.dropfg) || 0;
      acc.dropattempt += parseFloat(game.dropattempt) || 0;
      acc.clearfg += parseFloat(game.clearfg )|| 0;
      acc.clearattempt += parseFloat(game.clearattempt )|| 0;
      return acc;
    },
    { smashfg: 0, smashattempt: 0, dropfg: 0, dropattempt: 0, clearfg: 0, clearattempt: 0 }
  );

  const data = {
    labels: ['Smash FG',  'Drop FG',  'Clear FG'],
    datasets: [
      {
        label: 'Aggregated Game Stats',
        data: [
          aggregateStats.smashfg,

          aggregateStats.dropfg,

          aggregateStats.clearfg,
          
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        
          'rgba(255, 206, 86, 0.2)',
      
          'rgba(153, 102, 255, 0.2)',
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          
          'rgba(255, 206, 86, 1)',
          
          'rgba(153, 102, 255, 1)',
          
        ],
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: [ 'Smash Attempt',  'Drop Attempt', 'Clear Attempt'],
    datasets: [
      {
        label: 'Aggregated Game Stats Shot Attempts',
        data: [
  
          aggregateStats.smashattempt,
       
          aggregateStats.dropattempt,

          aggregateStats.clearattempt,
        ],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          
            'rgba(255, 206, 86, 0.2)',
        
            'rgba(153, 102, 255, 0.2)',
           
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            
            'rgba(255, 206, 86, 1)',
            
            'rgba(153, 102, 255, 1)',
            
          ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Aggregated Game Stats Distribution',
      },
    },
  };

  return (
    <div className="chartsContainer"> 
    <div className="chartContainer"> 
        <h3>Field Goals (FG)</h3> 
        <Pie data={data} options={options} /> 
        </div> 
        <div className="chartContainer"> 
        <h3>Attempts</h3> 
        <Pie data={data2} options={options} /> 
        </div> 
    </div>
  );
};

export default GameStatsChart;
