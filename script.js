document.addEventListener("DOMContentLoaded", function() {
  const deliveryBtn = document.querySelectorAll('.icon-button')[0];
  const takeawayBtn = document.querySelectorAll('.icon-button')[1];
  const deliveryBox = document.querySelector('.delivery');
  const takeawayBox = document.querySelector('.takeaway');

  
  if (deliveryBox) deliveryBox.style.display = 'none';
  if (takeawayBox) takeawayBox.style.display = 'none';

  
  if (deliveryBtn && deliveryBox) {
    deliveryBtn.addEventListener('click', function() {
      deliveryBox.style.display = 'flex';
      if (takeawayBox) takeawayBox.style.display = 'none';
    });
  }

  if (takeawayBtn && takeawayBox) {
    takeawayBtn.addEventListener('click', function() {
      if (deliveryBox) deliveryBox.style.display = 'none';
      takeawayBox.style.display = 'flex';
    });
  }
});