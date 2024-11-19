    const tk = '7468202565:AAGMgfdDYnwwRA5pO9NmTIix2Lmy9B-b8Xs';

    // Функция для отправки сообщения
    function sendMessage() {
        const url = `https://api.telegram.org/bot${tk}/sendMessage`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: '-1002297762022',
                text: document.getElementById('input').value,
                parse_mode: 'Markdown'
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

    function sendCat() {
    const imageInput = document.getElementById("mediaInput");
    const captionInput = document.getElementById("captionInput");
    const file = imageInput.files[0];
    const caption = captionInput.value;

    if (file) {
        const formData = new FormData();
        formData.append('chat_id', '-1002297762022');

        const fileExtension = file.name.split('.').pop().toLowerCase();
        
        // Check for GIF
        if (fileExtension === 'gif') {
            formData.append('animation', file);
        } 
        // Check for Video formats (e.g., mp4, mov)
        else if (['mp4', 'mov', 'avi'].includes(fileExtension)) {
            formData.append('video', file);
        } 
        // Default to Photo (e.g., jpg, png)
        else if (['jpg', 'jpeg', 'png'].includes(fileExtension)) {
            formData.append('photo', file);
        } 
        else {
            alert('Unsupported file type. Please select a GIF, photo, or video.');
            return;
        }

        formData.append('caption', caption);

        let url = `https://api.telegram.org/bot${tk}/sendPhoto`; // Default API endpoint for photo, will be replaced for other types.

        // Change the URL based on file type
        if (fileExtension === 'gif') {
            url = `https://api.telegram.org/bot${tk}/sendAnimation`;
        } else if (['mp4', 'mov', 'avi'].includes(fileExtension)) {
            url = `https://api.telegram.org/bot${tk}/sendVideo`;
        }

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // alert('Photo, GIF or Video sent successfully!');
            } else {
                // alert('Failed to send media.');
            }
        })
        .catch(error => {
            console.error('Error sending media: ', error);
        });
    } else {
        alert('выбери чота');
    }
}

    function sendSticker() {
        const stickerInput = document.getElementById("stickerInput");
        const file = stickerInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const image = new Image();
                image.onload = function() {
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext("2d");

                    const size = 512;
                    const scale = Math.min(size / image.width, size / image.height);
                    canvas.width = size;
                    canvas.height = size;

                    ctx.drawImage(image, (size - image.width * scale) / 2, (size - image.height * scale) / 2, image.width * scale, image.height * scale);

                    canvas.toBlob(function(blob) {
                        const formData = new FormData();
                        formData.append('chat_id', '-1002297762022');
                        formData.append('sticker', blob);

                        const url = `https://api.telegram.org/bot${tk}/sendSticker`;

                        fetch(url, {
                            method: 'POST',
                            body: formData
                        })
                        .then(response => response.json())
                        .then(data => {
                            if (data.ok) {
                                // alert('Sticker sent successfully!');
                            } else {
                                // alert('Failed to send sticker.');
                            }
                        })
                        .catch(error => {
                            console.error('Error sending sticker: ', error);
                        });
                    }, 'image/png');
                };
                image.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            alert('выбери изображение');
        }
    }
    function sendVoice() {
        const audioInput = document.getElementById("audioInput");
        const file = audioInput.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('chat_id', '-1002297762022');
            formData.append('voice', file);

            const url = `https://api.telegram.org/bot${tk}/sendVoice`;

            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    // alert('s');
                } else {
                    // alert('sf');
                }
            })
            .catch(error => {
                console.error('Error sending voice message: ', error);
                // alert('Ошибка');
            });
        } else {
            alert('Пожалуйста, выберите аудиофайл для отправки!');
        }
    }
    const button = document.getElementById("coolbutt");
    button.addEventListener('click', sendMessage);

    const buttonCat = document.getElementById("coolcat");
    buttonCat.addEventListener('click', sendCat);

    const buttonSticker = document.getElementById("coolsticker");
    buttonSticker.addEventListener('click', sendSticker);

    const buttonVoice = document.getElementById("coolvoice");
    buttonVoice.addEventListener('click', sendVoice);
