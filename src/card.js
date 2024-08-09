const Cards = [];

function makeCard(title, description, date, priority, todos) {
    const card = { title, description, date, priority, todos };

    Cards.push(card);

    return card;
}

export { makeCard, Cards };
