// Heart count function
function countHeart(){
    const heartCount = parseInt(document.getElementById('heart_count').innerText) ;
    const newHeartCount = heartCount + 1 ;

    const totalHeartCount = document.getElementById('heart_count').innerText = newHeartCount ;
    return totalHeartCount ;
}

// Copy count function
function countCopy(){
    const copyCount = parseInt(document.getElementById('copy_count').innerText) ;
    const newCopyCount = copyCount + 1 ;

    const totalCopyCount = document.getElementById('copy_count').innerText = newCopyCount ;
    return totalCopyCount ;
}

// Coin count function
function countCoin(serviceName, number){
    // const serviceName = 'National Emergency' ;
    // const number = '999'
    alert('Calling ' + serviceName + ' at '+ number) ;
    const coinCount = parseInt(document.getElementById('coin_count').innerText) ;
    if(coinCount >= 20){
        const newCoinCount = coinCount - 20 ;

        const totalCoinCount = document.getElementById('coin_count').innerText = newCoinCount ;
        return totalCoinCount ;
    }
    else{
        alert('Not enough coins! A minimum of 20 coins is required to continue.')
    }
}
// Copy the number function
function copyNumber(number){
    const textToCopy = document.getElementById(number).innerText;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert('Text copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}

// Count heart event
document.getElementById('emergency_heart').addEventListener('click', function(){
    countHeart() ;
})
document.getElementById('police_heart').addEventListener('click', function(){
    countHeart() ;
})
document.getElementById('fire_heart').addEventListener('click', function(){
    countHeart() ;
})
document.getElementById('ambulance_heart').addEventListener('click', function(){
    countHeart() ;
})
document.getElementById('women_Child_heart').addEventListener('click', function(){
    countHeart() ;
})
document.getElementById('anti_corruption_heart').addEventListener('click', function(){
    countHeart() ;
})
document.getElementById('electricity_heart').addEventListener('click', function(){
    countHeart() ;
})
document.getElementById('brac_heart').addEventListener('click', function(){
    countHeart() ;
})
document.getElementById('railway_heart').addEventListener('click', function(){
    countHeart() ;
})


// Copy button event
document.getElementById('copy_btn_emergency').addEventListener('click', function(){
    countCopy() ;
    copyNumber('emergency_number');
})
document.getElementById('copy_btn_police').addEventListener('click', function(){
    countCopy() ;
    copyNumber('police_number');
})
document.getElementById('copy_btn_fire').addEventListener('click', function(){
    countCopy() ;
    copyNumber('fire_number');
})
document.getElementById('copy_btn_ambulance').addEventListener('click', function(){
    countCopy() ;
    copyNumber('ambulance_number');
})
document.getElementById('copy_btn_women_child').addEventListener('click', function(){
    countCopy() ;
    copyNumber('women_child_number');
})
document.getElementById('copy_btn_anti_corruption').addEventListener('click', function(){
    countCopy() ;
    copyNumber('anti_corruption_number');
})
document.getElementById('copy_btn_electricity').addEventListener('click', function(){
    countCopy() ;
    copyNumber('electricity_number');
})
document.getElementById('copy_btn_brac').addEventListener('click', function(){
    countCopy() ;
    copyNumber('brac_number');
})
document.getElementById('copy_btn_railway').addEventListener('click', function(){
    countCopy() ;
    copyNumber('railway_number');
})



// Call button event
document.getElementById('call_btn_emergency').addEventListener('click', function(){
    countCoin('National Emergency', '999')
})
document.getElementById('call_btn_police').addEventListener('click', function(){
    countCoin('Police', '999')
})
