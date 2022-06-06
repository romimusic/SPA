import getData from "../utils/getData";


const Home = async () => {
  const characters = await getData();
  const view = `
    <div class='Character'>
      ${characters.results.map( character => {
        return `
          <article class='Character-item'>
            <a href='#/${character.id}'>
              <figure>
                <img src='${character.image}' alt='${character.id}'/>
              </figure>
              <h2> ${character.name} </h2>
            </a>
          </article>
        `
      }).join('')}
    </div>
  `;

  return view;
};

export default Home;
