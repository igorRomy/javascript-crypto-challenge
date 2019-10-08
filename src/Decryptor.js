const _sodium = require('libsodium-wrappers');
var myKey = null;

// Set the module's decryption key
module.exports.setKey = async function(key)
{
    myKey = key;
}

// Throws 'no key' exception if no key is set
// Decrypt the cipher providing a nonce and a key
module.exports.decrypt = async function(ciphertext, nonce)
{
    if (myKey === null)
        throw 'no key';

    /* Wait for sodium to be ready */
    await _sodium.ready;

    return _sodium.crypto_secretbox_open_easy(ciphertext, nonce, myKey);
}
