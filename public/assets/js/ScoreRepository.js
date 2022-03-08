class ScoreRepository
{
    getScoresEndpoint = 'http://localhost/memory_game/?action=browse';
    sendScoreEndpoint = 'http://localhost/memory_game/';

    /**
     * On récupère les dix meilleurs scores
     * @returns {array}
     */
    getScores()
    {
        let scoreArray = [];

        return fetch(this.getScoresEndpoint)
            .then(res => { return res.json() })
            .then(scores => {
                for (let i in scores) {
                    scoreArray.push(scores[i].elapsed_time);
                }
                return scoreArray;
            })
    }

    /**
     * On envoi le score vers l'API pour qu'il soit sauvegardé
     * @param {number} score le score du joueur
     * @returns 
     */
    sendScore(score)
    {
        let formData  = new FormData();
        formData.append('time', score);
        
        return fetch(this.sendScoreEndpoint, {
          method: 'POST',
          cache: 'no-cache',
          body: formData
        });
    }
}