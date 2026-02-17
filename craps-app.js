/** Bootstrap and frontend for Craps Simulator */

class CrapsApp {
    constructor() {
        this.simulator = new CrapsSimulator();
        this.input = document.getElementById("gamesInput");
        this.button = document.getElementById("simulateBtn");
        this.results = document.getElementById("results");
        this.error = document.getElementById("error");
        this.button.addEventListener("click", () => this.handleClick());
    }

    handleClick() {
        const games = Number(this.input.value);

        if (games <= 0) {
            this.showError("Number of games must be > 0");
            this.clearResults();
            return;
        }

        this.clearError();
        const stats = this.simulator.simulate(games);
        this.renderResults(stats);
    }

    renderResults(stats) {
        this.results.innerHTML = `
            <li>Average rolls per game: ${stats.averageRolls}</li>
		    <li>Highest number of rolls: ${stats.maxRolls}</li>
		    <li>Lowest number of rolls: ${stats.minRolls}</li>
		    <li>Winning percentage: ${stats.winningPercentage}%</li>
			<li>Wins: ${stats.wins}</li>
			<li>Losses: ${stats.losses}</li>
			<li>Most common roll: ${stats.mostCommonRoll}</li>
        `;
    }

    showError(msg) {
        this.error.textContent = msg;
    }

    clearError() {
        this.error.textContent = "";
    }

    clearResults() {
        this.results.innerHTML = "";
    }
}