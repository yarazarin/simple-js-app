//the reference belong: https://pokedex.org/#/pokemon/1 ↓↓↓
let pokemonList = [
  {
    id: 1,
    name: "Bulbasaur",
    height: 7,
    types: ["grass", "poison"],
    weight: 6.9,
  },
  {
    id: 2,
    name: "Charmander",
    height: 6,
    types: ["fire"],
    weight: 8.5,
  },
  {
    id: 3,
    name: "Squirtle",
    height: 5,
    types: ["water"],
    weight: 9,
  },
];

//end ↑↑↑
for (let i = 0; i <= pokemonList.length; i++) {
  // console.log(pokemonList[i].name)
  document.write(
    pokemonList[i].id +
      "-" +
      pokemonList[i].name +
      "(" +
      "weight is : " +
      pokemonList[i].weight +
      ") + "
  );
  if (pokemonList[i].weight >= 9) {
    document.write("(❁´◡`) Wow, that's big one!");
  }
}
