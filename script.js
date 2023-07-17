// DBService.getBreweries().then(breweries => render(breweries))

// function render(breweries){
//     for (const brewery of breweries) {
//         console.log(brewery.name);
//     }
// }

// function previous(){

// }

// function next(){

// }

DBService.getBreweries().then((breweries) => render(breweries));

function render(breweries) {

    console.log(breweries);

const mainDiv = document.getElementById("main-container");

mainDiv.innerHTML = "";

for (let i = 0; i < breweries.length; i++) {
    let brewery = breweries[i];

    const breweryCard = document.createElement("div");

    breweryCard.classList.add("brewery-card");

    const nameCard = document.createElement("nameCard");
    const stateCard = document.createElement("stateSpan");

    const nodeName = document.createTextNode(brewery.name);
    const nodeState = document.createTextNode(brewery.state);

    nameCard.appendChild(nodeName);
    breweryCard.appendChild(nameCard);
    stateCard.appendChild(nodeState);
    breweryCard.appendChild(stateCard);


    
    
    const detailBtn = document.createElement('button')
    const btnText = document.createTextNode('details')

    detailBtn.appendChild(btnText)
    breweryCard.appendChild(detailBtn)

    detailBtn.addEventListener('click', function(){
        getDetails(brewery);
    })
    

    mainDiv.appendChild(breweryCard);
        
    }
}

let pageNumber = 1;


function createElementWithString(elementName,contentString){
    const element = document.createElement(elementName);
    const node = document.createTextNode (contentString);
    element.appendChild(node)
    return element

}

function previous() {
    // alert('ciao')
    if (pageNumber === 1) {
        alert("This is the first page");
        return pageNumber[1];
    }
    pageNumber--;
    DBService.getBreweries(pageNumber).then((brewery) => render(brewery));
}

function next() {
    pageNumber++;
    DBService.getBreweries(pageNumber).then((brewery) => render(brewery));
}



