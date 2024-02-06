function notify(message) {
  const notificationBlock = document.getElementById('notification');
  notificationBlock.textContent = message;
  notificationBlock.style.display = 'block';

  notificationBlock.addEventListener('click', hide);

  function hide(event) {
    const divEl = event.target;
    divEl.style.display = 'none';
  }
}