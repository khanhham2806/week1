const allDevices = [
  {
    name: "Living Room TV",
    type: "TV",
    macAddress: "00:11:22:33:44:55",
    date: "2024-04-01",
    consumption: 2.3, // kWh
  },
  {
    name: "Bedroom Air Conditioner",
    type: "Air Conditioner",
    macAddress: "11:22:33:44:55:66",
    date: "2024-04-01",
    consumption: 8.9, // kWh
  },
  {
    name: "Kitchen Refrigerator",
    type: "Refrigerator",
    macAddress: "22:33:44:55:66:77",
    date: "2024-04-01",
    consumption: 5.2, // kWh
  },
  {
    name: "Mobile Phone",
    type: "Phone",
    macAddress: "33:44:55:66:77:88",
    date: "2024-04-01",
    consumption: 0.3, // kWh
  },
  {
    name: "Office Laptop",
    type: "Laptop",
    macAddress: "44:55:66:77:88:99",
    date: "2024-04-01",
    consumption: 0.8, // kWh
  },
  {
    name: "Smart Watch",
    type: "Wearable",
    macAddress: "55:66:77:88:99:aa",
    date: "2024-04-01",
    consumption: 0.1, // kWh
  },
  {
    name: "Living Room Lamp",
    type: "Lamp",
    macAddress: "66:77:88:99:aa:bb",
    date: "2024-04-01",
    consumption: 0.5, // kWh
  },
  {
    name: "Game Console",
    type: "Console",
    macAddress: "77:88:99:aa:bb:cc",
    date: "2024-04-01",
    consumption: 3.6, // kWh
  },
  {
    name: "Microwave Oven",
    type: "Kitchen Appliance",
    macAddress: "88:99:aa:bb:cc:dd",
    date: "2024-04-01",
    consumption: 2.1, // kWh
  },
  {
    name: "Smart Speaker",
    type: "Speaker",
    macAddress: "99:aa:bb:cc:dd:ee",
    date: "2024-04-01",
    consumption: 0.7, // kWh
  },
  {
    name: "Bedroom Lamp",
    type: "Lamp",
    macAddress: "aa:bb:cc:dd:ee:ff",
    date: "2024-04-01",
    consumption: 0.4, // kWh
  },
  {
    name: "Desktop Computer",
    type: "Computer",
    macAddress: "bb:cc:dd:ee:ff:00",
    date: "2024-04-01",
    consumption: 2.9, // kWh
  },
  {
    name: "Home Router",
    type: "Networking Device",
    macAddress: "ff:00:11:22:33:44",
    date: "2024-04-01",
    consumption: 0.2, // kWh
  },
  {
    name: "Printer",
    type: "Printer",
    macAddress: "cc:dd:ee:ff:00:11",
    date: "2024-04-01",
    consumption: 1.3, // kWh
  },
  {
    name: "Tablet",
    type: "Tablet",
    macAddress: "dd:ee:ff:00:11:22",
    date: "2024-04-01",
    consumption: 0.6, // kWh
  },
  {
    name: "Electric Kettle",
    type: "Kitchen Appliance",
    macAddress: "ee:ff:00:11:22:33",
    date: "2024-04-01",
    consumption: 1.8, // kWh
  },
  {
    name: "Hair Dryer",
    type: "Personal Care Appliance",
    macAddress: "11:22:33:44:55:66",
    date: "2024-04-01",
    consumption: 2.5, // kWh
  },
  {
    name: "Smart Thermostat",
    type: "Thermostat",
    macAddress: "22:33:44:55:66:77",
    date: "2024-04-01",
    consumption: 0.9, // kWh
  },
  {
    name: "Electric Toothbrush Charger",
    type: "Personal Care Appliance",
    macAddress: "33:44:55:66:77:88",
    date: "2024-04-01",
    consumption: 0.2, // kWh
  },
  {
    name: "Smart Watch",
    type: "Wearable",
    macAddress: "55:66:77:88:99:aa",
    date: "2024-04-01",
    consumption: 0.1, // kWh
  },
  {
    name: "Gaming Laptop",
    type: "Laptop",
    macAddress: "44:55:66:77:88:99",
    date: "2024-04-01",
    consumption: 1.5, // kWh
  },
  {
    name: "Living Room TV",
    type: "TV",
    macAddress: "00:11:22:33:44:55",
    date: "2024-04-01",
    consumption: 2.3, // kWh
  },
  {
    name: "Bedroom Air Conditioner",
    type: "Air Conditioner",
    macAddress: "11:22:33:44:55:66",
    date: "2024-04-01",
    consumption: 8.9, // kWh
  },
  {
    name: "Kitchen Refrigerator",
    type: "Refrigerator",
    macAddress: "22:33:44:55:66:77",
    date: "2024-04-01",
    consumption: 5.2, // kWh
  },
  {
    name: "Mobile Phone",
    type: "Phone",
    macAddress: "33:44:55:66:77:88",
    date: "2024-04-01",
    consumption: 0.3, // kWh
  },
  {
    name: "Office Laptop",
    type: "Laptop",
    macAddress: "44:55:66:77:88:99",
    date: "2024-04-01",
    consumption: 0.8, // kWh
  },
  {
    name: "Living Room Lamp",
    type: "Lamp",
    macAddress: "66:77:88:99:aa:bb",
    date: "2024-04-01",
    consumption: 0.5, // kWh
  },
  {
    name: "Game Console",
    type: "Console",
    macAddress: "77:88:99:aa:bb:cc",
    date: "2024-04-01",
    consumption: 3.6, // kWh
  },
  {
    name: "Microwave Oven",
    type: "Kitchen Appliance",
    macAddress: "88:99:aa:bb:cc:dd",
    date: "2024-04-01",
    consumption: 2.1, // kWh
  },
  {
    name: "Smart Speaker",
    type: "Speaker",
    macAddress: "99:aa:bb:cc:dd:ee",
    date: "2024-04-01",
    consumption: 0.7, // kWh
  },
  {
    name: "Bedroom Lamp",
    type: "Lamp",
    macAddress: "aa:bb:cc:dd:ee:ff",
    date: "2024-04-01",
    consumption: 0.4, // kWh
  },
  {
    name: "Printer",
    type: "Printer",
    macAddress: "cc:dd:ee:ff:00:11",
    date: "2024-04-01",
    consumption: 1.3, // kWh
  },
  {
    name: "Tablet",
    type: "Tablet",
    macAddress: "dd:ee:ff:00:11:22",
    date: "2024-04-01",
    consumption: 0.6, // kWh
  },
  {
    name: "Desktop Computer",
    type: "Computer",
    macAddress: "bb:cc:dd:ee:ff:00",
    date: "2024-04-01",
    consumption: 2.9, // kWh
  },

  {
    name: "Electric Kettle",
    type: "Kitchen Appliance",
    macAddress: "ee:ff:00:11:22:33",
    date: "2024-04-01",
    consumption: 1.8, // kWh
  },
  {
    name: "Home Router",
    type: "Networking Device",
    macAddress: "ff:00:11:22:33:44",
    date: "2024-04-01",
    consumption: 0.2, // kWh
  },
  {
    name: "Hair Dryer",
    type: "Personal Care Appliance",
    macAddress: "11:22:33:44:55:66",
    date: "2024-04-01",
    consumption: 2.5, // kWh
  },
  {
    name: "Smart Thermostat",
    type: "Thermostat",
    macAddress: "22:33:44:55:66:77",
    date: "2024-04-01",
    consumption: 0.9, // kWh
  },
  {
    name: "Electric Toothbrush Charger",
    type: "Personal Care Appliance",
    macAddress: "33:44:55:66:77:88",
    date: "2024-04-01",
    consumption: 0.2, // kWh
  },
  {
    name: "Gaming Laptop",
    type: "Laptop",
    macAddress: "44:55:66:77:88:99",
    date: "2024-04-01",
    consumption: 1.5, // kWh
  },
];

const rowsPerPage = 5;

function paginate(arr, rowsPerPage, pageNumber) {
  --pageNumber;
  return arr.slice(pageNumber * rowsPerPage, (pageNumber + 1) * rowsPerPage);
}
function getTotalPages(dataArray) {
  return Math.ceil(dataArray.length / rowsPerPage)
}

function generateTableRows(dataArray) {
  document
    .querySelectorAll("#table-device tbody tr")
    .forEach((e) => e.remove());
  const tbody = document.querySelector("#table-device tbody");

  dataArray.map((rowData) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${rowData.name}</td>
      <td>${rowData.type}</td>
      <td>${rowData.macAddress}</td>
      <td>${rowData.date}</td>
      <td>${rowData.consumption}</td>
      `;
    tbody.appendChild(row);
  });
}

function generatePaginate(totalPages, devices) {
  document
    .querySelectorAll(".btn-page")
    .forEach((e) => e.remove())
  generateTableRows(paginate(devices, rowsPerPage, 1));
  const paginateNode = document.querySelector("#paginate");
  for (i = 1; i <= totalPages; i++) {
    (function (page) {
      var div = document.createElement("div");
      div.innerHTML = i;
      div.classList.add("btn-page");
      div.addEventListener("click", (e) => {
        e.preventDefault();
        const paginateAllDevice = paginate(devices, rowsPerPage, page)
        generateTableRows(paginateAllDevice, page);
      });
      paginateNode.appendChild(div);
    })(i);

  }
}
generatePaginate(getTotalPages(allDevices), allDevices);




document.getElementById('search-device').addEventListener('submit', (e) => {
  e.preventDefault();

  var q = document.getElementById('name-search').value
  const searchDevice = allDevices.filter((device) => device.name.toLowerCase().includes(q.toLowerCase()))
  generatePaginate(getTotalPages(searchDevice), searchDevice);

})