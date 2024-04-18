
// //Get data from local storage

const allDevices = JSON.parse(localStorage.getItem("allDevices")) || [];
const barColors = JSON.parse(localStorage.getItem("barColors")) || [];


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let deviceColors = allDevices.map(device => getRandomColor());

const myChart = new Chart(document.getElementById('donut-chart'), {
  type: 'pie',
  data: {
    labels: allDevices.map(device => device.name),
    datasets: [{
      backgroundColor: deviceColors,
      data: allDevices.map(device => device.consumption),
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Power Consumption",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  }
});

// Function to update table and chart
function updateTableAndChart() {
  document
    .querySelectorAll("#table-device tbody tr")
    .forEach((e) => e.remove());
  const tbody = document.querySelector("#table-device tbody");
  allDevices.map((rowData, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${rowData.name}</td>
      <td>${rowData.mac}</td>
      <td>${rowData.ip}</td>
      <td>${rowData.date}</td>
      <td>${rowData.consumption}</td>
      <td>
        <span class="actions-device edit-device">Edit</span> |
        <span class="actions-device delete-device" data-index="${index}"> Delete</span>
      </td>
  `;
    tbody.appendChild(row);
  });

  document
    .querySelectorAll("#table-device tfoot tr")
    .forEach((e) => e.remove());
  const total = allDevices.reduce(
    (total, rowData) => total + rowData.consumption,
    0
  );
  const tfoot = document.querySelector("#table-device tfoot");
  const rowTotal = document.createElement("tr");
  rowTotal.innerHTML = `
             <tr>
            <td>Devices</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${total}</td>
            <td></td>
            </tr>
        `;
  tfoot.appendChild(rowTotal);

  myChart.data.labels = allDevices.map(device => device.name);
  myChart.data.datasets[0].data = allDevices.map(device => device.consumption);
  myChart.data.datasets[0].backgroundColor = deviceColors;
  myChart.update();

  [...document.querySelectorAll(".delete-device")].map((deleteDevice, index) => {
    deleteDevice.addEventListener("click", function () {
      allDevices.splice(index, 1);
      localStorage.setItem('allDevices', JSON.stringify(allDevices))
      updateTableAndChart();
    });
  });

}

// Form submission event
const deviceForm = document.getElementById('add-device');
deviceForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const mac = document.getElementById('mac-address').value;
  const ip = document.getElementById('ip-address').value;
  const createdDate = new Date();
  const consumption = parseInt(document.getElementById('consumption').value);
  if ((!name || !consumption || !ip || !mac) || consumption <= 0) {
    document.querySelector(".error-submit").innerHTML =
      "Vui lòng nhập đầy đủ thông tin!";
    setTimeout(() => {
      document.querySelector(".error-submit").innerHTML = "";
    }, 1500);
  }
  else {
    // Check if device name already exists
    const existingDeviceIndex = allDevices.findIndex(device => device.name === name);
    if (existingDeviceIndex !== -1) {
      // Update consumption if device exists
      allDevices[existingDeviceIndex].consumption += consumption;
    } else {
      // Add new device
      allDevices.push({ name: name, mac: mac, ip: ip, date: createdDate.toISOString().split('T')[0], consumption: consumption });
      deviceColors.push(getRandomColor())
    }
    document.getElementById('name').value = ''
    document.getElementById('mac-address').value = ''
    document.getElementById('ip-address').value = ''
    document.getElementById('consumption').value = ''
    localStorage.setItem('allDevices', JSON.stringify(allDevices))
    // Update table and chart
    updateTableAndChart();
  }


});
// Call table and chart setup
updateTableAndChart();


