
    const chatItems = document.querySelectorAll('.chat-item');

    chatItems.forEach(item => {
      item.addEventListener('click', () => {
        chatItems.forEach(i => i.style.background = 'transparent');
        item.style.background = '#1d2140';
      });
    });

    const sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', () => {
      sendBtn.innerHTML = '✓';

      setTimeout(() => {
        sendBtn.innerHTML = '➤';
      }, 1500);
    });


function toggleRightPanel() {
  const panel = document.getElementById('rightPanel');
  panel.classList.toggle('collapsed');
}



    