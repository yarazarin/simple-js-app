//the reference belong: https://pokedex.org/#/pokemon/1 ↓↓↓

const pokemonRepository = (function () {
  let repository = [
    {
      id: 1,
      name: "Bulbasaur",
      height: 7,
      types: ["grass", "poison"],
      weight: 6.9,
      src: "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/375px-0001Bulbasaur.png",
    },
    {
      id: 2,
      name: "Charmander",
      height: 6,
      types: ["fire"],
      weight: 8.5,
      src: "https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/375px-0004Charmander.png",
    },
    {
      id: 3,
      name: "Squirtle",
      height: 5,
      types: ["water"],
      weight: 9,
      src: "https://archives.bulbagarden.net/media/upload/thumb/b/bb/007Squirtle_Dream_2.png/180px-007Squirtle_Dream_2.png",
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

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");

    let listPokemon = document.createElement("li");

    let button = document.createElement("button");

    button.innerText = pokemon.name;

    button.classList.add("button-styles");

    button.addEventListener("click", function () {
      showDetails(pokemon);
    });

    let img = document.createElement("img");
    img.src = pokemon.src;
    img.alt = pokemon.name;
    img.classList.add("pokemon_img");

    listPokemon.appendChild(button);
    listPokemon.appendChild(img);

    pokemonList.appendChild(listPokemon);

    function showDetails(pokemon) {
      console.log(pokemon);
      img.classList.toggle("pokemon_img--visible");
    }
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
  };
})();

pokemonRepository.add({
  id: 4,
  name: "Pokemon Ball",
  height: 1,
  types: ["Ball"],
  weight: 1,
  src: "https://archives.bulbagarden.net/media/upload/d/dc/GO_Pok%C3%A9_Ball.png",
});

let pokemonList = pokemonRepository.getAll();

pokemonList.forEach((pokemon) => {
  pokemonRepository.addListItem(pokemon);
});
