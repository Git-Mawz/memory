class ScoreRepository
{
    getScoresEndpoint = 'http://localhost/memory_game/?action=browse';
    sendScoreEndpoint = 'http://localhost/memory_game/';

    /**
     * 
     */
    getScores()
    {
        return fetch(this.getScoresEndpoint).then((response) => {
            console.log(response.json());
        });
    }

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