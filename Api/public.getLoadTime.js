window.onload = function getLoadTime() {
    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
    console.log('Page load time is '+ loadTime);
    return loadTime;
}
/*function getLoadTime(){
    return loadTime;
}*/
