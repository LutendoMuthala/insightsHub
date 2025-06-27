window.onload = function () {
  const user = localStorage.getItem("user") || "User";
  document.getElementById("user-name").innerText = user;
  updateScenario(); // Load default scenario
};

function updateScenario() {
  const selected = document.getElementById("scenario").value;
  const data = scenarios[selected];

  document.getElementById("revenue").innerText = data.revenue.toLocaleString();
  document.getElementById("growth").innerText = data.growth + "%";
  document.getElementById("satisfaction").innerText = data.satisfaction + "%";
}
let revenueChart, customerChart;

window.onload = function () {
  const user = localStorage.getItem("user") || "User";
  document.getElementById("user-name").innerText = user;
  updateScenario();
  drawRevenueChart();
  drawCustomerChart();
};

function drawRevenueChart() {
  const ctx = document.getElementById('revenueChart').getContext('2d');
  revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: 'Monthly Revenue (R)',
        data: [120000, 130000, 140000, 150000, 160000, 170000],
        borderColor: '#0a3d62',
        backgroundColor: 'rgba(10, 61, 98, 0.1)',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true }
      }
    }
  });
}

function drawCustomerChart() {
  const ctx = document.getElementById('customerChart').getContext('2d');
  customerChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Loyal Customers', 'New Customers', 'At-Risk Customers'],
      datasets: [{
        label: 'Customer Segments',
        data: [50, 30, 20],
        backgroundColor: ['#0a3d62', '#3c6382', '#82ccdd']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}
