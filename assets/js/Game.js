class Game
{

    pairNumber = 14;
    containerElement = null;

    matrix = [];
    cards = [];
    countdown = null;

    revealedCards = [];
    foundPair = [];

    clickCounter = 0;

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

        this.countdown = new Countdown(this, this.containerElement);
        this.countdown.render();
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

    handleCardClick(card) {
        // On contabilise les cartes retourné en les stockant dans un tableau
        this.revealedCards.push(card);
        // On incrémente le compteur de click
        this.clickCounter++;

        // Si deux cartes sont retournées
        if (this.revealedCards.length === 2) {
            this.checkSelection();
        }
    }

    /**
     * Vérification des cartes
     */
    checkSelection() {
        const firstCard = this.revealedCards[0];
        const secondCard = this.revealedCards[1];

        if (firstCard.getValue() === secondCard.getValue()) {
            this.rightSelection();
        } else {
            this.wrongSelection();
        }
    }

    /**
     * Si les cartes ont la même value
     */
    rightSelection() {
        // On récupère la valeur de la pair
        let pairValue = this.revealedCards[0].getValue();
        // Si la pair n'est pas déjà trouvé
        if (!this.foundPair.includes(pairValue)) {
            // On transmet la value des bonnes cartes retournée a une prop foundPair
            this.foundPair.push(pairValue);
        }
        // On vide la tableau revealedCards
        this.revealedCards = [];
        //On vérifie si la partie est gagné.
        this.isWin();
    }

    isWin() {
        if (this.foundPair.length === this.pairNumber) {
            alert('C\'est gagné !');
            // TODO On arrete le compte à rebours
        }

        // TODO On gère l'envoi du score au back
    }

    isLost() {
        alert('C\'est perdu !');
    }

    /**
     * Si les cartes ont une value différente
     */
    wrongSelection() {
        // On enlève la class card--releaved aux deux cartes
        this.revealedCards.forEach(card => {
            // Si la carte n'est pas déjà dans une pair trouvé
            if (!this.foundPair.includes(card.getValue())) {
                // On cache la carte
                card.hide();
            }
        })
        // On vide le tableau revealedCards
        this.revealedCards = []
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