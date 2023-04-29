    const cards = [
    {
      title: `flight booking`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis`,
      image: `/img/john-mcarthur-703645-unsplash-768x503.jpg`,
    },
    {
      title: `hotel & resort booking`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis`,
      image: `/img/shawn-lee-785068-unsplash.jpg`,
    },
    {
        title:  `family trip planner`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis`,
        image: `/img/natalya-zaritskaya-144626.jpg`
    },
    {
        title:  `cruise tour`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis`,
        image: `/img/B_vidar-nordli-mathisen-559120-unsplash.webp`
    },
    {
        title:  `fire camp`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis`,
        image: `/img/robson-hatsukami-morgan-178532-1-940x627.jpg`
    },
    {
        title:  `corporate holidays`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis`,
        image: `/img/mimi-thian-737711-unsplash-1-scaled.jpg`
    }

  ];
  
export function renderCards() {
    const container = document.getElementById(`card-container`);
    cards.forEach((card) => {
      const cardDiv = document.createElement(`div`);
      cardDiv.classList.add(`services__card`);
      cardDiv.innerHTML = `
        <img class="services__card--img" src="${card.image}" alt="${card.title}" />
        <h2 class="services__card--title">${card.title}</h2>
        <p class="services__card--txt">${card.description}</p>
      `;
      container.appendChild(cardDiv);
    });
  }
  


