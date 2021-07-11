let num = document.querySelectorAll('.num-btn');
const res = document.querySelector('.result .final-result');


num.forEach(function (elem) {
    elem.onclick = function () {
        const numGroups = res.innerHTML.match(/[0-9.]+/g);
        const lastNumGroup = numGroups[numGroups.length-1];
        if(lastNumGroup == "0"){
            if(numGroups.length<2){
            if(elem.innerHTML == '.'){
                res.innerHTML = '0.';
            }else{
            res.innerHTML = elem.innerHTML;
            }
        }else{
            res.innerHTML += elem.innerHTML
        }
        }
        else{
            if(lastNumGroup.includes('.') && elem.innerHTML == '.'){
                res.innerHTML =res.innerHTML;
            }else{
            res.innerHTML = `${res.innerHTML}${elem.innerHTML}`;
            }
        }
    }
});

document.querySelector('#reset').onclick = ()=>{
    res.innerHTML ='0';
}

document.querySelector('#del').onclick = ()=>{
    if(res.innerHTML=='0' || res.innerHTML.length ==1){
        res.innerHTML ='0';
    }else{
        res.innerHTML = res.innerHTML.slice(0,res.innerHTML.length-1);
    }
}

const operators = ['+','-','*','/'];

const operator = document.querySelectorAll('.btn-operator');

operator.forEach(function (elem) {
    elem.onclick = function () {
        if(operators.includes(res.innerHTML[res.innerHTML.length-1])){
            res.innerHTML = res.innerHTML.slice(0,res.innerHTML.length-1) + elem.innerHTML;
        }else if(res.innerHTML.endsWith('.')){
            res.innerHTML = res.innerHTML.slice(0,res.innerHTML.length-1) + elem.innerHTML;
        }
        else{
            res.innerHTML = `${res.innerHTML}${elem.innerHTML}`; 
        }
    }
})

document.querySelector('#ans').onclick = ()=>{
    if(operators.includes(res.innerHTML[res.innerHTML.length-1])){
        res.innerHTML = res.innerHTML.slice(0,res.innerHTML.length-1);
    }
    res.innerHTML = eval(res.innerHTML);
}