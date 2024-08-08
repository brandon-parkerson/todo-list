export {makeCard, Cards};

const Cards = [];


function makeCard(title, description, date, priority) {
    const card = {title, description, date, priority};

    Cards.push(card);

    return card;
};