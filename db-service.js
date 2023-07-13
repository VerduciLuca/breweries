class DBService{

    static getBreweries (){
        const url = 'https://api.openbrewerydb.org/v1/breweries?per_page=10&page=' + pageNumber

        return fetch(url)
        .then(resp=> resp.json())
    }

}