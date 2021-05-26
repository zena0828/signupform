
function A() {
  var id=document.querySelector('input[name="name1"]');
  var name=document.querySelector('input[name="name2"]');
  var birth=document.querySelector('input[name="birth"]');
  var a=document.querySelector('input[name="password1"]');
  var b=document.querySelector('input[name="password2"]');
  var c=document.querySelector('input[name="gender"]');

  if(a.value !== b.value) {
    alert("패스워드가 일치하지 않습니다.");
  }else {
    console.log(String(id.value));
    console.log(String(a.value));
    console.log(String(b.value));
    console.log(String(name.value));
    console.log(String(birth.value));
    console.log(String(c.value));
  }
}
