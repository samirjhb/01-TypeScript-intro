export const pokemonIds = [1, 20, 40, 90];

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const bulbasur: Pokemon = {
  id: 1,
  name: "Bulbasur",
};

export const charmader: Pokemon = {
  id: 1,
  name: "Charmader",
  age:1
};


export const pokemons:Pokemon[] =[];

pokemons.push(charmader, bulbasur)

console.log(pokemons);
