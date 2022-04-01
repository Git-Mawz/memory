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
        // On créé un élément correspondant à la carte
        this.element = document.createElement('div');
        this.element.classList.add('card');
        this.element.classList.add('card--' + this.value);

        // On ajoute un event listener sur la carte
        this.element.addEventListener('click', event => {this.handleClick(event)});
      
        // On la retourne
        return this.element;
    }

    /**
     * Donne la valeur de la carte
     */
    getValue() {
        return this.value;
    }

    /**
     * Clique sur une carte
     */
    handleClick() {
        // On veut pouvoir retourner la carte au click (lui ajouter une class)
        this.element.classList.add('card--revealed');
        this.game.handleCardClick(this);
    }

    /**
     * On cache une carte
     */
    hide() {
        setTimeout(() => {
            this.element.classList.remove('card--revealed');
            this.removeCheckedStatus();
        }, 1000);
    }

    forceHide()
    {
        console.log('rush détecté');
        this.element.classList.remove('card--revealed');
        this.removeCheckedStatus();
    }

    addCheckedStatus()
    {
        this.element.dataset.checked = 1;
    }

    removeCheckedStatus()
    {
        delete this.element.dataset.checked;
    }

}