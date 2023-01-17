import React, { useContext, useState } from 'react'
import CardPokemon from '../components/CardPokemon';
import PokemonContext from '../contexts/PokemonContext';

const Perfil = () => {

  const { globalPokemons } = useContext(PokemonContext);

  const favoritePokemons = () =>{

    const keys = Object.keys(localStorage)
    let arrayPoke = []
    for (let key of keys) {
      
      if (key.includes('pokemon')){
        arrayPoke.push(JSON.parse(localStorage.getItem(key)))
      }
    }
    return arrayPoke
  }

  return (

    <>
		<div className='container'>
			<p className='p-search'>
				Tienes <span>{favoritePokemons().length}</span>{' '}
				pokemons favoritos:
			</p>
			<div className='card-list-pokemon container'>
				{favoritePokemons().map(pokemon => (
					<CardPokemon pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
    </>
	);
}

export default Perfil