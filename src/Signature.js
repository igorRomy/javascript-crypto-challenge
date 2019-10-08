const _sodium = require('libsodium-wrappers');
var myKey = null;

(async () => {
    await _sodium.ready;
    myKey = _sodium.crypto_sign_keypair();
})();


// Sign message with a key
module.exports.sign = async function(msg)
{
    await _sodium.ready;
    // Signing message 
    return _sodium.crypto_sign(msg, myKey.privateKey);
}

// Return public key 
module.exports.verifyingKey = async function()
{
    await _sodium.ready;
    return myKey.publicKey;
}