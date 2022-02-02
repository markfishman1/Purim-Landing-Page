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
        userMsg.style.opacity=1;
        setTimeout(()=>{
            userMsg.style.opacity=0;
        },5000)
        
    });
  });
