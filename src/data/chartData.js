export const passageTimeData = {
    labels: ['Entrée', 'Contrôle', 'Dépôt', 'Réparation', 'Export', 'Sortie'],
    datasets: [{
      label: 'Temps Moyen (minutes)',
      data: [15, 22, 35, 65, 30, 12],
      backgroundColor: '#0061a8'
    }]
  };
  
  export const flowDistributionData = {
    labels: ['Import', 'Export', 'Transit', 'Réparation'],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: [
          '#4a8af4',
          '#5cb85c',
          '#f4a93c',
          '#d9534f'
        ],
        borderWidth: 1,
      },
    ],
  };
  