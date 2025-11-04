document.getElementById('year').innerText = new Date().getFullYear();
document.getElementById('clickMe').addEventListener('click', () => {
  alert('Button clicked — site hosted!');
});