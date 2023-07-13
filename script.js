DBService.getBreweries().then(breweries => render(breweries))

function render(breweries){
    for (const brewery of breweries) {
        console.log(brewery.name);
    }
}

function previous(){

}

function next(){
    
}