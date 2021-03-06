class Countdown
{

    startValue = 2*60;
    currentValue = null;
    stopped = false;

    gameElement = null;
    countdownElement = null;
    progressBarElement = null;
    progressBarWidth = 750;
    unit = 'px';

    game = null;

    constructor(game, gameElement) {
        this.gameElement = gameElement;
        this.game = game;
    }

    render() {
        // On ajoute l'élément pour le timer
        let countdownElement = document.createElement('div');
        countdownElement.classList.add('countdown');
        countdownElement.dataset.value = this.startValue;
        countdownElement.style.width = this.progressBarWidth + this.unit;
        countdownElement.style.maxWidth = this.progressBarWidth + this.unit;
        this.countdownElement = countdownElement;

        // On ajoute la barre de progression
        let progressBarElement = document.createElement('div');
        progressBarElement.classList.add('progress');
        progressBarElement.style.width = this.progressBarWidth + this.unit;
        progressBarElement.style.maxWidth = this.progressBarWidth + this.unit;
        this.progressBarElement = progressBarElement;

        // On l'ajoute le countdownElement dans la div du jeu
        this.gameElement.appendChild(this.countdownElement);

        // On ajoute le progressBarElement dans la div du countdown
        this.countdownElement.appendChild(this.progressBarElement);

        // On initialise la currentValue
        this.currentValue = this.startValue;
        // On lance le compte à rebours
        this.start();
    }

    start() {
        if(this.currentValue >= 0 && this.stopped != true) {
            setTimeout(() => {
                if (this.currentValue === this.startValue) {
                    this.currentValue = this.startValue-1;
                    this.countdownElement.dataset.value = this.currentValue;
                } else {
                    this.currentValue = this.currentValue-1;
                    this.countdownElement.dataset.value = this.currentValue;
                }
                this.start();
                this.updateProgressBar();
            }, 1000);
        } else if (this.game.won == false) {
            this.game.over();
        }
    }

    stop() {
        this.stopped = true;
    }

    updateProgressBar() {
        // On prend la taille total et on lui enlève l'équivalent de la taille max / par le nombre de secondes restant
        let progressBarSizePortion = this.progressBarWidth/this.startValue;
        // On met à jour la taille de la progressBar
        this.progressBarElement.style.width = (progressBarSizePortion * this.currentValue) + this.unit;
    }

    getCurrentTime() {
        return this.currentValue;
    }

}