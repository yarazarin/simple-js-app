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
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-styles");
    button.classList.add("show-modal");

    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener("click", function () {
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
      let modalContainer = document.querySelector(".modal-container");

      function showModal(pokemon, text) {
        modalContainer.innerHTML = "";

        let modal = document.createElement("div");
        modal.classList.add("modal");

        let closeButtonElement = document.createElement("button");
        closeButtonElement.classList.add("close-btn");
        closeButtonElement.innerText = "X";
        closeButtonElement.addEventListener("click", hideModal);

        let titleElement = document.createElement("h1");
        titleElement.innerText = pokemon.name;

        let contentElement = document.createElement("p");
        contentElement.innerText = text;

        let imgPokemon = document.createElement("img");
        imgPokemon.classList.add("pokemon_img");
        imgPokemon.src = pokemon.imageUrl;
        imgPokemon.alt = pokemon.name;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(imgPokemon);
        modalContainer.appendChild(modal);

        modalContainer.classList.add("visible");
      }

      function hideModal() {
        modalContainer.classList.remove("visible");
      }

      window.addEventListener("keydown", (e) => {
        if (
          e.key === "Escape" &&
          modalContainer.classList.contains("visible")
        ) {
          hideModal();
        }
      });

      modalContainer.addEventListener("click", (e) => {
        let target = e.target;
        if (target === modalContainer) {
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
