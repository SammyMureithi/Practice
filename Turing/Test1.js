function myCharacterLength( str ) {
    var myChara = str.toUpperCase().split( "" );
    const set= new Set(myChara)
    return set.size;
    
}
console.log( myCharacterLength( "pwwkew" ) );