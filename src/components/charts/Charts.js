import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// les échelles et autres éléments nécessaires
ChartJS.register(
  CategoryScale,  // l'échelle 'category'
  LinearScale,    // l'échelle 'linear'
  BarElement,     // élément pour les graphiques à barres
  Title,          // le titre du graphique
  Tooltip,        // l'outil de tooltip
  Legend          // la légende
);





// components/Charts.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const Charts = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.saison),
        datasets: [
            {
                label: 'Prix par saison',
                data: data.map(item => item.prix),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return (
        <div>
            <h3>Graphiques</h3>
            <Bar data={chartData} />
        </div>
    );
};

export default Charts;