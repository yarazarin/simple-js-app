//the reference belong: https://pokedex.org
const pokemonRepository = (function () {
  let pokemonList = [];
  let apiPokemonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function getAll() {
    return pokemonList;
  }

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
    listPokemon.classList.add("group-list-item");
    let buttonX = document.createElement("button");
    buttonX.innerText = pokemon.name;
    buttonX.setAttribute("data-toggle", "modal");
    buttonX.setAttribute("data-target", "#exampleModal");
    buttonX.classList.add("btn", "btn-light", "show-modal");

    listPokemon.appendChild(buttonX);
    pokemonList.appendChild(listPokemon);
    buttonX.addEventListener("click", function () {
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
        item.weight = details.weight;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      let modalContent = document.querySelector(".modal-body");

      function showModal(pokemon, text) {
        modalContent.innerHTML = "";
        let newModal = document.createElement("div");
        newModal.classList.add("newModal");

        let titleElement = document.createElement("h1");
        titleElement.innerText = pokemon.name;

        let contentElement = document.createElement("p");
        contentElement.innerText = text;

        let imgPokemon = document.createElement("img");
        imgPokemon.classList.add("pokemon_img");
        imgPokemon.src = pokemon.imageUrl;
        imgPokemon.alt = pokemon.name;

        newModal.appendChild(titleElement);
        newModal.appendChild(contentElement);
        newModal.appendChild(imgPokemon);
        modalContent.appendChild(newModal);
      }

      modalContent.addEventListener("click", (e) => {
        let target = e.target;
        if (target === modalContent) {
          hideModal();
        }
      });

      showModal(
        pokemon,
        "Height: " + pokemon.height + " | " + " Weight: " + pokemon.weight
      );
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
