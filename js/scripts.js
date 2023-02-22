//the reference belong: https://pokedex.org/#/pokemon/1 ↓↓↓

const pokemonRepository = (function () {
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

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    if (typeof pokemon === "object") {
      pokemonList.push(pokemon);
    } else {
      console.error("it is not an object!");
    }
  }

  return {
    getAll: getAll,
    add: add,
  };
})();

pokemonRepository.add({
  id: 4,
  name: "New Pokemon",
  height: 1,
  types: ["zz"],
  weight: 1,
});

let pokemonList = pokemonRepository.getAll();
pokemonList.forEach((pokemon) => {
  let pokemonList = document.querySelector(".pokemon-list");
  let listItem = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-styles");
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);
});
