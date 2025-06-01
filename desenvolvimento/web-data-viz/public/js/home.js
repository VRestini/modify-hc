function exit() {
    var resposta = confirm("Quer continuar?")
    if (resposta)
      limparSessao()
  }
  document.getElementById("id_user").innerHTML = sessionStorage.NAME_USER.toUpperCase();

  const ctxLine = document.getElementById('chartDoughnut');
  new Chart(ctxLine, {
    type: 'doughnut',
    data: {
      labels: ['Certas: 75%', 'Erradas:25%'],
      datasets: [{
        label: 'Desempenho',
        data: [75, 25],

        backgroundColor: [
          '#3a0175',
          'gray'
        ],
        borderColor: [
          'transparent',
          'transparent'
        ],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {

        title: {
          display: true,
          text: 'QUESTÕES',
          color: 'rgba(255,255,255,1)',
          font: {
            family: 'gidole',
            size: 25
          },
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: 'white',
            font: {
              family: 'gidole',
              size: 14
            },
            padding: 20,
  
            usePointStyle: true
          }
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (context) {
              return `${context.label}: ${context.raw}%`;
            }
          }
        }
      },

      animation: {
        animateScale: true,
        animateRotate: true
      },
      cutout: '80%',// espaço interno
    }
  });
  const ctxBar = document.getElementById('chartBar');
  new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['Nivel 1', 'Nivel 2', 'Nivel 3'],
      datasets: [
        {
          label: 'Questões nivel 1: 22',
          data: [22,,],
          borderWidth: 3,
          backgroundColor: '#3a0175 ',
          borderColor: 'transparent '
        },
        {
          label: 'Questões nivel 2: 24',
          data: [,24,],
          borderWidth: 3,
          backgroundColor: '#3a0175 ',
          borderColor: 'transparent '
        },
        {
          label: 'Questões nivel 2: 27',
          data: [,,27],
          borderWidth: 3,
          backgroundColor: '#3a0175 ',
          borderColor: 'transparent '
        }

      ]
    },
    options: {
      responsive: true,
      plugins: {

        title: {
          display: true,
          text: 'DIFICULDADES',
          color: 'rgba(255,255,255,1)',
          font: {
            family: 'gidole',
            size: 25
          },
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: 'white',
            font: {
              family: 'gidole',
              size: 14
            },
            padding: 20,
            display: 'flex',
            
            usePointStyle: true
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }

  });