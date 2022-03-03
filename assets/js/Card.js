class Card {

    value = null;
    game = null;
    element = null;

    constructor(game, value) {
        this.game = game;
        this.value = value;
    }

    /**
     * Créé l'élément correspondant à la carte en vu de l'ajouter au jeu
     */
    getElement() {
        this.element = document.createElement('div');
        this.element.classList.add('card');
        this.element.classList.add('card--' + this.value);

        // On ajoute un event listener sur la carte
        this.element.addEventListener('click', event => {this.handleClick(event)});
      
        return this.element;
    }

    /**
     * Donne la valeur de la carte
     */
    getValue() {
        return this.value;
    }

    /**
     * Gère l'event de clock sur la carte
     */
    handleClick() {
        // On veut pouvoir retourner la carte au click (lui ajouter une class)
        this.element.classList.add('card--revealed');
        this.game.handleCardClick(this);
    }

}