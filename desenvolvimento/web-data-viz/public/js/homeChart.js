function exit() {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });


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
  document.getElementById("id_user").innerHTML = sessionStorage.NAME_USER.toUpperCase();
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