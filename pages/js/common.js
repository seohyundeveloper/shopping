const phoneBtn = document.querySelector('.phone > button');
const phoneList = document.querySelector('.phone__list');

const handleTelList  = () =>{
  phoneList.classList.toggle("--active");
}

phoneBtn.addEventListener('click', handleTelList);


//dialog tag 오픈할때 :show()
//dialog tag 오픈할때 (with dimmed):showModal()
//dialog tag close : close()
const dialogAlert = document.querySelector('.dialog.alert');
const btnAlert = document.querySelector(".open-alert");
btnAlert.addEventListener('click', () =>{
 // dialogAlert.show();
  dialogAlert.showModal();
  // setTimeout(() => {
  //   dialogAlert.close();
  // }, 3000);
});

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click' , () =>{
  dialogAlert.close();
});


//tab기능 정의

const navItem = document.querySelectorAll('.tab-type1 li');
let selectedItem = document.querySelector('.--active');

navItem.forEach((el) => {
  el.addEventListener('click', () => {
    selectedItem.classList.remove("--active");
    el.classList.add('--active');
    selectedItem = document.querySelector('.--active');
  })
})

 //새로운 페이지 이동하기
 const goCreate = () => {
  window.location.href = "https://www.naver.com";
}


//패스워드 보이게 
const passwordInput = document.querySelector('.hide-password');
const showPasswordBtn = document.querySelector('.show-btn');

const toggle = (e) => {
  e.target.classList.toggle('show');

  if(e.target.classList.contains('show')) {
    passwordInput.setAttribute('type', 'text');
  } else {
    passwordInput.setAttribute('type', 'password');
  }
}

showPasswordBtn.addEventListener('click', toggle);