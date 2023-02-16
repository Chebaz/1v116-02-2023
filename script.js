const input = document.getElementById("input-text");
const bottone = document.getElementById("btn");
const container = document.getElementById("container");

async function searchPokemon(url) {
  const response = await fetch(url);
  try {
    if (response.ok) {
      let data = response.json();
      return data;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
    return "";
  }
}

async function pokemon() {
  container.innerHTML = "";
  let pokemondata = await searchPokemon(
    `https://pokeapi.co/api/v2/pokemon/${input.value}`
  );
  console.log(pokemondata);
  if (pokemondata != "") {
    let para = document.createElement("p");
    para.innerHTML = `base experience: ${pokemondata.base_experience}`;
    container.appendChild(para);
  }
}

bottone.addEventListener("click", pokemon);
