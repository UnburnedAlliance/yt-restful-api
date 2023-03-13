const express = require('express');

const app = express();

const UserInfo = {
   account: {
    id: "m3u7inu3m7V1mvGj8qcg", 
    asset_id: null, 
    last_used_wallet: "addr1q8ucfze9w0tf4chgrdr0rw382kwd8nj0n70nvp8jxs8qntalvkzqrtussxlqm4t89fz0h0es9u99hk22x8ggyf2yl38s63pr80", 
    account_age: "1/1/20", 
    last_login: "2/22/23", 
    status: "REGISTERED", 
    status_date: "2/22/23", 
   }, 
   profile: {
    name: "Seamoss", // No spaces or special characters allowed. Stored in the same case as typed.
    website: "https://talismo.io", 
    bio: "Lorem ipsum", 
    pic: "https://i.ibb.co/PQr9yxX/m3u7inu3m7-V1mv-Gj8qcg.png", 
    tw: "wellspringagncy", 
   }
}

let UsersList = [
    {
        account: {
         id: "m3u7inu3m7V1mvGj8qcg", 
         asset_id: null, 
         last_used_wallet: "addr1q8ucfze9w0tf4chgrdr0rw382kwd8nj0n70nvp8jxs8qntalvkzqrtussxlqm4t89fz0h0es9u99hk22x8ggyf2yl38s63pr80", 
         account_age: "1/1/20", 
         last_login: "2/22/23", 
         status: "REGISTERED", 
         status_date: "2/22/23", 
        }, 
        profile: {
         name: "Seamoss", // No spaces or special characters allowed. Stored in the same case as typed.
         website: "https://talismo.io", 
         bio: "Lorem ipsum", 
         pic: "https://i.ibb.co/PQr9yxX/m3u7inu3m7-V1mv-Gj8qcg.png", 
         tw: "wellspringagncy", 
        }
     },
     {
        account: {
         id: "fCgydaOGpRLxyMOqdRF8", 
         asset_id: null, 
         last_used_wallet: "addr1qxalxs087hq4fryzjzk03x5eey8q3zght428znymagmrwm44rm8h2z0chp0arwwef3575gup3mr4k03ssw0sjmcch8usz3cl7w", 
         account_age: "1/1/20", 
         last_login: "2/22/23", 
         status: "ACTIVE", 
         status_date: "2/22/23", 
        }, 
        profile: {
         name: "Seamoss2", // No spaces or special characters allowed. Stored in the same case as typed.
         website: "https://talismo.io", 
         bio: "Lorem ipsum number 2", 
         pic: "https://i.ibb.co/PQr9yxX/m3u7inu3m7-V1mv-Gj8qcg.png", 
         tw: "wellspringagncy", 
        }
     },
     {
        account: {
         id: "qclh96CokW3RMjJUuIFo", 
         asset_id: null, 
         last_used_wallet: "addr1q9g2ee7ctk6r07kdujuc95wcy2uggsmf3yu54ed5pwthr3drpt7vh9vv0yjgvv5llax4xyp3rmgnzdc9yz6mhanv92aqwrwwcv", 
         account_age: "1/1/20", 
         last_login: "2/22/23", 
         status: "IDLE", 
         status_date: "2/22/23", 
        }, 
        profile: {
         name: "Seamoss3", // No spaces or special characters allowed. Stored in the same case as typed.
         website: "https://talismo.io", 
         bio: "Lorem ipsum number 3", 
         pic: "https://i.ibb.co/PQr9yxX/m3u7inu3m7-V1mv-Gj8qcg.png", 
         tw: "wellspringagncy", 
        }
     }
];

/*
app.get()
app.post()
app.put()
app.delete()
*/

/*
w_id = wallet address user connected to. Search last_used_wallet of REGISTERED accounts.
a_id = account ID
t_id = token ID... the assetID of the login token associated with an account.
g_id = Serial gate ID
*/

function getKeyByValue(object, value) {
    console.log("GAH");
    return Object.keys(object).find(key => object[key] === value);
  }


// Route Handler Framework
app.get('/', (req, res) => {
    res.send('Seamoss');
});

///////////////////////////////////////////////////////         USER CALLS


// GetUserList: Brands Search Page, public
app.get('/api/accounts', (req, res) => {
    console.log("GAH")
    // ?sortby= OLD || NEW || RECENTLY ACTIVE
    // ?status = REGISTERED || ACTIVE || IDLE || OVERDUE
    // ?name = UserTable.profile.name (search by name)
    // ?tw = UserTable.profile.tw (search by twitter handle)
    // ?results = Max results to return

    let maxResults = Object.keys(req.query).findIndex(el => el == "results")
    //res.send(Object.values(req.query));
    // Static data simulates database calls for now
    //res.send(req.query["results"])
    if(req.query["results"] < 1) {
        res.send("ERROR: Requested zero results. Jackass.");
    }

    let resultArray = []
    UsersList.forEach(el => {
        resultArray.push({
            account: el.account.id, 
            name: el.profile.name, 
        })
    })
    res.send(resultArray);
})

// GetAccount: Uses a wallet address to find an account_id, first by checking last_wallet_used of all accounts in REGISTERED status, then by checking for a login token 
// and referencing the assetID of the token in assed_id of the same user_profiles table.
app.get('/api/accounts/:w_id', (req, res) => {
    UsersList.forEach(user => {
        if(user.account.last_used_wallet == req.params.w_id) {
            res.send(user);  // Might be better to send the whole user object not just the account ID.
        }
    })
    res.send("No account found for wallet")
});

// GetAccountInfo: return row from user_profiles using an account_id
app.get('/api/users/:a_id', (req, res) => {
    /*
    UsersList.forEach(user => {
        if(req.params.a_id == user.account.id) {
            res.send(user);
        }
    })
    */

    const userResult = UsersList.find(obj => obj.account.id === req.params.a_id)
    if(!userResult) {
        res.status(404).send('No account with that ID was found.')
    }
    res.send(userResult)
    //res.send("No profile data found for account ID.")
});



///////////////////////////////////////////////////////         TOKEN CALLS




///////////////////////////////////////////////////////         GATE CALLS





///////////////////////////////////////////////////////         WALLET CALLS


app.listen(3000, () => console.log('Listening on 3000'))