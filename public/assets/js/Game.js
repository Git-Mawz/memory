class Game
{
    pairNumber = null;

    containerElement = null;
    matrix = [];
    cards = [];
    
    revealedCards = [];
    foundPair = [];
    clickCounter = 0;

    won = false;
    countdown = null;
    scoreRepo = null;

    constructor(selector, pairNumber)
    {
        this.pairNumber = pairNumber;
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

        // On instancie notre compte à rebours
        this.countdown = new Countdown(this, this.containerElement);
        // On instancie notre score repository (liaison avec l'API)
        this.scoreRepo = new ScoreRepository();
    }

    /**
     * Permet l'affichage du jeu
     */
    render() {
        // On affiche les cartes
        this.cards.forEach(card => {
            const cardElement = card.getElement();
            this.containerElement.appendChild(cardElement);
        });

        // On affiche les meilleurs scores
        this.scoreRepo.getScores()
        .then(scoreArray => {
            if (scoreArray.length > 1) {
                alert('Les ' + scoreArray.length + ' meilleurs temps : ' + scoreArray + ' secondes');
            } else if (scoreArray.length == 1) {
                alert('Le meilleur temps : ' + scoreArray + ' secondes');
            } else {
                alert('Pas encore de score enregistrés !');
            }
        })

        // On affiche et on lance le compte à rebours
        this.countdown.render();
    }

    /**
     * Conséquences du clique sur une carte
     * @param {Card} card La carte sur laquelle le joueur clique
     */
    handleCardClick(card) {
        // On comptabilise les cartes retourné en les stockant dans un tableau
        this.revealedCards.push(card);

        // On incrémente le compteur de click
        this.clickCounter++;

        // Si deux cartes sont retournées 
        if (this.revealedCards.length === 2) {
            // on vérifie si ce sont les mêmes
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
     * Les deux cartes retournées ont la même value
     */
    rightSelection() {
        // On récupère la valeur de la pair
        let pairValue = this.revealedCards[0].getValue();
        // Si la pair n'est pas déjà trouvé
        if (!this.foundPair.includes(pairValue)) {
            // On transmet la value des bonnes cartes retournée à la prop foundPair
            this.foundPair.push(pairValue);
        }
        // On vide la tableau revealedCards
        this.revealedCards = [];
        //On vérifie si la partie est gagné.
        if (this.isWin()) {
            this.win();
        }
    }

    /**
     * C'est gagné ?
     * returns {boolean}
     */
    isWin() {
        return this.foundPair.length === this.pairNumber;
    }

    /**
     * La partie est perdue
     */
    over() {
        this.countdown.stop();
        alert('C\'est perdu !');
    }

    /**
     * La partie est gagnée
     */
    win() {
        this.won = true;
        let currentTime = this.countdown.getCurrentTime();
        let winTime = this.countdown.startValue - currentTime;
        this.countdown.stop();

        // On affiche le message de victoire
        alert('C\'est gagné en ' + winTime + ' secondes et ' + this.clickCounter + ' clicks');

        // On Enregistrer le score
        this.scoreRepo.sendScore(winTime);
    }

    /**
     * Les deux cartes retournées ont une value différente
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
     * @param {array} array tableau qu'on souhaite mélangé
     * @returns {array} le tableau mélangé
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