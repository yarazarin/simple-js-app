//the reference belong: https://pokedex.org/#/pokemon
const pokemonRepository = (function () {
  let pokemonList = [];

  let apiPokemonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  function loadList() {
    return fetch(apiPokemonUrl)
      .then(function (answer) {
        return answer.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
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
    // let img = document.createElement("img");
    // img.src = pokemon.src;
    // img.alt = pokemon.name;
    // img.classList.add("pokemon_img");
    listPokemon.appendChild(button);
    // listPokemon.appendChild(img);
    pokemonList.appendChild(listPokemon);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (answer) {
        return answer.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(item) {
    // img.classList.toggle("pokemon_img--visible");
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
