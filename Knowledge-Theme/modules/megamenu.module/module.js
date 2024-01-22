var megamenu = document.querySelectorAll("[name='megamenu']");
for(let i = 0; i < megamenu.length; i++){
  megamenu[i].onchange = function(){
    if(this.checked == true){
      megamenu.forEach(item => item.checked = false)
      this.checked = true
    }
  }
}