// Comedy page joke cycler
document.addEventListener('DOMContentLoaded', function () {
    const jokes = [
      "Why did the dolphin cross the ocean? To get to the other tide!",
      "What do you call a fish wearing a bowtie? Sofishticated!",
      "Why are dolphins so smart? They live in schools!",
      "What's a dolphin's favorite game? Swim and seek!",
      "Why did the dolphin get good grades? Because it was above the C-level!",
      "How do dolphins send messages? By whale-mail!"
    ];
  
    const jokeElement = document.querySelector('.joke');
    if (!jokeElement) return;
  
    let currentJoke = 0;
    setInterval(() => {
      jokeElement.style.opacity = 0;
      setTimeout(() => {
        jokeElement.textContent = jokes[currentJoke];
        jokeElement.style.opacity = 1;
        currentJoke = (currentJoke + 1) % jokes.length;
      }, 1000);
    }, 5000);
  });
  