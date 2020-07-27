
function showElement(e){

    var e1 = document.getElementsByClassName('intro')[0];
    var e2 = document.getElementsByClassName('exp')[0];
    var e3 = document.getElementsByClassName('projects')[0];
    var e4 = document.getElementsByClassName('contact')[0];
    if(!e1.classList.contains('hide')){
        e1.classList.add('hide');   
    }
    if(!e2.classList.contains('hide')){
        e2.classList.add('hide');   
    }
    if(!e3.classList.contains('hide')){
        e3.classList.add('hide');   
    }
    if(!e4.classList.contains('hide')){
        e4.classList.add('hide');
    }
    var showE = document.getElementsByClassName(e.id)[0];
    showE.classList.remove('hide');


}