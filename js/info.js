let appInfo=document.getElementById('appInfo');
let infoSection=document.getElementById('infoSection');
let infoClose=document.getElementById('closeInfo');
    
function infoClicked(){
    infoSection.classList.remove('d-none');
    infoSection.classList.add('d-flex');
}
function closedInfo(){
    infoSection.classList.remove('d-flex');
    infoSection.classList.add('d-none');
}

infoClose.onclick=function(){
    closedInfo();
}
appInfo.onclick=function(){
    infoClicked();
}