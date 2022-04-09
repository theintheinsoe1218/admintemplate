var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

const getyear=document.getElementById('getyear');
const date=new Date();
const getfullyear=date.getFullYear();
getyear.textContent=getfullyear;