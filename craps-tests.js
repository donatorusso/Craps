/** Basic tests for Craps Simulator */

class CrapsTests {
    constructor() {
        this.simulator = new CrapsSimulator();
    }

    run() {
        console.log("Running Craps tests...");

        this.testResultsFormatting();
        this.testNonNegativeValues();
        this.testWinsAndLossesSum();

        console.log("All Craps tests passed.");
    }

    testResultsFormatting() {
        const stats = this.simulator.simulate(10);
        
        console.assert(typeof stats === "object", "Results should be an object");
        console.assert("averageRolls" in stats, "Average Rolls key exists");
        console.assert("maxRolls" in stats, "Max Rolls key exist");
        console.assert("minRolls" in stats, "Min Rolls key exist");
        console.assert("winningPercentage" in stats, "Winning Percentage key exist");
        console.assert("wins" in stats, "Wins key exist");
        console.assert("losses" in stats, "Losses key exist");
        console.assert("mostCommonRoll" in stats, "Most Common Roll key exist");

        console.log("Basic results format test passed");
    }

    testNonNegativeValues() {
        const stats = this.simulator.simulate(10);

        Object.values(stats).forEach((val) => {
            console.assert(val >= 0, "All numeric values should be non-negative");
        });

        console.log("Non-negative values test passed");
    }

    testWinsAndLossesSum() {
        const games = 100;
        const stats = this.simulator.simulate(games);

        console.assert(
            stats.wins + stats.losses === games,
            "Sum of wins and losses must match number of games"
        );

        console.log("Win and loss sum test passed");
    }
}