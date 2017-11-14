// CI = CURRENT INVENTORY
var kitchenCI=0, electronicsCI=0, clothingCI=0, furnitureCI=0, petsCI=0, outdoorCI=0, autoCI=0, fitnessCI=0;
// OCTS = OCTOBER SALES
var kitchenOCTS=0, electronicsOCTS=0, clothingOCTS=0, furnitureOCTS=0, petsOCTS=0, outdoorOCTS=0, autoOCTS=0, fitnessOCTS=0;
// TS = TOTAL SALES
var nov16TS=0, dec16TS=0, jan17TS=0, feb17TS=0, mar17TS=0, apr17TS=0, may17TS=0, jun17TS=0, jul17TS=0, aug17TS=0, sep17TS=0, oct17TS=0;

function getData(){
  $.get("/api/reports", function(data){
    // GETS DATABASE INFO FOR THE CHARTS
    console.log(data);
  });
}
getData();

//FIRSTCHART
  var ctx = $("#myChart");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [{
        label: '',
        data: [kitchenCI, electronicsCI, clothingCI, furnitureCI, petsCI, outdoorCI, autoCI, fitnessCI],
        backgroundColor: [
          'rgba(255, 64, 0, 0.5)',
          'rgba(255, 128, 0, 0.5)',
          'rgba(255, 191, 0, 0.5)',
          'rgba(255, 255, 0, 0.5)',
          'rgba(191, 255, 0, 0.5)',
          'rgba(0, 255, 128, 0.5)',
          'rgba(0, 255, 191, 0.5)',
          'rgba(0, 255, 255, 0.5)'
        ],
        borderColor: [
          'rgba(255, 64, 0, 0.6)',
          'rgba(255, 128, 0, 0.6)',
          'rgba(255, 191, 0, 0.6)',
          'rgba(255, 255, 0, 0.6)',
          'rgba(191, 255, 0, 0.6)',
          'rgba(0, 255, 128, 0.6)',
          'rgba(0, 255, 191, 0.6)',
          'rgba(0, 255, 255, 0.6)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

//SECONDCHART
  var ctx = $("#myChart2");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [{
        label: '',
        data: [kitchenOCTS, electronicsOCTS, clothingOCTS, furnitureOCTS, petsOCTS, outdoorOCTS, autoOCTS, fitnessOCTS],
        backgroundColor: [
          'rgba(255, 64, 0, 0.5)',
          'rgba(255, 128, 0, 0.5)',
          'rgba(255, 191, 0, 0.5)',
          'rgba(255, 255, 0, 0.5)',
          'rgba(191, 255, 0, 0.5)',
          'rgba(0, 255, 128, 0.5)',
          'rgba(0, 255, 191, 0.5)',
          'rgba(0, 255, 255, 0.5)'
        ],
        borderColor: [
          'rgba(255, 64, 0, 0.6)',
          'rgba(255, 128, 0, 0.6)',
          'rgba(255, 191, 0, 0.6)',
          'rgba(255, 255, 0, 0.6)',
          'rgba(191, 255, 0, 0.6)',
          'rgba(0, 255, 128, 0.6)',
          'rgba(0, 255, 191, 0.6)',
          'rgba(0, 255, 255, 0.6)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

//THIRD CHART
  var ctx = document.getElementById("myChart3");
  var myChart3 = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [
        {
          label: "",
          data: [nov16TS, dec16TS, jan17TS, feb17TS, mar17TS, apr17TS, may17TS, jun17TS, jul17TS, aug17TS, sep17TS, oct17TS],
          backgroundColor: [
            'rgba(255, 64, 0, 0.5)'
          ],
          borderColor: [
            'rgba(255, 64, 0, 0.6)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });