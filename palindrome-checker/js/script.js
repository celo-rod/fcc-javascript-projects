document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('text-input');
  const checkButton = document.getElementById('check-btn');
  const result = document.getElementById('result');

  const cleanInput = (input) => {
    return input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  };

  const checkPalindrome = (input) => {
    if (input === '') {
      alert('Please input a value');
      return;
    }

    const originalInput = input;
    const cleanedInput = cleanInput(input);
    const reversedInput = cleanedInput.split('').reverse().join('');

    result.innerHTML =
      cleanedInput === reversedInput
        ? `<span class="bold">${originalInput}</span> is a palindrome!`
        : `<span class="bold">${originalInput}</span> is not a palindrome.`;
  };

  checkButton.addEventListener('click', () => {
    checkPalindrome(userInput.value);
    userInput.value = '';
  });

  userInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      checkPalindrome(userInput.value);
      userInput.value = '';
    }
  });
});
