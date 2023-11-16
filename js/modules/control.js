export const textDelay = (input, text) => {
  let timerId;

  const updateParagrap = () => text.textContent = input.value;

  input.addEventListener('input', () => {
    clearInterval(timerId);
    
    timerId = setTimeout(updateParagrap, 300);
  });
}
