function attachEvents() {
    const url = 'https://rest-messanger.firebaseio.com/messanger.json';
    let messages = document.getElementById('messages');
    let authorInput = document.getElementById('author');
    let contentInput = document.getElementById('content');

    let sendBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');

    sendBtn.addEventListener('click', send);
    refreshBtn.addEventListener('click', refresh);

    function  send() {
        let author = authorInput.value;
        let content = contentInput.value;

        if (author && content) {
            const message = {
                author,
                content
            };

            messages.textContent += `${author}: ${content}\n`;

            fetch(url, {
                method: 'post',
                body: JSON.stringify(message)
            })
                .then(resolve => resolve.json());
        }

        authorInput.value = '';
        contentInput.value = '';
    }

    function  refresh() {
        messages.textContent = '';

        fetch(url)
            .then(request => request.json())
            .then(data => {
                const currentMessages = Object.values(data);

                for (const message of currentMessages){
                    let author = message.author;
                    let content = message.content;
                    messages.textContent += `${author}: ${content}\n`;
                }
            });
    }
}

attachEvents();