import {Injectable} from '@angular/core';
// import {AES} from 'crypto-js/aes';
import {CryptoJSAesJson} from '../../shared/aes-json/aes-json';
import {PublicKey, PrivateKey, Signature, key} from '../../../../node_modules/decentjs-lib/lib/ecc';
import {DecentCoreService} from './decent-core.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {error} from 'selenium-webdriver';

const CryptoJS = require('crypto-js');
const SHA256 = require('crypto-js/sha256');

@Injectable()
export class CryptService {

    private messageSender: Subject<string>;

    constructor(private decentCoreService: DecentCoreService) {
    }

    brainKeyDecrypt(brainKey, password) {
        return Observable.create(observer => {
            this.messageSender = CryptoJS.AES.decrypt(brainKey, password, {format: CryptoJSAesJson.prototype}).toString(CryptoJS.enc.Utf8);
            if (!this.messageSender) {
                observer.error(this.messageSender);
            }
            observer.next(this.messageSender);
        });
    }

    brainKeyEncrypt(brainKey, password) {
        return CryptoJS.AES.encrypt(brainKey, password, {format: CryptoJSAesJson.prototype}).toString();
    }

    generatePrivateKey(brainKey) {
        return key.get_brainPrivateKey(brainKey);
    }

    generatePublicKey(privkey) {
        const publicKey = privkey.toPublicKey();
        return publicKey.toString();
    }

    stringToHash(signString) {
        return SHA256('' + signString).toString();
    }

    hashToSign(stringHash, privkey) {
        return Signature.signBufferSha256(new Buffer(stringHash, 'hex'), privkey).toHex();
    }

    verifySignature(stringSignature, stringHash, pubKeyString) {
        const recPubKey = Signature.fromBuffer(new Buffer(stringSignature, 'hex')).recoverPublicKey(new Buffer(stringHash, 'hex'));
        return recPubKey.toString() === pubKeyString;
    }

    restorePublicKey(stringSignature, stringHash) {
        const recPubKey = Signature.fromBuffer(new Buffer(stringSignature, 'hex')).recoverPublicKey(new Buffer(stringHash, 'hex'));
        return recPubKey.toString();
    }

    md5(key: string): string {
        return CryptoJS.MD5(key).toString();
    }

}
