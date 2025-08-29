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
  alert("📞Calling...\n" + serviceName + " at " + number);
  const coinCount = parseInt(document.getElementById("coin_count").innerText);
  if (coinCount >= 20) {
    const newCoinCount = coinCount - 20;

    const totalCoinCount = (document.getElementById("coin_count").innerText =
      newCoinCount);
    return totalCoinCount;
  } else {
    alert("Not enough coins! A minimum of 20 coins is required to continue.");
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
function callHistory(){
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
    callCoin("National Emergency", "999");
    const emergency = {
      name: "National Emergency",
      number: "999",
    };
    historyData.push(emergency) ;
    callHistory();
    
  });
document
  .getElementById("call_btn_police")
  .addEventListener("click", function () {
    callCoin("Police", "999");
     const police = {
      name: "Police Helpline",
      number: "999",
    };
    historyData.push(police) ;
    callHistory();
  });
document
  .getElementById("call_btn_fire")
  .addEventListener("click", function () {
    callCoin("Fire Service", "999");
    const fire = {
      name: "Fire Service",
      number: "999",
    };
    historyData.push(fire) ;
    callHistory();
});
document
  .getElementById("call_btn_ambulance")
  .addEventListener("click", function () {
    callCoin("Ambulance Service", "1994-999999");
     const ambulance = {
      name: "Ambulance Service",
      number: "1994-999999",
    };
    historyData.push(ambulance) ;
    callHistory();
  });
document
  .getElementById("call_btn_women_child")
  .addEventListener("click", function () {
    callCoin("Women & Child Helpline", "109");
    const womenChild = {
      name: "Women & Child Helpline",
      number: "109",
    };
    historyData.push(womenChild) ;
    callHistory();
  });
document
  .getElementById("call_btn_anti_corruption")
  .addEventListener("click", function () {
    callCoin("Anti-Corruption Helpline", "106");
    const antiCorruption = {
      name: "Anti-Corruption Helpline",
      number: "106",
    };
    historyData.push(antiCorruption) ;
    callHistory();
  });
document
  .getElementById("call_btn_electricity")
  .addEventListener("click", function () {
    callCoin("Electricity Helpline", "16216");
    const electricity = {
      name: "Electricity Helpline",
      number: "16216",
    };
    historyData.push(electricity) ;
    callHistory();
  });
document
 .getElementById("call_btn_brac")
 .addEventListener("click", function () {
   callCoin("Brac Helpline", "16445");
    const brac = {
      name: "Brac Helpline",
      number: "16445",
    };
    historyData.push(brac) ;
    callHistory();
});
document
  .getElementById("call_btn_railway")
  .addEventListener("click", function () {
    callCoin("Bangladesh Railway Helpline", "163");
    const railway = {
      name: "Bangladesh Railway Helpline",
      number: "163",
    };
    historyData.push(railway) ;
    callHistory();
    
  });

// Clear button functionality
document.getElementById("btn_clear").addEventListener("click", function () {
  document.getElementById("history_card_parent").innerText = "";
  historyData.length = 0;
});

