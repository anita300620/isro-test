let centres = [];

function loadData() {
    fetch('https://isro.vercel.app/api/centres')
        .then(response => response.json())
        .then(res => {
            centres = res.centres
            renderTable(res.centres)
        })
}

function renderTable(data) {
    console.log("renderTable called");
    let table = document.getElementById('tableDetails');
    table.innerText = ""
    for (let obj of data) {
        let tableRow = document.createElement('tr');
        tableRow.innerHTML =
            `<td>
             <div>CENTRE</div>
            <div>${obj.name}</div>
        </td>
        <td>
            <div>CITY</div>
            <div>${obj.Place}</div>
        </td>
        <td>
            <div>STATE</div>
            <div>${obj.State}</div>
        </td>`

        table.appendChild(tableRow);
    }
}

function clickHandler(event) {
    var buttonValue = event.target.innerHTML;
    if (buttonValue == "CENTER") {
        buttonValue = "name";
    } else if (buttonValue == "CITY") {
        buttonValue = "Place";
    } else {
        buttonValue = "State";
    }
    let cityName = document.getElementById('search-bar').value;
    const result = centres.filter(centre => centre[buttonValue].toLowerCase().includes(cityName.toLowerCase()))
    renderTable(result);
}

// function clicking(){
//     let stateName = document.getElementById('search-bar').value;
//     const result2 = centres.filter( state => state.State.toLowerCase().includes(stateName.toLowerCase()))
//     renderTable(result2);
// }

document.getElementById('city').addEventListener('click', clickHandler);
document.getElementById('state').addEventListener('click', clickHandler);
document.getElementById('centre').addEventListener('click', clickHandler);

window.onload = loadData