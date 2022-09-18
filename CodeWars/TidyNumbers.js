function tidyNumber(n){
    //your code here
    const newString = n.toString();
    console.log( newString );
    const newArray = newString.split( "" );
    const newestArray = newArray.sort().join( "" );
    
    if ( newestArray === newString) {
        return true
    }
    else {
        return false
    }
    console.log( newestArray );
}
console.log( tidyNumber( 2335) );