const assert  = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');// Web3 in caps because it returns Constructor
const web3 =  new Web3(ganache.provider());

beforeEach(()=>{
    //Get all Accounts by Ganache
    web3.eth.getAccounts().then(fethedAccounts =>{
        console.log(fethedAccounts);
    })
})

describe('Inbox',()=>{
    it('Deploys a Contract',()=>{

    });
})
