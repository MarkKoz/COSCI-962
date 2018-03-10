const int = Math.floor(Math.random() * 100) + 1;

(() => {
    for (let tries = 3; tries > 0; --tries) {
        const guess = Number(
            tries === 3
                ? prompt("Guess an integer in the range [1,100]:")
                : prompt(`Incorrect; ${tries} attempts remain. Try again:`));

        if (guess === int) {
            alert("You guessed correctly.");

            return;
        }
    }

    alert(`You failed to guess the number. The number was ${int}.`);
})();
