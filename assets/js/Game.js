class Game
{

    pairNumber = 14;
    containerElement = null;

    matrix = [];
    cards = [];

    constructor(selector)
    {
        // On récupère l'élément correspondant au jeu
        this.containerElement = document.getElementById(selector);
        // On créé un tableau avec les pair de chiffres
        for(let i = 0 ; i < this.pairNumber ; i++) {
            this.matrix.push(i);
            this.matrix.push(i);
        }
        // On mélange les cartes
        this.matrix = this.shuffle(this.matrix);

        // On créé les cartes et on les garde dans le jeu
        this.matrix.forEach(value => {
            this.cards.push(new Card(this, value));
        });
    }

    /**
     * Permet d'afficher les cartes
     */
    render() {
        this.cards.forEach(card => {
            const cardElement = card.getElement();
            this.containerElement.appendChild(cardElement);
        });
    }

    /**
     * Permet de mélanger les cartes
     * @param {*} array 
     * @returns 
     */
    shuffle(array) {
        let length = array.length;
        while (length) {
            length--;
            const randomIndex = Math.floor(Math.random() * length);
            const savedValue = array[length];
            array[length] = array[randomIndex];
            array[randomIndex] = savedValue;
        }
        return array;
    }

}