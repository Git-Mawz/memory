class Card {

    value = null;
    game = null;
    element = null;

    constructor(game, value) {
        this.game = game;
        this.value = value;
    }

    getElement() {
        this.element = document.createElement('div');
        this.element.classList.add('card');
        this.element.classList.add('card--' + this.value);
      
        return this.element;
    }

}