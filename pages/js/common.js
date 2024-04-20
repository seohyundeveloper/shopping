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

