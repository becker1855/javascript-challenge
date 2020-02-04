// from data.js
var tableData = data;

// YOUR CODE HERE!
// select the button
var tbody = d3.select("tbody");
console.log(data);

data.forEach(function(display_datas) {
    console.log(display_datas);
    var row = tbody.append("tr");
    
    Object.entries(display_datas).forEach(function([key,value]) {
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});


var button = d3.select("#filter-btn");
button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputelement = d3.select("#datetime");

    // Get the value property of the input element
    var inputvalue = inputelement.property("value");

    console.log(inputvalue);
    console.log(tableData);

    var filteredData = tableData.filter(date_data => date_data.datetime === inputvalue);

    console.log(filteredData);
    // append
    var tbody = d3.select("tbody");

    tbody.html(" ")

    filteredData.forEach(function(display_data) {
        console.log(display_data);
        var row = tbody.append("tr");
        
        Object.entries(display_data).forEach(function([key,value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});