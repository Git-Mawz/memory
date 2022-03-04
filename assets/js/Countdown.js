class Countdown
{

    startValue = 2*60;
    currentValue = null;

    gameElement = null;
    countdownElement = null;

    game = null;

    constructor(game, gameElement) {
        this.gameElement = gameElement;
        this.game = game;
    }

    render() {
        // On créé l'élément pour le timer
        let countdownElement = document.createElement('div');
        // On lui ajoute une class
        countdownElement.classList.add('countdown');
        // On lui ajoute sa valeur dans un dataset
        countdownElement.dataset.value = this.startValue;
        // On l'ajoute au propriété de la class
        this.countdownElement = countdownElement;
        // On l'ajoute dans le DOM
        this.gameElement.appendChild(this.countdownElement);
        // On initialise la currentValue
        this.currentValue = this.startValue;
        // On lance le compte à rebours
        this.start();
    }

    start() {
        if(this.currentValue > 0) {
            setTimeout(() => {
                if (this.currentValue === this.startValue) {
                    this.currentValue = this.startValue-1;
                    this.countdownElement.dataset.value = this.currentValue;
                } else {
                    this.currentValue = this.currentValue-1;
                    this.countdownElement.dataset.value = this.currentValue;
                }
                this.start();
            }, 1000);
        } else {
            this.game.isLost();
        }
    }

    getCurrentTime() {
        return this.currentValue;
    }

}