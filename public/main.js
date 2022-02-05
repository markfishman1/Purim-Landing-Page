var form = document.getElementById('sheetdb-form');
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        
        document.getElementById("name").value='';
        document.getElementById("email").value='';
        document.getElementById("phone").value='';
        var userMsg=document.querySelector('.user-msg');
        var radioButtons = document.querySelectorAll('input[type=radio]');
        radioButtons.forEach(radioBtn=>{
        radioBtn.checked=false;
        });
        userMsg.style.opacity=1;
        setTimeout(()=>{
            userMsg.style.opacity=0;
        },5000)
    });
  });

const singleButton=document.querySelector('input[type=radio][id=single]');
const familyButton=document.querySelector('input[type=radio][id=family]');
function checkAndUncheck(type){
    if(type==='family'){
        console.log('family');
        singleButton.checked=false;
        familyButton.checked=true;
    }else if(type==='single'){
        console.log('single');
        singleButton.checked=true;
        familyButton.checked=false;
    }
}
