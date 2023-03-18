/*
  You should write the code in this file
*/

const getUniqueTypes = pokemons => {
  // *********************************
  const uniqueTypes= []
  pokemons.forEach(pokemon =>{
   if(!uniqueTypes.includes(pokemon.type)){
     uniqueTypes.push(pokemon.type)
   }
  } )
  return uniqueTypes;
  // *********************************
};


const orderByPower = pokemons => {
  // *********************************
  pokemons.sort((a,b)=> {
    return a.power - b.power
  })
    
  return pokemons
  // *********************************
};


const filterByType = (type, pokemons) => {
  // *********************************
  const myPokemon = pokemons.filter(pokemon => {
    return pokemon.type === type
  })
return myPokemon;
  // *********************************
};


const getPokemonNamesForType = (type, pokemons) => {
  // *********************************
  const pokName =[]
  pokemons.forEach(pokemon => {
   if(pokemon.type === type){
      pokName.push(pokemon.name )
   }
  

 })
return pokName;
  // *********************************
};


const getTotalPokemonPowerForType = (type, pokemons) => {
  // *********************************
  const pokPow = pokemons.filter(pokemon => pokemon.type === type)
   .reduce((acc , pokemon) => {
    
      
      return acc + pokemon.power
      
   },0)
   return pokPow;
 
  // *********************************
};


const getTypeAggregatedInformation = (type, pokemons) => {
  // *********************************

  // *********************************
};

export const utils = {
  getUniqueTypes,
  orderByPower,
  filterByType,
  getPokemonNamesForType,
  getTotalPokemonPowerForType,
  getTypeAggregatedInformation
};
