

const themeToggler = document.getElementById('theme-slider');

let state = document.cookie || 'theme=theme0';

state = /theme[0-2]/.exec(state)[0];



class ColorProperties {
    constructor(htmlBg,screenHeadingText,toggleAndCalcBodyBg,toggleBtnAndEqual,delAndResetBg,btnBg,btnText,screenBg,btnShadow,delAndResetShadow,equalToShadow,euqlToBtnTextColor){
        this.htmlBg = htmlBg; 
        this.screenHeadingText = screenHeadingText; 
        this.toggleAndCalcBodyBg = toggleAndCalcBodyBg; 
        this.toggleBtnAndEqual = toggleBtnAndEqual; 
        this.delAndResetBg = delAndResetBg; 
        this.btnBg = btnBg; 
        this.btnText = btnText;
        this.screenBg = screenBg;
        this.btnShadow = btnShadow;
        this.equalToShadow = equalToShadow;
        this.delAndResetShadow = delAndResetShadow;
        this.euqlToBtnTextColor = euqlToBtnTextColor
    }
}

const theme0 = new ColorProperties('hsl(222, 26%, 31%)','hsl(0, 0, 100%)','hsl(223, 31%, 20%)','hsl(6, 63%, 50%)','hsl(225, 21%, 49%)','hsl(30, 25%, 89%)','hsl(221, 14%, 31%)','hsl(224, 36%, 15%)','hsl(28, 16%, 65%)','hsl(224, 28%, 35%)','hsl(6, 70%, 34%)','#fff')

const theme1 = new ColorProperties('hsl(0, 0%, 90%)','hsl(60, 10%, 19%)','hsl(0, 5%, 81%)','hsl(25, 98%, 40%)','hsl(185, 42%, 37%)','hsl(45, 7%, 89%)','hsl(60, 10%, 19%)','hsl(0, 0%, 93%)','hsl(35, 11%, 61%)','hsl(185, 58%, 25%)','hsl(25, 99%, 27%)','#fff');

const theme2 = new ColorProperties('hsl(268, 75%, 9%)','hsl(52, 100%, 62%)','hsl(268, 71%, 12%)','hsl(176, 100%, 44%)','hsl(281, 89%, 26%)','hsl(268, 47%, 21%)','hsl(52, 100%, 62%)','hsl(268, 71%, 12%)','hsl(290, 70%, 36%)','hsl(285, 91%, 52%)','hsl(177, 92%, 70%)','hsl(198, 20%, 13%)');

const stateManager = (themeObj)=>{
    document.documentElement.style.backgroundColor = themeObj.htmlBg;
    document.body.style.backgroundColor = themeObj.htmlBg;
    document.querySelector('main.main').style.color = themeObj.screenHeadingText;
    document.querySelectorAll('#theme-slider , .calc-parent').forEach((elem)=>{
        elem.style.backgroundColor = themeObj.toggleAndCalcBodyBg
    })
    document.querySelectorAll('button.btn').forEach(elem=>{
        elem.style.backgroundColor = themeObj.btnBg
        elem.style.boxShadow = '1px 1px 2px 2px '+themeObj.btnShadow;
    })
    document.querySelectorAll('#ans').forEach(elem=>{
        elem.style.backgroundColor = themeObj.toggleBtnAndEqual;
        elem.style.boxShadow = '1px 1px 2px 2px ' +themeObj.equalToShadow
        elem.style.color = themeObj.euqlToBtnTextColor
    })
    document.querySelectorAll('#del ,#reset').forEach(elem=>{
        elem.style.backgroundColor = themeObj.delAndResetBg
        elem.style.boxShadow = '1px 1px 2px 2px ' +themeObj.delAndResetShadow
    })
    document.querySelector('.result').style.backgroundColor = themeObj.screenBg
    document.querySelector('input').style.setProperty('--thumbColor',themeObj.toggleBtnAndEqual);
}


themeToggler.oninput = function () {
    switch(this.value) {
        case '0':
            stateManager(theme0);
            document.cookie = 'theme=theme0'
            break;
        case '1':
            stateManager(theme1)
            document.cookie = 'theme=theme1'
            break;
        case '2':
            stateManager(theme2)
            document.cookie = 'theme=theme2'
            break;
    }
}


switch(state){
    case 'theme0':
        stateManager(theme0);  
        themeToggler.value = '0'
        break;
    case 'theme1':
        stateManager(theme1)
        themeToggler.value = '1'
        break;
    case 'theme2':
        stateManager(theme2)
        themeToggler.value = '2'
        break;
}