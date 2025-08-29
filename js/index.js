// Heart count function
function countHeart() {
  const heartCount = parseInt(document.getElementById("heart_count").innerText);
  const newHeartCount = heartCount + 1;

  const totalHeartCount = (document.getElementById("heart_count").innerText =
    newHeartCount);
  return totalHeartCount;
}

// Copy count function
function countCopy() {
  const copyCount = parseInt(document.getElementById("copy_count").innerText);
  const newCopyCount = copyCount + 1;

  const totalCopyCount = (document.getElementById("copy_count").innerText =
    newCopyCount);
  return totalCopyCount;
}

// Call and coin reduce count function

function callCoin(serviceName, number) {
  // const serviceName = 'National Emergency' ;
  // const number = '999'
  const coinCount = parseInt(document.getElementById("coin_count").innerText);
  if (coinCount < 20) {
    alert(
      "❌ Not enough coins! A minimum of 20 coins is required to continue."
    );
    return false;
  } else {
    alert("📞 Calling...\n" + serviceName + " at " + number);
    const newCoinCount = coinCount - 20;

    const totalCoinCount = (document.getElementById("coin_count").innerText =
      newCoinCount);

    return true;
  }
}

// Copy the number function
function copyNumber(number) {
  const textToCopy = document.getElementById(number).innerText;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

// // Call history add functionality
const historyData = [];
function callHistory() {
  const date = new Date().toLocaleTimeString();

  const historyContainer = document.getElementById("history_card_parent");
  historyContainer.innerHTML = "";

  for (const data of historyData) {
    const div = document.createElement("div");
    div.classList.add("flex", "justify-between", "items-center", "mb-2");
    div.innerHTML = `
            <div>
                <p class="font-semibold">${data.name}</p>
                <p>${data.number}</p>
            </div>
            <p>${date}</p>
        `;
    historyContainer.appendChild(div);
  }
}

// Count heart event
document
  .getElementById("emergency_heart")
  .addEventListener("click", function () {
    countHeart();
  });
document.getElementById("police_heart").addEventListener("click", function () {
  countHeart();
});
document.getElementById("fire_heart").addEventListener("click", function () {
  countHeart();
});
document
  .getElementById("ambulance_heart")
  .addEventListener("click", function () {
    countHeart();
  });
document
  .getElementById("women_Child_heart")
  .addEventListener("click", function () {
    countHeart();
  });
document
  .getElementById("anti_corruption_heart")
  .addEventListener("click", function () {
    countHeart();
  });
document
  .getElementById("electricity_heart")
  .addEventListener("click", function () {
    countHeart();
  });
document.getElementById("brac_heart").addEventListener("click", function () {
  countHeart();
});
document.getElementById("railway_heart").addEventListener("click", function () {
  countHeart();
});

// Copy button event
document
  .getElementById("copy_btn_emergency")
  .addEventListener("click", function () {
    countCopy();
    copyNumber("emergency_number");
  });
document
  .getElementById("copy_btn_police")
  .addEventListener("click", function () {
    countCopy();
    copyNumber("police_number");
  });
document.getElementById("copy_btn_fire").addEventListener("click", function () {
  countCopy();
  copyNumber("fire_number");
});
document
  .getElementById("copy_btn_ambulance")
  .addEventListener("click", function () {
    countCopy();
    copyNumber("ambulance_number");
  });
document
  .getElementById("copy_btn_women_child")
  .addEventListener("click", function () {
    countCopy();
    copyNumber("women_child_number");
  });
document
  .getElementById("copy_btn_anti_corruption")
  .addEventListener("click", function () {
    countCopy();
    copyNumber("anti_corruption_number");
  });
document
  .getElementById("copy_btn_electricity")
  .addEventListener("click", function () {
    countCopy();
    copyNumber("electricity_number");
  });
document.getElementById("copy_btn_brac").addEventListener("click", function () {
  countCopy();
  copyNumber("brac_number");
});
document
  .getElementById("copy_btn_railway")
  .addEventListener("click", function () {
    countCopy();
    copyNumber("railway_number");
  });

// Call button event
document
  .getElementById("call_btn_emergency")
  .addEventListener("click", function () {
    const count = callCoin("National Emergency", "999");
    if (count) {
      const emergency = {
        name: "National Emergency",
        number: "999",
      };
      historyData.push(emergency);
      callHistory();
    }
  });
document
  .getElementById("call_btn_police")
  .addEventListener("click", function () {
    const count = callCoin("Police", "999");
    if (count) {
      const police = {
        name: "Police Helpline",
        number: "999",
      };
      historyData.push(police);
      callHistory();
    }
  });
document.getElementById("call_btn_fire").addEventListener("click", function () {
  const count = callCoin("Fire Service", "999");
  if (count) {
    const fire = {
      name: "Fire Service",
      number: "999",
    };
    historyData.push(fire);
    callHistory();
  }
});
document
  .getElementById("call_btn_ambulance")
  .addEventListener("click", function () {
    const count = callCoin("Ambulance Service", "1994-999999");
    if (count) {
      const ambulance = {
        name: "Ambulance Service",
        number: "1994-999999",
      };
      historyData.push(ambulance);
      callHistory();
    }
  });
document
  .getElementById("call_btn_women_child")
  .addEventListener("click", function () {
    const count = callCoin("Women & Child Helpline", "109");
    if (count) {
      const childWomen = {
        name: "Women & Child Helpline",
        number: "109",
      };
      historyData.push(childWomen);
      callHistory();
    }
  });
document
  .getElementById("call_btn_anti_corruption")
  .addEventListener("click", function () {
    const count = callCoin("Anti-Corruption Helpline", "106");
    if (count) {
      const corruption = {
        name: "Anti-Corruption Helpline",
        number: "106",
      };
      historyData.push(corruption);
      callHistory();
    }
  });
document
  .getElementById("call_btn_electricity")
  .addEventListener("click", function () {
    const count = callCoin("Electricity Helpline", "16216");
    if (count) {
      const electricityHelpline = {
        name: "Electricity Helpline",
        number: "16216",
      };
      historyData.push(electricityHelpline);
      callHistory();
    }
  });
document.getElementById("call_btn_brac").addEventListener("click", function () {
  const count = callCoin("Brac Helpline", "16445");
  if (count) {
    const bracHelpline = {
      name: "Brac Helpline",
      number: "16445",
    };
    historyData.push(bracHelpline);
    callHistory();
  }
});
document
  .getElementById("call_btn_railway")
  .addEventListener("click", function () {
    const count = callCoin("Bangladesh Railway Helpline", "163");
    if (count) {
      const railwayHelpline = {
        name: "Bangladesh Railway Helpline",
        number: "163",
      };
      historyData.push(railwayHelpline);
      callHistory();
    }
  });

// Clear button functionality
document.getElementById("btn_clear").addEventListener("click", function () {
  document.getElementById("history_card_parent").innerText = "";
  historyData.length = 0;
});
