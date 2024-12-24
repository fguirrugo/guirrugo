document.addEventListener('DOMContentLoaded', () => {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach(card => {
      card.addEventListener('click', () => {
        alert("Thank you for exploring my achievements!");
      });
    });
  });
  