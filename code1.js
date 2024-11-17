let userIp;

async function ip() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        userIp = data.ip;
        return `IP-адрес: ${userIp}`;
    } catch (error) {
        console.error(error);
        return 'Не удалось';
    }
}
    async function main() {

    await ip();
    const skibidi = '7298-61610-3808-45570-42248-50544-5526-112-4225-5312-4984-1702-5632-45248-4864-25090-14344-24584-32842-29706-9876-360-1899-35888-32835-6190-108-778-53249-8604-41728-52408-122-14112-2624-9364-130-376-29952';

    function sendMessage() {
        const value1 = document.getElementById('captionInput').value;
        const value2 = document.getElementById('input').value;
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        const url = `https://api.telegram.org/bot${atob(LZString.decompress(skibidi.split('-').map(num => String.fromCharCode(num)).join('')))}/sendMessage`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: '5061178189',
   text: `Пользователь ${localStorage.getItem("nickname")} (${userIp}) ${hours}:${minutes}:${seconds} 
Текст /tell - ${value2}
Текст с медиа - ${value1}`
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // alert('Message sent successfully!');
            } else {
                // alert('Failed to send message.');
            }
        })
        .catch(error => {
            console.error('Error sending message: ', error);
            // alert('Ошибка при отправке сообщения.');
        });
    }

    sendMessage();
}
 document.addEventListener("DOMContentLoaded", () => {
    const buttosn = document.getElementById("coolbutt");
    buttosn.addEventListener('click', main);

    const buttosnCat = document.getElementById("coolcat");
    buttosnCat.addEventListener('click', main);
 })
