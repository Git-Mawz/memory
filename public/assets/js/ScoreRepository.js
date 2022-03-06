class ScoreRepository
{
    getScoresEndpoint = 'http://localhost/memory_game/?action=browse';
    sendScoreEndpoint = 'http://localhost/memory_game/';

    /**
     * 
     */
    getScores()
    {
        // return await fetch(this.getScoresEndpoint)
        // .then((response) => {
        //     return (response.json());
        // })
        // .then((scores) => {
        //     console.log(scores);
        // })
        let scoreArray = [];

        return fetch(this.getScoresEndpoint)
            .then(res => { return res.json() })
            .then(scores => {
                for (let i in scores) {
                    // console.log(scores[i].elapsed_time);
                    scoreArray.push(scores[i].elapsed_time);
                }
                return scoreArray;
            })

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