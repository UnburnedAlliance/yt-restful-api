const express = require('express');

const app = express();


///////////////////////////////////////////////////////         FAUX STATIC DATA

/////////////////////////////////////////////         USER DATA (user_profiles)

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

/////////////////////////////////////////////         WALLET DATA (internal_balances)
let walletList = [
    {
        internal_address: "1111111111",
        account_id: "m3u7inu3m7V1mvGj8qcg", 
        last_dep_date: "6/25/22", 
        last_dep_amt: 5, 
        last_dep_from: "addr1q8ucfze9w0tf4chgrdr0rw382kwd8nj0n70nvp8jxs8qntalvkzqrtussxlqm4t89fz0h0es9u99hk22x8ggyf2yl38s63pr80", 
        next_charge_date: null, 
        account_status: "REGISTERED", 
        service_tier: "FREE", 
        gatekey_queries_remaining: 500, 
        free_tier_expires: "7/25/22", 
    },
    {
        internal_address: "222222222",
        account_id: "fCgydaOGpRLxyMOqdRF8", 
        last_dep_date: "1/1/23", 
        last_dep_amt: 10, 
        last_dep_from: "addr1qxalxs087hq4fryzjzk03x5eey8q3zght428znymagmrwm44rm8h2z0chp0arwwef3575gup3mr4k03ssw0sjmcch8usz3cl7w", 
        next_charge_date: null, 
        account_status: "REGISTERED", 
        service_tier: "FREE", 
        gatekey_queries_remaining: 500, 
        free_tier_expires: "1/31/23", 
    },
    {
        internal_address: "333333333",
        account_id: "qclh96CokW3RMjJUuIFo", 
        last_dep_date: "6/25/22", 
        last_dep_amt: 30, 
        last_dep_from: "addr1q9g2ee7ctk6r07kdujuc95wcy2uggsmf3yu54ed5pwthr3drpt7vh9vv0yjgvv5llax4xyp3rmgnzdc9yz6mhanv92aqwrwwcv", 
        next_charge_date: null, 
        account_status: "REGISTERED", 
        service_tier: "FREE", 
        gatekey_queries_remaining: 500, 
        free_tier_expires: "3/5/23", 
    },
]


const tierConfigs = {
    0: {
        name: "FREE", 
        price: 0, 
        expiry_days: 30, 
        deletion_days: 90, 
        max_credits: 1000, 
        max_gates: 1, 
    }, 
    1: {
        name: "STARTER", 
        price: 12, 
        expiry_days: 30, 
        deletion_days: 0, 
        max_credits: 10000, 
        max_gates: 5, 
    }, 
    2: {
        name: "COMMUNITY", 
        price: 50, 
        expiry_days: 30, 
        deletion_days: 0, 
        max_credits: 100000, 
        max_gates: 50, 
    }, 
    3: {
        name: "ENTERPRISE", 
        price: 300, 
        expiry_days: 30, 
        deletion_days: 0, 
        max_credits: -1, // UNLIMITED
        max_gates: -1,  // UNLIMITED
    }, 
    
}

/////////////////////////////////////////////         GATE DATA (gate_list, gate_payloads)


/////////////////////////////////////////////         TOKEN DATA (active_nfts)


/////////////////////////////////////////////         OTHER FUNCTIOJNS

function getKeyByValue(object, value) {
    console.log("GAH");
    return Object.keys(object).find(key => object[key] === value);
  }


/////////////////////////////////////////////         Route Handler Framework
app.get('/', (req, res) => {
    res.send('Seamoss');
});


///////////////////////////////////////////////////////         USER CALLS


// GetAccountsList
app.get('/api/users', (req, res) => {
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

// GetProfileInfo: return row from user_profiles using an account_id
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


app.get('/api/users/update/:a_id', (req, res) => {
    const options = { 
        account: req.params.a_id, 
        name: req.query.name, 
        website: req.query.website, 
        bio: req.query.bio, 
        pic: req.query.pic, 
        tw: req.query.tw, 
    }

    let account = Object.values(walletList).find(wallet => wallet.account_id == options.account);  

    // Update account
    let ind = walletList.map(item => item.account_id).indexOf(options.account)
    if(options.name) UsersList[ind].profile.name = options.name;
    if(options.website) UsersList[ind].profile.website = options.website;
    if(options.bio) UsersList[ind].profile.bio = options.bio;
    if(options.pic) UsersList[ind].profile.pic = options.pic; 
    if(options.tw) UsersList[ind].profile.tw = options.tw;

    res.send(UsersList[ind])
})

/*
profile: {
    name: "Seamoss", // No spaces or special characters allowed. Stored in the same case as typed.
    website: "https://talismo.io", 
    bio: "Lorem ipsum", 
    pic: "https://i.ibb.co/PQr9yxX/m3u7inu3m7-V1mv-Gj8qcg.png", 
    tw: "wellspringagncy", 
   }
*/


///////////////////////////////////////////////////////         TOKEN CALLS




///////////////////////////////////////////////////////         GATE CALLS (web app)





///////////////////////////////////////////////////////         WALLET CALLS
// BillingSnippet: Get select basic info from the internal_balances table.
app.get('/api/wallets/:a_id', (req, res) => {
    walletList.forEach(int_wal => {
        if(int_wal.account_id == req.params.a_id) {
            res.status(200).send(int_wal);
        }
    })
})

// ChangeSubscription
/* Notes

* Should check whether the user has enough in their wallet, and charge them immediately up-front for the first month. If they can't be charged, this API 
    to update the sub tier should fail.

*/
app.get('/api/wallets/updatesub/:a_id', (req, res) => {
    const options = {
        tier: req.query.service_tier, 
        account: req.params.a_id, 
    }

    let tiers = Object.keys(tierConfigs).find(key => key == options.tier);

    // VALIDATION: service_tier
    if(!tiers) {
        res.status(400).send('Invalid tier choice.')
        return;
    } 

    // VALIDATION: account_id
    let account = Object.values(walletList).find(wallet => wallet.account_id == options.account);
    if(!account) {
        res.send('Invalid account ID');
        return;
    }
    
    let ind = walletList.map(item => item.account_id).indexOf(options.account)

    walletList[ind].service_tier = tiers

    res.status(200).send(walletList[ind])

    //res.status(200).send('Billing account updated ')
})




app.listen(3000, () => console.log('Listening on 3000'))