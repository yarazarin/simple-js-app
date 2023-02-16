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

//write the pokimonList with "for" in body
// for (let i = 0; i <= pokemonList.length; i++) {
//   // console.log(pokemonList[i].name)
//   document.write(
//     pokemonList[i].id +
//       "-" +
//       pokemonList[i].name +
//       "(" +
//       "weight is : " +
//       pokemonList[i].weight +
//       ") + "
//   );
//   if (pokemonList[i].weight >= 9) {
//     document.write("(❁´◡`) Wow, that's big one!");
//   }
// }

// end

/*
//write the pokimonList with "while" in body

let i = 0;
while (i <= pokemonList.length) {
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
  i++;
}

// end
*/

// Update the pokimonList with "forEach"
pokemonList.forEach((pokemon) => {
  document.write(
    "<ul> <li>" +
      " ID: " +
      pokemon.id +
      "-" +
      pokemon.name +
      "(" +
      "weight is : " +
      pokemon.weight +
      ")" +
      "</li> </ul>"
  );
  if (pokemon.weight >= 9) {
    document.write(
      "<pre class='size__announcer'>" + "that's the big one! ⤴" + "</pre>"
    );
  }
});

// end
