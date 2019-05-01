// Assign the data from `data.js` to a descriptive variable
const ufoData = data;
const columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
const tbody = d3.select("tbody")


/**************************************** initial page with unfiltered data **************** */
// fillTable function to populate the data table
const fillTable = (dataInput) => {
    dataInput.forEach(ufo => {
        let row = tbody.append("tr");
        columns.forEach(column => {
            row.append("td").text(ufo[column])
        });        
    });
}

// initial page load - original data set (unfiltered)
fillTable(ufoData)

/****** populate search boxes with value extracted from data set ******************** *******/
let 
    ufoDays = [],
    ufoCities = [],
    ufoCountries = [],
    ufoStates = [];

// extract dates from data set
for (let i=0; i<ufoData.length; i++){
    ufoDays.push(ufoData[i].datetime);
    ufoCities.push(ufoData[i].city);
    ufoCountries.push(ufoData[i].country);
    ufoStates.push(ufoData[i].state);
}
// unique function filter out duplicate dates in array, sort array
ufoDays = ufoDays.reverse().filter(function (e, i, arr) {
    return arr.indexOf(e, i+1) === -1;
}).reverse();


ufoCities = ufoCities.reverse().filter(function (e, i, arr) {
    return arr.indexOf(e, i+1) === -1;
}).reverse();

ufoCountries = ufoCountries.reverse().filter(function (e, i, arr) {
    return arr.indexOf(e, i+1) === -1;
}).reverse();

ufoStates = ufoStates.reverse().filter(function (e, i, arr) {
    return arr.indexOf(e, i+1) === -1;
}).reverse();

// check array result
console.log(ufoDays);
console.log(ufoCities);
console.log(ufoCountries);
console.log(ufoStates);

/****** drop down menu for unique available dates ******************************** */
const dropDownDate = d3.select("#d3-dropdown-date")

let optionListDate = document.getElementById('d3-dropdown-date').options;

ufoDays.forEach(option => {
    optionListDate.add(
        new Option(option)
    )
});

dropDownDate.on("change", function() {
    tbody.html("");
    const selection = dropDownDate.node().value;
    console.log(selection);
    const filterData = ufoData.filter(ufo => {
        return ufo.datetime === selection;
    })
    console.log(filterData);

    fillTable(filterData)
})

/********drop down menu for unqiue cities *********** ***************************** */
const dropDownCity = d3.select("#d3-dropdown-city")

let optionListCity = document.getElementById('d3-dropdown-city').options;

ufoCities.forEach(option => {
    optionListCity.add(
        new Option(option)
    )
});

dropDownCity.on("change", function() {
    tbody.html("");
    const selection = dropDownCity.node().value;
    console.log(selection);
    const filterData = ufoData.filter(ufo => {
        return ufo.city === selection;
    })
    console.log(filterData);

    fillTable(filterData)
})

/***********drop down menu for unique countries ************************************ */
const dropDownCountry = d3.select("#d3-dropdown-country")

let optionListCountry = document.getElementById('d3-dropdown-country').options;

ufoCountries.forEach(option => {
    optionListCountry.add(
        new Option(option)
    )
});

dropDownCountry.on("change", function() {
    tbody.html("");
    const selection = dropDownCountry.node().value;
    console.log(selection);
    const filterData = ufoData.filter(ufo => {
        return ufo.country === selection;
    })
    console.log(filterData);

    fillTable(filterData)
})

/***********drop down menu for unique states *************************************** */
const dropDownState = d3.select("#d3-dropdown-state")

let optionListState = document.getElementById('d3-dropdown-state').options;

ufoStates.forEach(option => {
    optionListState.add(
        new Option(option)
    )
});

dropDownState.on("change", function() {
    tbody.html("");
    const selection = dropDownState.node().value;
    console.log(selection);
    const filterData = ufoData.filter(ufo => {
        return ufo.state === selection;
    })
    console.log(filterData);

    fillTable(filterData)
})


/********************************************************************************* */
/* this is what I would like to do with this code
/* step 1 - load page and load all the data set - need to have pagination - done
/* step 2 - add filter box, drop down list pulled from available date
/*    2.1 - use filtered data to extract a unique list of dates - done
/*    2.2 - populate dropdown list with unique city list - done
/*    2.3 - modify filter button to reset button - done
/* step 3 - add reset button to reload homepage with original table - done
/* step 4 - add css styles and new html layout - this is optional 
/***********************************************************************************/
