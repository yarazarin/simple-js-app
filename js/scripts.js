//the reference belong: https://pokedex.org/#/pokemon/1 ↓↓↓

const pokemonRepository = (function () {
  let repository = [
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
    return repository;
  }

  function add(pokemon) {
    if (typeof pokemon === "object") {
      repository.push(pokemon);
    } else {
      console.error("it is not an object!");
    }
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");

    let listPokemon = document.createElement("li");

    let button = document.createElement("button");

    button.innerText = pokemon.name;

    button.classList.add("button-styles");

    button.addEventListener("click", function () {
      showDetails(pokemon);
    });

    listPokemon.appendChild(button);

    pokemonList.appendChild(listPokemon);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
  };
})();

pokemonRepository.add({
  id: 4,
  name: "New PokemonX",
  height: 1,
  types: ["XXX"],
  weight: 1,
});

let pokemonList = pokemonRepository.getAll();

pokemonList.forEach((pokemon) => {
  pokemonRepository.addListItem(pokemon);
});
