function spinWords(string){
    //TODO Have fun :)
    const newArray = string.split( " " );
    let newString = [];
   
    for (i = 0; i < newArray.length; i++){
        let string = newArray[i].toString();
        if ( string.length > 4 ) {
            let longString = string.split( "" );
            let newArray = [];
            for ( k = longString.length - 1; k > -1; k-- ){
                newArray.push( longString[k] );
            }
            const revesred=newArray.join( "" )
            newString.push(revesred)
        }
        else {
            newString.push( string );
        }
        return newString;
    }
}

console.log(spinWords( "Hey fellow warriors" ))