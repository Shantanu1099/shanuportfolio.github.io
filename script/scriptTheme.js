// console.log("Back to JS baby ");
let theme=localStorage.getItem('theme');
if(theme==null){
    setTheme('dark');
}
else{
    setTheme(theme);
}
let themeDots=document.getElementsByClassName('theme-dot');
for(let i=0;i<themeDots.length;i++){
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode;
        console.log("option clicked : ", mode);
        setTheme(mode);
    })
}
function setTheme(mode){
if(mode=='light'){
document.getElementById('theme-style').href='style.css'
}
if(mode=='dark'){
    document.getElementById('theme-style').href='style/dark.css'
    }
if(mode=='blue'){
    document.getElementById('theme-style').href='style/blue.css';
    }

if(mode=='green'){
        document.getElementById('theme-style').href='style/green.css'
        }
if(mode=='purple'){
            document.getElementById('theme-style').href='style/purple.css'
            }
            localStorage.setItem('theme',mode);
}
