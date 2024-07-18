const pokemonRepository = (function () {
  let e = [];
  function t() {
    return e;
  }
  function n(t) {
    "object" == typeof t && "name" in t
      ? e.push(t)
      : console.error("it is not an object!");
  }
  function i(e) {
    pokemonRepository.loadDetails(e).then(function () {
      var t, n;
      let i = document.querySelector(".modal-body");
      i.addEventListener("click", (e) => {
        e.target === i && hideModal();
      });
      let o, a, r, l;
      (t = e),
        (n = "Height: " + e.height + " |  Weight: " + e.weight),
        (i.innerHTML = ""),
        (o = document.createElement("div")).classList.add("newModal"),
        ((a = document.createElement("h1")).innerText = t.name),
        ((r = document.createElement("p")).innerText = n),
        (l = document.createElement("img")).classList.add("pokemon_img"),
        (l.src = t.imageUrl),
        (l.alt = t.name),
        o.appendChild(a),
        o.appendChild(r),
        o.appendChild(l),
        i.appendChild(o);
    });
  }
  return {
    getAll: t,
    add: n,
    addListItem: function e(t) {
      let n = document.querySelector(".pokemon-list"),
        o = document.createElement("li");
      o.classList.add("group-list-item");
      let a = document.createElement("button");
      (a.innerText = t.name),
        a.setAttribute("data-toggle", "modal"),
        a.setAttribute("data-target", "#exampleModal"),
        a.classList.add("btn", "btn-light", "show-modal"),
        o.appendChild(a),
        n.appendChild(o),
        a.addEventListener("click", function () {
          i(t);
        });
    },
    loadList: function e() {
      return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          e.results.forEach(function (e) {
            n({ name: e.name, detailsUrl: e.url });
          });
        })
        .catch(function (e) {
          console.error(e);
        });
    },
    loadDetails: function e(t) {
      return fetch(t.detailsUrl)
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          (t.imageUrl = e.sprites.front_default),
            (t.height = e.height),
            (t.weight = e.weight);
        })
        .catch(function (e) {
          console.error(e);
        });
    },
    showDetails: i,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
});
