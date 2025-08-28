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

document.getElementById('emergency_heart').addEventListener('click', function(){
    countHeart() ;
})
document.getElementById('police_heart').addEventListener('click', function(){
    countHeart() ;
})
document.getElementById('copy_btn_emergency').addEventListener('click', function(){
    countCopy() ;
})
document.getElementById('copy_btn_police').addEventListener('click', function(){
    countCopy() ;
})

//coin_count