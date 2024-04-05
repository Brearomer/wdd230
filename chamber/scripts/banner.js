function closeBanner(){
    document.getElementById('banner').style.display = 'none';
}

function isBannerDay(){
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 3;
} 

function displayBanner(){
    if(isBannerDay()) {
        document.getElementById('banner').style.display = 'block';
    }
} 

window.onload = displayBanner;