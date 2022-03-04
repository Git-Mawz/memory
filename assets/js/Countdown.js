class Countdown
{

    startValue = 5*60*1000;

    gameElement = null;

    constructor(gameElement) {
        console.log('countdown loaded');
        this.gameElement = gameElement;
    }

    render() {
        // On créé l'élément pour le timer
        let countdownElement = document.createElement('div');
        // On lui ajoute une class
        countdownElement.classList.add('countdown');
        // On l'ajoute au propriété de la class
        this.countdownElement = countdownElement;
        // On l'ajoute dans le DOM
        this.gameElement.appendChild(this.countdownElement);
    }


}