const Cards = [];

function makeCard(title, description, date, priority, todos) {
    const id = Date.now();
    const card = { id, title, description, date, priority, todos };
    
    
    // Retrieve existing cards from localStorage
    let storedCards = JSON.parse(localStorage.getItem('cards')) || [];
    
    // Add the new card to the array
    storedCards.push(card);
    
    // Save the updated array back to localStorage
    localStorage.setItem('cards', JSON.stringify(storedCards));
    
    return card;
}


export { makeCard, Cards };
