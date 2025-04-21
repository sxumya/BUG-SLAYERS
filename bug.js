document.getElementById("symptomForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("result").textContent =
      "Analyzing your symptoms with AI... (mock response)";
  });
  const form = document.getElementById("symptomForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const symptomInput = form.querySelector("input").value.toLowerCase();
  const details = form.querySelector("textarea").value.toLowerCase();

  let response = "We need more information to provide advice.";

  if (symptomInput.includes("fever") || details.includes("fever")) {
    response = "You may be experiencing an infection. Drink fluids, rest, and monitor temperature. Consider a doctor if it persists over 3 days.";
  } else if (symptomInput.includes("headache") || details.includes("headache")) {
    response = "Headaches could be due to dehydration, stress, or screen fatigue. Take rest, hydrate, and avoid bright lights.";
  } else if (symptomInput.includes("cough") || details.includes("cough")) {
    response = "If it's a dry cough, try warm fluids. If it's persistent or with mucus, it may be respiratory. See a doctor if it lasts more than 5 days.";
  } else if (symptomInput.includes("cold") || details.includes("cold")) {
    response = "It could be a common cold. Rest, stay warm, and hydrate. Use steam inhalation if congested.";
  } else if (symptomInput.includes("stomach") || details.includes("pain")) {
    response = "Stomach issues may be diet-related. Monitor meals. Avoid oily food. If pain is sharp, visit a physician.";
  }

  result.textContent = response;
});




document.getElementById("chatSend").addEventListener("click", function () {
    const userMessage = document.getElementById("chatInput").value.toLowerCase();
    const responseBox = document.getElementById("chatResponse");
  
    let reply = "Sorry, I couldn't understand. Can you ask differently?";
  
    if (userMessage.includes("diet")) {
      reply = "For a balanced diet, include protein, whole grains, fruits, and plenty of water. Avoid processed sugar.";
    } else if (userMessage.includes("exercise")) {
      reply = "Try 30 mins of moderate exercise like walking, yoga, or stretching every day to stay healthy.";
    } else if (userMessage.includes("sleep")) {
      reply = "Aim for 7–9 hours of quality sleep. Avoid screens an hour before bedtime for better rest.";
    } else if (userMessage.includes("mental") || userMessage.includes("stress")) {
      reply = "For mental wellness, try meditation, deep breathing, or talking to a counselor if needed.";
    } else if (userMessage.includes("covid") || userMessage.includes("corona")) {
      reply = "Symptoms of COVID-19 include fever, cough, and loss of smell. Isolate and consult a health provider.";
    }
  
    responseBox.innerHTML = `<p><strong>You:</strong> ${userMessage}</p><p><strong>AI:</strong> ${reply}</p>`;
  
    // Optional: speak the reply
    const speech = new SpeechSynthesisUtterance(reply);
    window.speechSynthesis.speak(speech);
  });

  

    
  
  


  