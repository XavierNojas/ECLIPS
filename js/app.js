showRecords();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {
  let records = localStorage.getItem("records");
  if (records == null) {
    recordsObj = [];
  } else {
    recordsObj = JSON.parse(records);
  }
    let sname = document.getElementById('sname').value;
    let studentid = document.getElementById('studentid').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let address = document.getElementById('address').value;
    let parentsname = document.getElementById('parentsname').value;
    let parentscontact = document.getElementById('parentscontact').value;
    let gmd = document.getElementById('gmd').value;

    recordsObj.push([sname, studentid, height, weight, address, parentsname, parentscontact, gmd]);
  localStorage.setItem("records", JSON.stringify(recordsObj));
  alert("New record added.");
  showRecords();
});

function showRecords() {
  let records = localStorage.getItem("records");
  if (records == null) {
    recordsObj = [];
  } else {
    recordsObj = JSON.parse(records);
  }

  let str = "";
  recordsObj.forEach(function (element, index) {
    str += 
       `<div class="searchdata">
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
        <td>${element[3]}</td>
        <td>${element[4]}</td>
        <td>${element[5]}</td>
        <td>${element[6]}</td>
        <td>${element[7]}</td>
        <td><button type="submit" class="btn btn-primary btn-sm " onclick="updateRecord(${index})" >Update</button></td>
        <td><button type="submit" class="btn btn-primary btn-sm " onclick="deleteRecord(${index})" >Delete</button></td>
        </tr>
        </div>`
  });
  let noteElm = document.getElementById("records");
  if (recordsObj.length!=null) {
    noteElm.innerHTML = str;
  }else{
    noteElm.innerHTML = 'No record present, Please add record....'; 
  }
}
//fuction to delete a record 
function deleteRecord(index) {
  console.log('I am deleting a record', index);
  let records = localStorage.getItem("records");
  if (records == null) {
    recordsObj = [];
  } else {
    recordsObj = JSON.parse(records);
  }
  recordsObj.splice(index,1);
  localStorage.setItem("records", JSON.stringify(recordsObj));
  alert("Selected record deleted.");
  showRecords();
}
//fuction to update a record
function updateRecord(index) {
  console.log('I am updating a record', index);
  let records = localStorage.getItem("records");
  if (records == null) {
    recordsObj = [];
  } else {
    recordsObj = JSON.parse(records);
  }
    recordsObj.splice(index,1);

    let sname = document.getElementById('sname').value;
    let studentid = document.getElementById('studentid').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let address = document.getElementById('address').value;
    let parentsname = document.getElementById('parentsname').value;
    let parentscontact = document.getElementById('parentscontact').value;
    let gmd = document.getElementById('gmd').value;

    recordsObj.push([sname, studentid, height, weight, address, parentsname, parentscontact, gmd]);


  let str = "";
  recordsObj.forEach(function (element, index) {
    str += 
       `<div class="searchdata">
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
        <td>${element[3]}</td>
        <td>${element[4]}</td>
        <td>${element[5]}</td>
        <td>${element[6]}</td>
        <td>${element[7]}</td>
        <td><button type="submit" class="btn btn-primary btn-sm " onclick="updateRecord(${index})" >Update</button></td>
        <td><button type="submit" class="btn btn-primary btn-sm " onclick="deleteRecord(${index})" >Delete</button></td>
        </tr>
        <div>`
  });

  localStorage.setItem("records", JSON.stringify(recordsObj));
  alert("Selected record updated.\nNOTE: Medical Record Numbers updated.");
  showRecords();
}
//function to filter in search bar
let search = document.getElementById("searchRecord");
search.addEventListener('input', function() {
    let inputVal = search.value.toLowerCase();
  alert("Seach filter is coming soon.");
});