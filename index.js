let url = "https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/";
let from_date = document.querySelector("#from_date");
let to_date = document.querySelector("#to_date");
let dropdown = document.querySelector("#dropdown-item");
let details = document.querySelector(".details_table");

let countries = [
  "ABW",
  "AFG",
  "AGO",
  "ALB",
  "AND",
  "ARE",
  "ARG",
  "AUS",
  "AUT",
  "AZE",
  "BEL",
  "BEN",
  "BFA",
  "BGD",
  "BGR",
  "BHS",
  "BIH",
  "BLR",
  "BMU",
  "BRN",
  "BTN",
  "BWA",
  "CAF",
  "CHE",
  "CHL",
  "CHN",
  "CMR",
  "COD",
  "COG",
  "COL",
  "CPV",
  "CRI",
  "CUB",
  "CYP",
  "CZE",
  "DEU",
  "DJI",
  "DMA",
  "DNK",
  "DOM",
  "DZA",
  "EGY",
  "ESP",
  "EST",
  "ETH",
  "FIN",
  "FJI",
  "FRA",
  "FRO",
  "GAB",
  "GEO",
  "GHA",
  "GIN",
  "GMB",
  "GRC",
  "GRL",
  "GTM",
  "GUM",
  "GUY",
  "HKG",
  "HRV",
  "HTI",
  "HUN",
  "IND",
  "IRN",
  "ISL",
  "ISR",
  "ITA",
  "JAM",
  "JPN",
  "KAZ",
  "KEN",
  "KGZ",
  "KHM",
  "KIR",
  "KOR",
  "KWT",
  "LAO",
  "LBN",
  "LBR",
  "LKA",
  "LSO",
  "LTU",
  "LUX",
  "LVA",
  "MAC",
  "MAR",
  "MCO",
  "MDA",
  "MDG",
  "MEX",
  "MLI",
  "MLT",
  "MNG",
  "MRT",
  "MUS",
  "MYS",
  "NAM",
  "NLD",
  "NOR",
  "NPL",
  "OMN",
  "PAK",
  "PNG",
  "PRT",
  "PRY",
  "PSE",
  "RKS",
  "RWA",
  "SDN",
  "SEN",
  "SGP",
  "SLB",
  "SLE",
  "SLV",
  "SRB",
  "SVK",
  "TGO",
  "TJK",
  "TLS",
  "TON",
  "UGA",
  "URY",
  "USA",
  "UZB",
  "VEN",
  "VIR",
  "VNM",
  "VUT",
  "YEM",
  "ZAF",
  "ZMB",
  "ZWE",
];

function loadCountries() {
  for (i = 0; i < countries.length; i++) {
    var dropdown_item = document.createElement("option");
    dropdown_item.innerText = countries[i];
    dropdown.append(dropdown_item);
  }
}

let detail = document.createElement("tr");
async function getData() {
  let res = await fetch(url + `${from_date.value}/${to_date.value}`, {
    method: "GET",
    body: JSON.stringify(),
    headers: {
      "Content-type": "application/json",
    },
  });
  var result = await res.json();
  // console.log(country);
  // console.log(result.data["2021-03-01"].country);
  if (from_date.value === to_date.value) {
    detail.innerHTML = `<tr>
    <td>
    ${eval(`result.data["${to_date.value}"].${dropdown.value}.confirmed`)}</td>
    <td>
    ${eval(`result.data["${to_date.value}"].${dropdown.value}.deaths`)}</td>
    <td>
    ${eval(`result.data["${to_date.value}"].${dropdown.value}.stringency`)}</td>
    </tr>`;
    details.append(detail);
  } else {
    // console.log(dropdown.value, to_date.value);
    // console.log(eval(`result.data["${to_date.value}"].${dropdown.value}`));
    detail.innerHTML = `<tr>
    <td>
    ${eval(`result.data["${to_date.value}"].${dropdown.value}.confirmed`)}</td>
    <td>
    ${eval(`result.data["${to_date.value}"].${dropdown.value}.deaths`)}</td>
    <td>
    ${eval(`result.data["${to_date.value}"].${dropdown.value}.stringency`)}</td>
    </tr>`;
    details.append(detail);
  }
}

function today() {
  var today = new Date();
  var day = 1;
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  console.log(day, month, year);
  from_date.setAttribute("value", `${year}-${month}-${day}`);
  to_date.setAttribute("value", `${year}-${month}-${day}`);
}

function onLoad() {
  loadCountries();
  today();
}
