function solve() {

   let targetDiv = document.getElementsByClassName('my-message')[0];
   let sendBtn = document.getElementById('send');
   let textArea = document.getElementById('chat_input');
   let chatMessagesArea = document.getElementById('chat_messages');

   sendBtn.addEventListener('click', function () {
      
      let targetDivClone = targetDiv.cloneNode(true);
      let textAreaContent = textArea.value;

      if (textAreaContent !== '') {
         targetDivClone.textContent = textAreaContent;

         chatMessagesArea.appendChild(targetDivClone);

         textArea.value = '';
      } 
   });
}


