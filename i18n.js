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
            title: "Social Key Recovery",
            desc: "Share your keys with firends or family to recover them when needed.",
            home: "Home",
            share: "Share",
            shareSecretsDesc: "Enter your <b>secret key</b>, then, enter the <b>number of friends, including you, of course!</b> that will share the key, and then, the number of <b>friends needed to recover</b> it. Finally click the <b>Share</b> button to get a <b>shared key for each friend</b>. You can then safely mail/print/write a key to a friend but remember: <b>these keys should NEVER remain together!</b>.",
            goToShare: "Go to share page",
            reveal: "Reveal",
            revealSecretsDesc: "revealSecretsDesc",
            goToRreveal: "Go to reveal page",
            shareSecrets: "Share secrets",
            revealSecrets: "Reveal secrets",
            secretLabel: "Secret (hex)",
            friend: "Friend",
            friends: "Friend number",
            requiredFriends: "Required friends"
        },
        es: {
            title: "Secretos Compartidos",
            desc: "Comparte tus claves privadas con tu familia o amigos para poder recuperarla cuando sea necesario.",
            home: "Inicio",
            share: "Compartir",
            shareSecretsDesc: "Introduce tu <b>clave privada</b>, el <b>número de amigos</b> que compartirán la clav, <b>¡contándote a tí, por supuesto!</b> y el número de <b>amigos necesarios para recuperarla</b>. Finalmente, haz clic en el botón <b>Compartir</b> para obtener una <b>clave compartida para cada amigo</b>. Puedes enviar por correo/imprimir/escribir una clave a un amigo de forma segura, pero recuerda: <b>¡Estas claves NUNCA deben permanecer juntas!</b>.",
            goToShare: "Compartir secretos",
            reveal: "Revelar",
            revealSecretsDesc: "revealSecretsDesc",
            goToRreveal: "Revelar secretos",
            shareSecrets: "Compartir secretos",
            revealSecrets: "Revelar secretos",
            secretLabel: "Clave (en hexadecimal)",
            friend: "Amigo",
            friends: "Número de amigos",
            requiredFriends: "Amigos requeridos"
        }
    };

    const lang = navigator.language.split('-')[0];

    return i18n[lang] || i18n.en;
})
