//Project Readme - Creating a List of Pokemon Using JavaScript and the PokeAPI
This project is a simple web page that allows the user to view a list of the first 150 Pokemon and their details using the PokeAPI. The PokeAPI is a public API that provides information about Pokemon from the popular Pokemon video game franchise.

The web page is built using HTML, CSS, and JavaScript. The JavaScript code uses the PokeAPI to fetch a list of the first 150 Pokemon and their details. It then displays the list of Pokemon on the web page, and allows the user to click on each Pokemon to view its details in a modal window.

//How to Run the Project
To run this project, you will need to have a web browser and a text editor installed on your computer. Here are the steps to get started:

Download the code from this repository and extract the files to a folder on your computer.
Open the folder in your text editor.
Open the index.html file in your web browser.
You should now see the web page with a list of the first 150 Pokemon. Click on a Pokemon to view its details in a modal window.

//How the Code Works
The JavaScript code for this project is contained in a self-executing anonymous function, which is executed as soon as the script is loaded. This function defines a pokemonRepository object, which contains several methods for fetching and displaying Pokemon data.

The loadList method uses the fetch API to retrieve a list of the first 150 Pokemon from the PokeAPI. It then adds each Pokemon to the pokemonList array using the add method.

The addListItem method creates a new list item element for each Pokemon and adds it to the web page. It also attaches an event listener to the list item that displays the Pokemon's details when it is clicked.

The loadDetails method fetches additional details about a Pokemon, such as its height and weight, using the PokeAPI. It then adds these details to the Pokemon object using the add method.

The showDetails method displays the details of a Pokemon in a modal window when it is clicked. It uses the loadDetails method to fetch the Pokemon's details, and then creates the modal window using HTML and CSS.

Finally, the pokemonRepository object is returned from the self-executing function, and its methods are used to load and display the Pokemon data on the web page.

//Conclusion
This project demonstrates how to use the PokeAPI to fetch and display data about Pokemon in a web page. It also shows how to use JavaScript to create interactive web applications with modal windows and event listeners.

//Built With:
HTML
CSS
JavaScript

Yara Zarin
