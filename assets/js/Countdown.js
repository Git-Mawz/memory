class Countdown
{

    startValue = 2*60;
    currentValue = null;

    gameElement = null;
    countdownElement = null;
    progressBarElement = null;
    progressBarWidth = 750;

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
        countdownElement.style.width = this.progressBarWidth + 'px';
        countdownElement.style.maxWidth = this.progressBarWidth + 'px';
        this.countdownElement = countdownElement;

        // On ajoute la barre de progression
        let progressBarElement = document.createElement('div');
        progressBarElement.classList.add('progress');
        progressBarElement.style.width = this.progressBarWidth + 'px';
        progressBarElement.style.maxWidth = this.progressBarWidth + 'px';
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
        if(this.currentValue >= 0) {
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
        } else {
            this.game.isLost();
        }
    }

    updateProgressBar() {
        // On prend la taille total et on lui enlève l'équivalent de la taille max / par le nombre de secondes restant
        let progressBarSizePortion = this.progressBarWidth/this.startValue;
        this.progressBarElement.style.width = (progressBarSizePortion * this.currentValue) +'px';
    }

    getCurrentTime() {
        return this.currentValue;
    }

}