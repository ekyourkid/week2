const NAMES = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]

function searchName ( keyword, count, callback )
{
    const result = callback( keyword, count )
    return result
}

function callbackFilter (keyword,count)
{
    const result = []
    for (let index = 0; index < NAMES.length; index++) {
        const name = NAMES[index]?.toLowerCase()

        if ( name.includes( keyword.toLowerCase() ) ) {
             result.push(name)
        }

        if ( result.length === count ){
            return result
        }
    }
}

console.log(searchName( "an", 3, callbackFilter))