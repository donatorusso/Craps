/** Game and simulation logic */

class Dice {
    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

class Game {
    constructor(dice) {
        this.dice = dice;
        this.rolls = 0;
    }

    rollDice() {
        this.rolls++;
        return this.dice.roll() + this.dice.roll();
    }

    play(rollFrequency) {        
        let roll = this.rollDice();
        rollFrequency[roll]++;

        if ([2, 3, 12].includes(roll)) {
            return { win: false, rolls: this.rolls };
        }

        if ([7, 11].includes(roll)) {
            return { win: true, rolls: this.rolls };
        }

        const point = roll;

        while (true) {
            roll = this.rollDice();
            rollFrequency[roll]++;

            if (roll === point) return { win: true, rolls: this.rolls };
            if (roll === 7) return { win: false, rolls: this.rolls };
        }
    }
}

class Statistics {
    constructor() {
        this.totalRolls = 0;
        this.wins = 0;
        this.losses = 0;
        this.minRolls = null;
        this.maxRolls = 0;        
        this.rollFrequency = Array(13).fill(0);
    }

    recordGame(result) {
        this.totalRolls += result.rolls;
        
        if (this.minRolls === null) {
            this.minRolls = this.maxRolls = result.rolls;
        } else {
            this.minRolls = Math.min(this.minRolls, result.rolls);
            this.maxRolls = Math.max(this.maxRolls, result.rolls);
        }

        result.win ? this.wins++ : this.losses++;
    }

    mostCommonRoll() {
        let mostCommon = 2;
        for (let i = 3; i <= 12; i++) {
            if (this.rollFrequency[i] > this.rollFrequency[mostCommon]) {
                mostCommon = i;
            }
        }        
        return mostCommon;
    }

    getStatistics(numberOfGames) {
        return {
            averageRolls: (this.totalRolls / numberOfGames).toFixed(2),
            maxRolls: this.maxRolls,
            minRolls: this.minRolls,
            winningPercentage: ((this.wins / numberOfGames) * 100).toFixed(2),
            wins: this.wins,
            losses: this.losses,
            mostCommonRoll: this.mostCommonRoll()
        };
    }
}

class CrapsSimulator {
    constructor() {
        this.dice = new Dice();
    }

    simulate(numberOfGames) {
        const stats = new Statistics();

        for (let i = 0; i < numberOfGames; i++) {
            const game = new Game(this.dice);
            const result = game.play(stats.rollFrequency);
            stats.recordGame(result);
        }
        return stats.getStatistics(numberOfGames);
    }
}