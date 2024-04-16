class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScores) {
         this.scores.push(newScores)
        return this.scores;
    }
    average(){
        let average = 0
        for (let i = 0; i < this.scores.length; i++) {
             average += this.scores[i]
        };
        average = average/this.scores.length;
        return Math.round(average *10)/10;
    }
    status() {
        let status = "";
        if (this.average() < 70) {
            status = "Rejected"
        } else if (this.average() < 80 && this.average() >= 70) {
            status = "Probationary"
        } else if (this.average() < 90 && this.average() >= 80 ) {
            status = "Reserve";
        } else if (this.average() >= 90) {
            status = "Accepted"
        } else return "Incorrect Input!"


        console.log(`${this.name} earned an average test score of % ${this.average()} and has a status of ${status}.'`)
    }
} 

let bubba = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merry = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let glad = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
//console.log(CrewCandidate.addScore(83))
console.log(bubba.average())
bubba.addScore(83)
// console.log(merry)
// console.log(glad)
// console.log(bubba)

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

bubba.average();

bubba.status();
merry.status();
glad.status()