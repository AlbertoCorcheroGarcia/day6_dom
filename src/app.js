window.onload = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".net", ".us", ".io"];
  let all = "";
  let allOptions = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dom.length; l++) {
          all = all.concat(pronoun[i], adj[j], noun[k], dom[l]);
          //console.log(pronoun[i] + adj[j] + noun[k] + dom[l]);
          allOptions.push(all);
          all = "";
        }
      }
    }
  }
  console.log(allOptions);
  create(allOptions);
};

function create(allOptions) {
  for (let g = 0; g < allOptions.length; g++) {
    //seleciono el id list del html
    let newItem = document.querySelector("#list");
    // creo el "li"
    let newOne = document.createElement("li");
    //creo y meto el contenido de all options
    let textNew = document.createTextNode(allOptions[g]);
    //uno newOne con textNew
    newOne.appendChild(textNew);
    //uno newItem con newOne
    newItem.appendChild(newOne);
  }
}
