const assert  = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');// Web3 in caps because it returns Constructor
const web3 =  new Web3(ganache.provider());
const {interface,bytecode} = require('../compile');

let accounts;
let inbox
  beforeEach(async ()=>{
    //Get all Accounts by Ganache
    // web3.eth.getAccounts().then(fethedAccounts =>{
    //     console.log(fethedAccounts);
    // })
     accounts = await web3.eth.getAccounts();
    // inbox = await new web3.eth.Contract(JSON.parse(interface))
    //                     .deploy({data:bytecode,arguments:['Hi There']})
    //                     .send({from:accounts[0],gas:'1000000'});
 
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ['Hi there!']
    })
    .send({ from: accounts[0], gas: '1000000' });

});

describe('Inbox',()=>{
    it('Deploys a Contract',()=>{
        //console.log(accounts);
        console.log(inbox);
    });
})
