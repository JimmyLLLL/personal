export function getAvailHeightHeightAppBg(){
    return window.screen.availHeight*1.48+'px'
}

export function getClientWidth(){
    return document.body.clientWidth
}

export function getAvailHeightAppMasking(){
    return (window.screen.availHeight)*0.85+'px'
}

export function getCountResult(ref,numPx){
    return ref*numPx+'px'
}