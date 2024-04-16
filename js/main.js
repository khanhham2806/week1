var allDevices = [
  { name: "TV", mac: "192.168.110.1", date: "16-4-2024", consumption: 20 },
  { name: "Laptop", mac: "192.168.110.1", date: "16-4-2024", consumption: 10 },
  { name: "Phone", mac: "192.168.110.1", date: "16-4-2024", consumption: 5 },
  {
    name: "Air Conditioner",
    mac: "192.168.110.1",
    date: "16-4-2024",
    consumption: 30,
  },
  {
    name: "Refrigerator",
    mac: "192.168.110.1",
    date: "16-4-2024",
    consumption: 25,
  },
];
var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

new Chart(document.getElementById("donut-chart"), {
  type: "doughnut",
  data: {
    labels: allDevices.map((device) => device.name),
    datasets: [
      {
        backgroundColor: barColors,
        data: allDevices.map((device) => device.consumption),
      },
    ],
  },
  options: {
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
  },
});

// Function to generate table rows from array data
function generateTableRows(dataArray) {
  const tbody = document.querySelector("#table-device tbody");
  dataArray.map((rowData) => {
    // console.log(rowData)
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${rowData.name}</td>
    <td>${rowData.mac}</td>
    <td>${rowData.mac}</td>
    <td>${rowData.date}</td>
    <td>${rowData.consumption}</td>
`;
    tbody.appendChild(row);
  });
  const total = dataArray.reduce(
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
  </tr>
  `;
  tfoot.appendChild(rowTotal);
}

// Call the function to generate table rows
generateTableRows(allDevices);

document.getElementById("add-device").addEventListener("submit", (e) => {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var consumption = document.getElementById("consumption").value;
  if (name && consumption) {
    allDevices.push({ name, consumption });
    console.log(allDevices);
  } else {
    console.log("no");
  }
});


document.getElementById('btn-humberger').addEventListener('click', function () {
  console.log(document.getElementById('mobile-menu'))
  document.getElementById('mobile-menu').classList.add('active')
})

document.getElementById('btn-close').addEventListener('click', function () {
  console.log(document.getElementById('mobile-menu'))
  document.getElementById('mobile-menu').classList.remove('active')
})