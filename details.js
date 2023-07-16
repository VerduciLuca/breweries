function getDetails(brewery){
    window.location.href='details.html';
    console.log(brewery);
}

function getBack() {
    window.location.href='index.html';
}

function render2(brewery){


    const detailDiv = document.getElementById("details-container");

    detailDiv.innerHTML = "";


    const brewDetails = document.createElement("div");

    brewDetails.classList.add("brewery-card2");

    const nameCard = document.createElement("nameCard");
    const stateCard = document.createElement("stateSpan");

    const nodeName = document.createTextNode(brewery.name);
    const nodeState = document.createTextNode(brewery.state);

    nameCard.appendChild(nodeName);
    stateCard.appendChild(nodeState);

    brewDetails.appendChild(nameCard);
    brewDetails.appendChild(stateCard);


    detailDiv.appendChild(brewDetails);

    }


render2(brewery)