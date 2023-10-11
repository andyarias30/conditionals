let firstName = 'Andy'

console.log((firstName) ? // if firstName is truthy
firstName :  // console log firstName
'Who are you?' // otherwise ask "who are you"
)

// USING a templated literal 
console.log(`Hello${
    (firstName) ?  // if firs name is turthy 
    ', ' + firstName : // add their name 
    '' // otherwise , don't add anythingnode .
    
}`)

function showData(data){
    console.log((data) ? // if we have data
    data : //console log the data
    'Loading....' //otherwise console log loading
    )
}

let ourData = undefined; // our page loads

showData(ourData)

ourData = ['apples', 'oragnes'] // our page finishes loading the data
showData(ourData)