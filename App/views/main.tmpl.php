<body>
    <h1>Jeu de mémoire</h1>
    <div id="memory"></div>
    <script src="<?=$baseURI?>/public/assets/js/Game.js"></script>
    <script src="<?=$baseURI?>/public/assets/js/Card.js"></script>
    <script src="<?=$baseURI?>/public/assets/js/Countdown.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const game = new Game('memory');
            game.render();
        })
    </script>
</body>
</html>