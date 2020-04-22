// @preserve author Alexander Stetsyuk
// @preserve author Glenn Rempe <glenn@rempe.us>
// @license MIT

/*jslint passfail: false, bitwise: true, nomen: true, plusplus: true, todo: false, maxerr: 1000 */
/*global define, require, module, exports, window, Uint32Array */

// eslint : http://eslint.org/docs/configuring/
/*eslint-env node, browser, jasmine */
/*eslint no-underscore-dangle:0 */

// UMD (Universal Module Definition)
// Uses Node, AMD or browser globals to create a module. This module creates
// a global even when AMD is used. This is useful if you have some scripts
// that are loaded by an AMD loader, but they still want access to globals.
// See : https://github.com/umdjs/umd
// See : https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js
//
;(function(root, factory) {
    "use strict"

    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function() {
            /*eslint-disable no-return-assign */
            return (root.i18n = factory())
            /*eslint-enable no-return-assign */
        })
    } else if (typeof exports === "object") {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require("_i18n"))
    } else {
        // Browser globals (root is window)
        root.i18n = factory(root._i18n)
    }
})(this, function(_i18n) {
    "use strict"

    const i18n = {
        en: {
            title: "Secure your secret",
            desc: "This tool transforms your secret into a set of keys you can <b>distribute</b> between persons or places you can always count on. <b>Recover</b> the secret by putting the shared keys together.<br/><br/>It is ideal for securing your <br>private blockchain key</b>!",
            home: "Home",
            share: "Share",
            shareSecretsDesc: "Enter your <b>secret</b>, enter the <b>number of people</b>, that will share the key including you of course! Then, the number of <b>people needed to recover</b> it. <br/>Finally click the <b>Share</b> button to get a <b>shared key for each person</b>. You can then safely mail/print/write the keys but remember: <br/><br/><b>these keys should NEVER be kept together!</b>",
            recover: "Recover",
            recoverSecretsDesc: "Enter the amount of required keys to recover your secret and introduce each one.",
            shareSecrets: "Share keys",
            recoverSecrets: "Recover keys",
            secretLabel: "Secret",
            person: "Key",
            persons: "Key amount",
            copy: "Copy",
            requiredPersons: "Required persons",
            subject: "Hi, this is your secret share"
        },
        es: {
            title: "Asegura tu secreto",
            desc: "Esta herramienta transfórma tu secreto en una serie de claves que puedes <b>repartir</b> entre las personas o los lugares con cuales siempre puedes contar. <b>Recupera</b> tu secreto juntando claves repartidas.<br/><br/>Es ideal para asegurar tu <b>clave privada blockchain</b>!",
            home: "Inicio",
            share: "Repartir",
            shareSecretsDesc: "Transforma tu secreto en tantas claves como quieras y establece cuantas de ellas serán mínimamente requeridas para recuperar tu secreto.",
            recover: "Recuperar",
            recoverSecretsDesc: "Introduce la cantidad de claves requeridas para recuperar tu secreto e introduce cada una.",
            shareSecrets: "Repartir secreto",
            recoverSecrets: "Recuperar secreto",
            secretLabel: "Secreto",
            person: "Clave",
            persons: "Cantidad de claves",
            copy: "Copiar",
            requiredPersons: "Claves requeridas",
            subject: "Hola, esta es tu parte de la clave"
        }
    };

    const lang = navigator.language.split('-')[0];

    return i18n[lang] || i18n.en;
})
