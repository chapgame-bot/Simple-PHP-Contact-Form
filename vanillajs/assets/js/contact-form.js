/*
--------------------------------
Simple PHP Contact Form
--------------------------------
+ https://github.com/pinceladasdaweb/Simple-PHP-Contact-Form
+ A Simple Contact Form developed in PHP with VanillaJS Form validation.
+ version 1.0
+ Copyright 2013 Pedro Rogerio
+ VanillaJS version developed by William Bruno <https://github.com/wbruno>
+ Licensed under the MIT license

+ https://github.com/pinceladasdaweb/Simple-PHP-Contact-Form
*/

/**
 * FormValidation
 */
var FormValidation = (function (document) {
    "use strict";
    /*jslint browser:true*/

    var module = {
        testmail : /^[a-zA-Z0-9][a-zA-Z0-9\._\-]+@([a-zA-Z0-9\._\-]+\.)[a-zA-Z-0-9]{2}/,
        _addError : function($el) {
            return $el.parentNode.classList.add('has-error');
        },
        removeError : function($el) {
            return $el.parentNode.classList.remove('has-error');
        },
        checkMail : function($input) {
            if (!module.testmail.test($input.value)) {
                module._addError($input);
                return false;
            }
            return true;
        },
        checkEmpty : function($input) {
            if ($input.value === '') {
                module._addError($input);
                return false;
            }
            return true;
        }
    };

    return {
        checkValidity : module.checkValidity,
        checkMail : module.checkMail,
        checkEmpty : module.checkEmpty,
        removeError: module.removeError
    };

}(document));


/**
 * @file contact-form-vanillajs.js
 */
(function (document) {
    "use strict";
    /*jslint browser:true, plusplus:true*/

    var $contactForm = document.querySelector("#contact-form"),
        $name        = document.querySelector("#name"),
        $mail        = document.querySelector("#email"),
        $assunto     = document.querySelector("#assunto"),
        $mensagem    = document.querySelector("#mensagem"),
        $required    = document.querySelectorAll(".required"),

        $requiredArray = Array.prototype.slice.call($required);



    if ($contactForm) {
        $contactForm.addEventListener("submit", function(e) {

            $requiredArray.forEach(function($element) {
                FormValidation.removeError($element);
            });


            if (!FormValidation.checkEmpty($name)) {
                e.preventDefault();
            }

            if (!FormValidation.checkMail($mail)) {
                e.preventDefault();
            }

            if (!FormValidation.checkEmpty($assunto)) {
                e.preventDefault();
            }

            if (!FormValidation.checkEmpty($mensagem)) {
                e.preventDefault();
            }

        });
    }
}(document));