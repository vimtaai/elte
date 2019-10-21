const apiUrl = "http://openlibrary.org/search.json?q=";

export async function searchDatabase(query/* string */) {
    const requestUrl = apiUrl + query.replace(" ", "+");

    // const response = fetch(requestUrl);
    // console.log(response);

    // response
    //     .then(function (value) {
    //         return value.text();
    //     }).then(function (data) {
    //         console.log(data);
    //     });

    const value = await fetch(requestUrl);
    const data = await value.json();
    
    return data;
}