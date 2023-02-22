const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message: 'Fuck you',
        user_detail: {
            last_used_wallet: "addr1q8ucfze9w0tf4chgrdr0rw382kwd8nj0n70nvp8jxs8qntalvkzqrtussxlqm4t89fz0h0es9u99hk22x8ggyf2yl38s63pr80",
            first_used_date: "07/01/22",
            displayname: "Seamoss Online",
            website: "talismo.io",
            shortbio: "Fuck Cinnamon Bun. Seriously, fuck that motherfucking cokehead piece of shit.",
            profilepic: "https://randomuser.me/api/portraits/men/".concat((Math.floor(Math.random() * 100)),".jpg"),
            twitterhandle: "wellspringagncy",
            status: "REGISTERED",
            status_date: "02/22/23"
        }
    });
});

module.exports = app;