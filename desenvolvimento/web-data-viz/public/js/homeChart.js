
function startCharts() {
  const doughnutCanvas = document.getElementById('chartDoughnut');
  const barCanvas = document.getElementById('chartBar');
  const condition = sessionStorage.RIGTH_ALERNATIVES && sessionStorage.WRONG_ALERNATIVES &&
                 sessionStorage.DF1 && sessionStorage.DF2 && sessionStorage.DF3;
  if (doughnutCanvas && barCanvas && condition ) {
    doughnut();
    bar();
  } else {
    setTimeout(startCharts, 100);
  }
}
window.addEventListener('DOMContentLoaded', startCharts);
function exit() {
    

    Swal.fire({
        title: "Deseja deslogar?",
        background: '#1a1a1a', 
        color: '#ffffff',
        showCancelButton: true,
        cancelButtonColor: "#ff0000",
        confirmButtonText: "Sim, desejo deslogar.",
        cancelButtonText: "Cancelar",
        confirmButtonColor: '#3a0175',
        timer: 5000
    }).then((result) => {
        if(result.isConfirmed){
            limparSessao()
        }
       
    })
      
  }
  document.getElementById("name_user").innerHTML = sessionStorage.NAME_USER.toUpperCase();
  function doughnut(){
    
    var rigth_answer = parseInt(sessionStorage.RIGTH_ALERNATIVES) 
    var wrong_answer = parseInt(sessionStorage.WRONG_ALERNATIVES)
    
    var total = rigth_answer + wrong_answer
    var right_percentage = (rigth_answer/total)*100
    var wrong_percentage = (wrong_answer/total)*100
    const ctxLine = document.getElementById('chartDoughnut');
    new Chart(ctxLine, {
      type: 'doughnut',
      data: {
        labels: [`Certas: ${right_percentage.toFixed(0)}%`, `Erradas:${wrong_percentage.toFixed(0)}%`],
        datasets: [{
          label: 'Desempenho',
          data: [right_percentage, wrong_percentage],
  
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
    })
  }
  function bar(){
  var df1 = sessionStorage.DF1
  var df2 = sessionStorage.DF2
  var df3 = sessionStorage.DF3
  const ctxBar = document.getElementById('chartBar');
  new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['Nivel 1', 'Nivel 2', 'Nivel 3'],
      datasets: [
        {
          label: `Questões nivel 1: ${df1}`,
          data: [df1,,],
          borderWidth: 3,
          backgroundColor: '#3a0175 ',
          borderColor: 'transparent '
        },
        {
          label: `Questões nivel 2: ${df2}`,
          data: [,df2,],
          borderWidth: 3,
          backgroundColor: '#3a0175 ',
          borderColor: 'transparent '
        },
        {
          label: `Questões nivel 2: ${df3}`,
          data: [,,df3],
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

  })
}