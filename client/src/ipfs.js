// //using the infura.io node, otherwise ipfs requires you to run a daemon on your own computer/server. See IPFS.io docs
// import { create } from 'ipfs-http-client'
// const IPFS = require('ipfs-api');

// // const ipfsClient = require('ipfs-http-client');
// const projectId = 'd49b5f1db6bf44f0bc9c2de4746cab5c'
// const projectSecret = 'c9687f3455b84a06b8db0bf751b9fa19'
// const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
// const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https'
// });
// const ipfs = create({
//   host: 'ipfs.infura.io',
//   port: 5001,
//   protocol: 'https',
//   headers: {
//       authorization: auth,
//   }
// })
//run with local daemon
const ipfsApi = require('ipfs-api');
const ipfs = new ipfsApi('localhost', '5001', {protocol: 'http'});


export default ipfs; 