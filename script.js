window.addEventListener('DOMContentLoaded', () => {
  const genderSelect = document.getElementById('gender');
  const periodSection = document.getElementById('periodSection');

  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const waterInput = document.getElementById('water');
  const sleepInput = document.getElementById('sleep');
  const periodInput = document.getElementById('period');
  const exerciseInput = document.getElementById('exercise');

  const bmiBar = document.getElementById('bmiBar');
  const sleepBar = document.getElementById('sleepBar');
  const waterBar = document.getElementById('waterBar');

  const bmiMeasure = document.getElementById('bmiMeasure');
  const sleepMeasure = document.getElementById('sleepMeasure');
  const waterMeasure = document.getElementById('waterMeasure');

  const bmiResult = document.getElementById('bmiResult');
  const sleepResult = document.getElementById('sleepResult');
  const waterResult = document.getElementById('waterResult');
  const periodResult = document.getElementById('periodResult');
  const exerciseComment = document.getElementById('exerciseComment');
  const routineBox = document.getElementById('routineSuggestion');

  const funExercises = [
    "Do 10 jumping jacks!",
    "Walk for 10 minutes.",
    "Stretch like a cat 🐱",
    "Dance for 5 mins to your fav song!",
    "Inhale... Exhale... x5",
    "Try 5 push-ups 💪"
  ];

  genderSelect.addEventListener('change', () => {
    periodSection.style.display = genderSelect.value === 'female' ? 'block' : 'none';
  });

  function updateWater() {
    let water = parseFloat(waterInput.value) || 0;
    let percent = Math.min((water / 5) * 100, 100);
    waterBar.style.width = percent + '%';
    waterMeasure.textContent = `${water}L`;

    if (water === 0) {
      waterResult.textContent = '';
    } else if (water >= 2) {
      waterResult.textContent = "✅ Good hydration!";
    } else {
      waterResult.textContent = "🚰 Drink a bit more water!";
    }
  }

  function updateSleep() {
    let sleep = parseFloat(sleepInput.value) || 0;
    let percent = Math.min((sleep / 12) * 100, 100);
    sleepBar.style.width = percent + '%';
    sleepMeasure.textContent = `${sleep}hr`;

    if (sleep === 0) {
      sleepResult.textContent = '';
    } else if (sleep >= 6) {
      sleepResult.textContent = "😴 You're well rested!";
    } else {
      sleepResult.textContent = "😪 Try to sleep a bit more!";
    }
  }

  function updateBMI() {
    let h = parseFloat(heightInput.value) / 100;
    let w = parseFloat(weightInput.value);
    if (h > 0 && w > 0) {
      let bmi = w / (h * h);
      let percent = Math.min((bmi / 40) * 100, 100);
      bmiBar.style.width = percent + '%';
      bmiMeasure.textContent = `${bmi.toFixed(1)}`;

      if (bmi < 18.5) {
        bmiResult.textContent = "📉 Underweight";
      } else if (bmi <= 24.9) {
        bmiResult.textContent = "✅ Normal BMI";
      } else {
        bmiResult.textContent = "📈 Overweight";
      }
    }
  }

  function updatePeriod() {
    const last = new Date(periodInput.value);
    const today = new Date();
    const diff = Math.floor((today - last) / (1000 * 60 * 60 * 24));
    const estNext = new Date(last);
    estNext.setDate(last.getDate() + 28);

    if (!isNaN(last)) {
      periodResult.textContent = `Estimated next cycle: ${estNext.toDateString()} (${diff} days since last)`;
    } else {
      periodResult.textContent = '';
    }
  }

  function updateExercise() {
    const input = exerciseInput.value.trim().toLowerCase();
    if (input === 'yes') {
      exerciseComment.textContent = "💪 You're awesome!";
    } else {
      const random1 = funExercises[Math.floor(Math.random() * funExercises.length)];
      let random2;
      do {
        random2 = funExercises[Math.floor(Math.random() * funExercises.length)];
      } while (random2 === random1);
      exerciseComment.textContent = `Try this: ${random1} & ${random2}`;
    }
  }

  function generateRoutine() {
    let messages = [];

    const water = parseFloat(waterInput.value) || 0;
    const sleep = parseFloat(sleepInput.value) || 0;
    const h = parseFloat(heightInput.value) / 100;
    const w = parseFloat(weightInput.value);
    let bmi = w > 0 && h > 0 ? w / (h * h) : null;

    if (water < 2) messages.push("- Drink at least 2L of water.");
    if (sleep < 6) messages.push("- Aim for 6–8 hours of sleep.");
    if (bmi && bmi > 24.9) {
      messages.push("- Try 30 min walking/jogging daily.");
      messages.push("- Cut down on sugar and carbs.");
    } else if (bmi && bmi < 18.5) {
      messages.push("- Eat protein-rich foods & nuts.");
    }

    if (messages.length === 0) {
      routineBox.value = "You're doing great! Keep it up 👏";
    } else {
      routineBox.value = "Suggested Routine:\n" + messages.join('\n');
    }
  }

  // Buttons
  document.getElementById('bmiBtn').addEventListener('click', () => {
    updateBMI();
    generateRoutine();
  });

  document.getElementById('waterBtn').addEventListener('click', () => {
    updateWater();
    generateRoutine();
  });

  document.getElementById('sleepBtn').addEventListener('click', () => {
    updateSleep();
    generateRoutine();
  });

  document.getElementById('periodBtn').addEventListener('click', updatePeriod);
  document.getElementById('exerciseBtn').addEventListener('click', updateExercise);
});
window.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const greeting = document.getElementById("greeting");

  if (greeting && user && user.username) {
    greeting.textContent = `Welcome, ${user.username}!`;
  }
});
document.getElementById("logoutBtn").addEventListener("click", () => {
  sessionStorage.clear(); // Clear login session
  window.location.href = "index.html"; // Redirect to login page
});

