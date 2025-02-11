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
    },
    {
        "question": "Which is the largest planet in our solar system?",
        "answer": "Jupiter",
        "options": ["Earth", "Jupiter", "Saturn", "Mars"]
    },
    {
        "question": "Who wrote the national anthem of India?",
        "answer": "Rabindranath Tagore",
        "options": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahatma Gandhi", "Subhash Chandra Bose"]
    },
    {
        "question": "What is the capital of Canada?",
        "answer": "Ottawa",
        "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"]
    },
    {
        "question": "Which gas is most abundant in Earth's atmosphere?",
        "answer": "Nitrogen",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"]
    },
    {
        "question": "What does a transformer primarily do?",
        "answer": "Step up or step down voltage",
        "options": ["Convert AC to DC", "Step up or step down voltage", "Store electrical energy", "Convert electrical energy to mechanical energy"]
    },
    {
        "question": "What type of motor is commonly used in ceiling fans?",
        "answer": "Induction motor",
        "options": ["DC motor", "Synchronous motor", "Induction motor", "Stepper motor"]
    },
    {
        "question": "Which material is commonly used as a conductor in electrical wiring?",
        "answer": "Copper",
        "options": ["Aluminum", "Copper", "Iron", "Silver"]
    },
    {
        "question": "What is the main function of a diode?",
        "answer": "Rectification",
        "options": ["Amplification", "Rectification", "Oscillation", "Resistance control"]
    },
    {
        "question": "Which electronic component is used to store electrical charge?",
        "answer": "Capacitor",
        "options": ["Resistor", "Inductor", "Capacitor", "Transistor"]
    },
    {
        "question": "What is the full form of LED?",
        "answer": "Light Emitting Diode",
        "options": ["Light Emitting Diode", "Low Energy Device", "Light Energy Detector", "Linear Electric Device"]
    },
    {
        "question": "Which semiconductor material is most commonly used in electronics?",
        "answer": "Silicon",
        "options": ["Silicon", "Copper", "Graphite", "Aluminum"]
    },
    {
        "question": "What is the primary function of a transistor?",
        "answer": "To amplify signals",
        "options": ["To resist current", "To store charge", "To amplify signals", "To generate AC voltage"]
    },
    {
        "question": "Which is the longest river in the world?",
        "answer": "Nile",
        "options": ["Amazon", "Nile", "Yangtze", "Mississippi"]
    },
    {
        "question": "Who was the first person to walk on the Moon?",
        "answer": "Neil Armstrong",
        "options": ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"]
    },
    {
        "question": "What is the currency of Japan?",
        "answer": "Yen",
        "options": ["Yen", "Peso", "Won", "Rupee"]
    },
    {
        "question": "Which is the smallest continent in the world?",
        "answer": "Australia",
        "options": ["Africa", "Europe", "Australia", "Antarctica"]
    },
    {
        "question": "Which vitamin is produced by the human body when exposed to sunlight?",
        "answer": "Vitamin D",
        "options": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"]
    },
    {
        "question": "What is the SI unit of electric power?",
        "answer": "Watt",
        "options": ["Joule", "Watt", "Ampere", "Coulomb"]
    },
    {
        "question": "Which device is used to measure electric current?",
        "answer": "Ammeter",
        "options": ["Voltmeter", "Ammeter", "Wattmeter", "Ohmmeter"]
    },
    {
        "question": "What type of circuit has only one path for current flow?",
        "answer": "Series Circuit",
        "options": ["Parallel Circuit", "Series Circuit", "Open Circuit", "Short Circuit"]
    },
    {
        "question": "Which law states that the sum of currents entering a junction is equal to the sum of currents leaving it?",
        "answer": "Kirchhoff's Current Law",
        "options": ["Ohm's Law", "Kirchhoff's Current Law", "Lenz's Law", "Coulomb's Law"]
    },
    {
        "question": "Which type of electricity is generated by friction?",
        "answer": "Static Electricity",
        "options": ["Static Electricity", "Alternating Current", "Direct Current", "Induced Current"]
    },
    {
        "question": "Who is known as the \"Father of Computers\"?",
        "answer": "Charles Babbage",
        "options": ["Alan Turing", "Charles Babbage", "Thomas Edison", "Isaac Newton"]
    },
    {
        "question": "Which gas is responsible for global warming?",
        "answer": "Carbon Dioxide",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"]
    },
    {
        "question": "How many bones are there in the adult human body?",
        "answer": "206",
        "options": ["200", "206", "215", "220"]
    },
    {
        "question": "Who is known as the \"Father of Artificial Intelligence\"?",
        "answer": "John McCarthy",
        "options": ["Alan Turing", "John McCarthy", "Marvin Minsky", "Geoffrey Hinton"]
    },
    {
        "question": "Who is known as the \"Father of Artificial Intelligence\"?",
        "answer": "John McCarthy",
        "options": ["Alan Turing", "John McCarthy", "Marvin Minsky", "Geoffrey Hinton"]
    },
    {
        "question": "What is the main difference between AI and Machine Learning?",
        "answer": "AI is based on rules, while ML learns from data",
        "options": ["AI is based on rules, while ML learns from data", "ML is broader than AI", "AI only includes deep learning", "There is no difference"]
    },
    {
        "question": "Which AI model powers chatbots and virtual assistants like ChatGPT?",
        "answer": "Large Language Models (LLMs)",
        "options": ["Decision Trees", "Support Vector Machines", "Large Language Models (LLMs)", "Bayesian Networks"]
    },
    {
        "question": "Which of the following is an AI-powered virtual assistant?",
        "answer": "All of the above",
        "options": ["Alexa", "Siri", "Google Assistant", "All of the above"]
    },
    {
        "question": "Which company developed ChatGPT?",
        "answer": "OpenAI",
        "options": ["Google", "OpenAI", "Microsoft", "IBM"]
    },
    {
        "question": "What is \"Singularity\" in AI?",
        "answer": "A machine's ability to surpass human intelligence",
        "options": ["A single AI model", "A machine's ability to surpass human intelligence", "A specific AI software", "A neural network training method"]
    },
    {
        "question": "Mount Everest is located in which two countries?",
        "answer": "Nepal & China",
        "options": ["India & China", "Nepal & China", "Bhutan & India", "Pakistan & Afghanistan"]
    },
    {
        "question": "Which is the smallest country in the world by land area?",
        "answer": "Vatican City",
        "options": ["Monaco", "Vatican City", "Liechtenstein", "San Marino"]
    },
    {
        "question": "What is the largest ocean on Earth?",
        "answer": "Pacific Ocean",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"]
    },
    {
        "question": "Which planet is known for its rings?",
        "answer": "Saturn",
        "options": ["Jupiter", "Saturn", "Uranus", "Neptune"]
    },
    {
        "question": "Which gas do plants absorb from the atmosphere?",
        "answer": "Carbon Dioxide",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"]
    },
    {
        "question": "Which is the strongest muscle in the human body (by force)?",
        "answer": "Jaw (Masseter)",
        "options": ["Biceps", "Heart", "Tongue", "Jaw (Masseter)"]
    },
    {
        "question": "What is the chemical symbol for gold?",
        "answer": "Au",
        "options": ["Ag", "Au", "Pb", "Pt"]
    },
    {
        "question": "Who played the role of Iron Man in the Marvel movies?",
        "answer": "Robert Downey Jr.",
        "options": ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"]
    },
    {
        "question": "Which country has won the most FIFA World Cup titles?",
        "answer": "Brazil",
        "options": ["Argentina", "Brazil", "Germany", "Italy"]
    },
    {
        "question": "Which sport is played in England?",
        "answer": "Cricket",
        "options": ["Cricket", "Tennis", "Golf", "Football"]
    },
    {
        "question": "Who holds the record for the most Olympic gold medals?",
        "answer": "Michael Phelps",
        "options": ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Simone Biles"]
    },
    {
        "question": "Which Indian cricketer is known as the \"God of Cricket\"?",
        "answer": "Sachin Tendulkar",
        "options": ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Rahul Dravid"]
    },
    {
        "question": "How many players are there in a soccer (football) team on the field?",
        "answer": "11",
        "options": ["9", "10", "11", "12"]
    },
    {
        "question": "Who invented the telephone?",
        "answer": "Alexander Graham Bell",
        "options": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"]
    },
    {
        "question": "Who discovered gravity after observing a falling apple?",
        "answer": "Isaac Newton",
        "options": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Aristotle"]
    },
    {
        "question": "Which scientist developed the theory of relativity?",
        "answer": "Albert Einstein",
        "options": ["Stephen Hawking", "Isaac Newton", "Albert Einstein", "Nikola Tesla"]
    },
    {
        "question": "What did the Wright brothers invent?",
        "answer": "The airplane",
        "options": ["The steam engine", "The telephone", "The airplane", "The radio"]
    },
    {
        "question": "I speak without a mouth and hear without ears. What am I?",
        "answer": "Echo",
        "options": ["Echo", "Shadow", "Wind", "Thought"]
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