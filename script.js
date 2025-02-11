const questions = [
    {
        "question": "What is the SI unit of electrical resistance?",
        "answer": "Ohm",
        "options": ["Volt", "Ampere", "Ohm", "Farad"]
    },
    {
        "question": "What is the frequency of AC power supply in India?",
        "answer": "50 Hz",
        "options": ["51 Hz", "50 Hz", "60 Hz", "100 Hz"]
    },
    {
        "question": "Which law states that the current through a conductor is directly proportional to the voltage across it?",
        "answer": "Ohm’s Law",
        "options": ["Kirchhoff’s Law", "Ohm’s Law", "Faraday’s Law", "Coulomb’s Law"]
    },
    {
        "question": "What does a transformer do?",
        "answer": "Changes voltage levels",
        "options": ["Converts AC to DC", "Changes voltage levels", "Increases frequency", "Generates electricity"]
    },
    {
        "question": "The unit of capacitance is?",
        "answer": "Farad",
        "options": ["Henry", "Coulomb", "Farad", "Weber"]
    },
    {
        "question": "In a series circuit, if one bulb fuses, what happens to the other bulbs?",
        "answer": "They stop glowing",
        "options": ["They stop glowing", "They glow brighter", "They remain the same", "Nothing happens"]
    },
    {
        "question": "Which device stores electric charge?",
        "answer": "Capacitor",
        "options": ["Resistor", "Capacitor", "Inductor", "Transformer"]
    },
    {
        "question": "What will happen if we increase the resistance in a circuit while keeping the voltage the same?",
        "answer": "Current will decrease",
        "options": ["Current will decrease", "Current will increase", "Nothing will happen", "Power will increase"]
    },
    {
        "question": "The brain of a computer is called?",
        "answer": "CPU",
        "options": ["RAM", "CPU", "ROM", "Hard Drive"]
    },
    {
        "question": "What is the full form of HTML?",
        "answer": "Hypertext Markup Language",
        "options": ["Hypertext Markup Language", "High-Tech Machine Learning", "High Transfer Memory Log", "Home Text Machine Learning"]
    },
    {
        "question": "Which of these is NOT a programming language?",
        "answer": "Microsoft Excel",
        "options": ["Microsoft Excel", "Python", "Java", "C++"]
    },
    {
        "question": "Which of the following is a renewable source of energy?",
        "answer": "Solar energy",
        "options": ["Solar energy", "Nuclear energy", "Natural gas", "Coal"]
    },
    {
        "question": "Which bridge is used to measure unknown resistance?",
        "answer": "Wheatstone Bridge",
        "options": ["Wheatstone Bridge", "Kelvin Bridge", "Maxwell Bridge", "Wien Bridge"]
    },
    {
        "question": "The unit of inductance is?",
        "answer": "Henry",
        "options": ["Weber", "Henry", "Tesla", "Ohm"]
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "answer": "Mars",
        "options": ["Mars", "Venus", "Jupiter", "Saturn"]
    },
    {
        "question": "Who discovered the electron?",
        "answer": "J.J. Thomson",
        "options": ["J.J. Thomson", "Rutherford", "Maxwell", "Newton"]
    },
    {
        "question": "What is the hardest natural substance on Earth?",
        "answer": "Diamond",
        "options": ["Diamond", "Gold", "Iron", "Quartz"]
    },
    {
        "question": "What is the unit of frequency?",
        "answer": "Hertz",
        "options": ["Coulomb", "Hertz", "Weber", "Henry"]
    },
    {
        "question": "Which country is famous for inventing pizza?",
        "answer": "Italy",
        "options": ["Spain", "Italy", "France", "Germany"]
    },
    {
        "question": "What is the largest organ in the human body?",
        "answer": "Skin",
        "options": ["Skin", "Heart", "Liver", "Lungs"]
    },
    {
        "question": "A pump is used to lift water. What kind of energy conversion takes place?",
        "answer": "Mechanical to Potential Energy",
        "options": ["Mechanical to Potential Energy", "Electrical to Heat Energy", "Thermal to Kinetic Energy", "Light to Sound Energy"]
    },
    {
        "question": "The function of a bearing in mechanical systems is to?",
        "answer": "Reduce friction",
        "options": ["Reduce friction", "Increase speed", "Decrease efficiency", "Provide torque"]
    },
    {
        "question": "What is the full form of AI?",
        "answer": "Artificial Intelligence",
        "options": ["Artificial Intelligence", "Automated Internet", "Advanced Information", "Automated Interaction"]
    },
    {
        "question": "Which programming language is most commonly associated with AI development?",
        "answer": "Python",
        "options": ["JavaScript", "Python", "HTML", "PHP"]
    },
    {
        "question": "Which type of sensor is used to measure temperature?",
        "answer": "Thermocouple",
        "options": ["LDR", "Thermocouple", "Accelerometer", "Load cell"]
    },
    {
        "question": "Which sensor is commonly used for motion detection?",
        "answer": "PIR (Passive Infrared) sensor",
        "options": ["Temperature sensor", "PIR (Passive Infrared) sensor", "Humidity sensor", "Gas sensor"]
    },
    {
        "question": "How many bits is the 8051 microprocessor?",
        "answer": "8-bit",
        "options": ["8-bit", "16-bit", "32-bit", "64-bit"]
    },
    {
        "question": "Which of the following is an example of a discrete-time signal?",
        "answer": "Digital audio signal",
        "options": ["ECG signal", "Digital audio signal", "Speech signal", "Electromagnetic wave"]
    },
    {
        "question": "Which filter type is used to allow only high-frequency components and remove low frequencies?",
        "answer": "High-pass filter",
        "options": ["High-pass filter", "Low-pass filter", "Band-pass filter", "Notch filter"]
    },
    {
        "question": "Which color model is widely used in image processing?",
        "answer": "RGB",
        "options": ["RGB", "CMYK", "HSL", "XYZ"]
    }
];

let scoreA = 0, scoreB = 0;
let shuffledQuestions = [];  // Holds randomized questions
let buzzerPoints = 40;
let teamAName = "", teamBName = "";
let currentQuestion;

function showTeamNamesForm() {
    document.getElementById("intro-page").style.display = "none";
    document.getElementById("team-names-form").style.display = "block";
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    otherSound.play(); // Play sound for button click
    teamAName = document.getElementById("teamA").value.trim() || "Team A";
    teamBName = document.getElementById("teamB").value.trim() || "Team B";

    document.getElementById("teamAName").innerText = teamAName;
    document.getElementById("teamBName").innerText = teamBName;

    shuffledQuestions = shuffleArray([...questions]);  // Create shuffled copy

    document.getElementById("team-names-form").style.display = "none";
    document.getElementById("question-container").style.display = "block";

    loadQuestion();
}

function loadQuestion() {
    if (shuffledQuestions.length === 0) {
        document.getElementById("question").innerText = "Quiz Over!";
        document.getElementById("options").innerHTML = "";
        return;
    }

    document.getElementById("loading-spinner").style.display = "block";
    document.getElementById("question").innerText = "Loading next question...";

    setTimeout(() => {
        document.getElementById("loading-spinner").style.display = "none";
        currentQuestion = shuffledQuestions.shift(); // Store current question
        document.getElementById("question").innerText = currentQuestion.question;

        document.getElementById("options").innerHTML = currentQuestion.options
            .map(opt => `<button onclick='selectAnswer("${opt}")'>${opt}</button>`)
            .join(" ");
        document.getElementById("options").style.display = "grid";
    }, 2000);
}

function selectAnswer(selected) {
    otherSound.play(); // Play sound for button click
    if (selected === currentQuestion.answer) { // Compare with current question
        document.getElementById("question").innerText = "Select the team that answered correctly.";
        document.getElementById("options").innerHTML =
            `<button onclick='increaseScore("A")'>${teamAName}</button> 
     <button onclick='increaseScore("B")'>${teamBName}</button> 
     <button onclick='skipQuestion()'>None</button>`;
    } else {
        document.getElementById("question").innerText = "Incorrect answer! Try again.";
    }
}

function skipQuestion() {
    otherSound.play(); // Play sound for button click
    submitAnswer();
}

function animateScoreIncrease(element, start, end) {
    let current = start;
    const step = (end - start) / 20; // Control speed of animation
    const interval = setInterval(() => {
        current += step;
        element.innerText = Math.round(current);
        if (current >= end) {
            element.innerText = end;
            clearInterval(interval);
        }
    }, 50);

    // Add a glow effect for a brief moment
    element.style.transition = "0.3s";
    element.style.textShadow = "0 0 15px rgba(144, 224, 239, 0.8)";
    setTimeout(() => {
        element.style.textShadow = "none";
    }, 500);
}

// Ensure to play the click sound in other relevant places as well
function increaseScore(team) {
    newSound.play(); // Play sound for increasing score
    if (team === "A") {
        let prevScore = scoreA;
        scoreA += buzzerPoints;
        animateScoreIncrease(document.getElementById("scoreA"), prevScore, scoreA);
    } else {
        let prevScore = scoreB;
        scoreB += buzzerPoints;
        animateScoreIncrease(document.getElementById("scoreB"), prevScore, scoreB);
    }

    checkWinner();
    submitAnswer();
}

function submitAnswer() {
    if (checkWinner()) return;
    loadQuestion(); // Directly load next question
}

function checkWinner() {
    if (scoreA >= 120 || scoreB >= 120) {
        let winnerTeam = scoreA >= 120 ? teamAName : teamBName;
        document.getElementById("winner").innerText = `CONGRATULATIONS! ${winnerTeam} WINS!`;

        triggerCelebration(winnerTeam);

        // Hide the skip button, show only reset button
        document.querySelector('button[onclick="submitAnswer()"]').style.display = "none";
        document.querySelector('button[onclick="resetQuiz()"]').style.display = "block";

        return true; // Indicate that a team has won
    }
    return false;
}

function triggerCelebration(team) {
    // Hide game elements
    document.getElementById("question").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("scoreboard").style.display = "none";

    // Calculate buzzers for losing team
    const losingTeam = team === teamAName ? teamBName : teamAName;
    const losingScore = team === teamAName ? scoreB : scoreA;
    const buzzers = Math.floor(losingScore / 40);

    // Create dynamic celebration message
    const winnerElement = document.getElementById("winner");
    winnerElement.innerHTML = `
        <div class="winner-message">
            ${team} WINS!
        </div>
        <div class="sub-message">
            🎉 3 Extra Buzzers for Round 2! 🎉
        </div>
        <div class="losing-team-message">
            ${losingTeam} earned ${buzzers} buzzer${buzzers !== 1 ? 's' : ''}
        </div>
    `;

    // Add celebratory effects
    generateConfetti();
    playVictorySound(); // Ensure this is called to play the victory sound

    // Add temporary gradient border animation
    winnerElement.style.animation = 'winnerPulse 1.5s infinite';
}

function generateConfetti() {
    const colors = ['#ffd700', '#00b4d8', '#ff6b6b', '#4ecdc4'];
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.getElementById('confetti').appendChild(confetti);
    }
}

const victorySound = new Audio('celebration.mp3'); // Adjust the path as necessary
const otherSound = new Audio('click-234708.mp3'); // Adjust the path as necessary
const newSound = new Audio('cha-ching-7053.mp3'); // Adjust the path as necessary

// Load sounds to ensure they are ready to play
victorySound.load();
otherSound.load();
newSound.load();

function playVictorySound() {
    victorySound.play(); // Play the victory sound
    victorySound.volume = 0.5;
}

function resetQuiz() {
    otherSound.play(); // Play sound for button click
    let confirmReset = confirm("Are you sure you want to reset the quiz?");
    if (!confirmReset) return; // If user cancels, do nothing

    // Reset scores and current question index
    scoreA = 0;
    scoreB = 0;

    // Update UI elements
    document.getElementById("scoreA").innerText = scoreA;
    document.getElementById("scoreB").innerText = scoreB;
    document.getElementById("winner").innerText = "";
    document.getElementById("winner").style.fontSize = "30px";
    document.getElementById("question").style.display = "block";
    document.getElementById("options").style.display = "block";
    document.getElementById("scoreboard").style.display = "flex";

    // Remove confetti elements
    document.getElementById("confetti").innerHTML = "";

    // Hide quiz container and show team names form
    document.getElementById("question-container").style.display = "none";
    document.getElementById("team-names-form").style.display = "none";
    document.getElementById("intro-page").style.display = "flex"; // Show intro page

    // Reset input fields (allowing re-entry of names)
    document.getElementById("teamA").value = "";
    document.getElementById("teamB").value = "";

    // Ensure team names default if empty
    teamAName = "Team A";
    teamBName = "Team B";

    shuffledQuestions = [];  // Clear questions for fresh start
}