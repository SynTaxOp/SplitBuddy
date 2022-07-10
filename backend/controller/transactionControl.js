const User = require("../models/userData");

const addTransaction = async (req, res) => {
  const { username, group_name, payer_name ,amount,payees } = req.body;

  var amt = amount / payees.length
  console.log('Amount',amt);
  const user = await User.findOne({ username });
  const group = await User.findOne(
    { username },
    { Groups: { $elemMatch: { group_name } } }, 
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  ).clone();
  
  User.updateOne({ username, Groups: { $elemMatch: { group_name } } },
    {
        Groups$transaction_data :  
    } 

  if (group) {
    var prev_transaction_data = group.Groups[0].transaction_data;
    console.log(prev_transaction_data)

    var found_payer_data = prev_transaction_data.filter(element=>element.paidBy==payer_name)[0];
    if(found_payer_data==undefined)
    {
      found_payer_data = {paidBy:payer_name,paidFor:{}};
    }
    payees.forEach(element => {
        if(found_payer_data.paidFor[element] == undefined)
        {
          found_payer_data.paidFor[element] = amt; 
        }
        else
        {
          found_payer_data.paidFor[element]+=amt;
        }
    });

    res.status(200).json({
      members: prev_transaction_data,
    });
  } else {
    console.log('Badh me jaao')
    res.status(400);
    throw new Error("Error");
  }

};

module.exports = { addTransaction};
