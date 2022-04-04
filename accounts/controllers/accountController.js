const Account = require('../models/Account');

const account_index = (req, res) => {
    Account.find().then((accounts) => {
        res.json(accounts)
    }).catch(err => {
        if(err){
            throw err;
        }
    })
}

//Create an account (prospect)

const account_create_post = (req,res) => {
    var newAccount = {
        name: req.body.name,
        address: req.body.address,
        country: req.body.country
    }
    console.log(req.body)
    // Create a new account
    var account = new Account(newAccount)
    account.save().then(() => {
        console.log("New account created!")
    }).catch(err => {
       if(err){
           throw err;
       } 
    })
    res.send("A new account created with success");
}


// Update account (CLIENT)
const account_client_update = async (req,res) => {
   
    try {
        const id = req.params.id;
        const updates = req.body  
        
        const result = await Account.findByIdAndUpdate(id, updates);
        res.send(result);

    } catch (error) {
        console.log(error.message);
    }

   
}


// Update account status (BUSINESS MANAGER)

const account_status_update = async (req,res) => {
   
    try {
        const id = req.params.id;
        const updates = req.body;
        const options = {new: true} ;

        
        const result = await Account.findByIdAndUpdate(id, updates, options);
        res.send(result);

    } catch (error) {
        console.log(error.message);
    }

   
}
// Get account details
const account_details = (req, res) => {
    Account.findById(req.params.id).then((account) => {
        if(account){
            res.json(account)
        }else{
            res.sendStatus(400);
        }

    }).catch(err => {
        if(err){
            throw err;
        }
    })
}

module.exports = {
    account_index,
    account_create_post,
    account_client_update,
    account_details,
    account_status_update
}