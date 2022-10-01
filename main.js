/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
(() => {
    const email = document.querySelector("#email")
    const submitBtn = document.querySelector("#submitBtn")
    const country = document.querySelector("#country")
    const postCode = document.querySelector("#postCode")
    const password = document.querySelector("#password")
    const passwordConfirmation = document.querySelector("#passwordConfirmation")

    // email field
    email.addEventListener("input", () => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Please type in a valid email");
            email.reportValidity()
        } else {
            email.setCustomValidity("")
        }
    })

    country.addEventListener("input", () => {
        if (country.validity.valueMissing) {
            country.setCustomValidity("Please type in a country");
            country.reportValidity()
        } else {
            country.setCustomValidity("")
        }
    })

    postCode.addEventListener("input", () => {
        if (postCode.validity.valueMissing) {
            postCode.setCustomValidity("Please type in a post code");
            postCode.reportValidity()
        } else {
            postCode.setCustomValidity("")
        }

        if (postCode.validity.patternMismatch) {
            postCode.setCustomValidity("Please enter a valid post code or zip code")
            postCode.reportValidity()
        } else {
            postCode.setCustomValidity("")
        }
    })

    password.addEventListener("input", () => {
        if (password.valid.rangeUnderflow) {
            password.setCustomValidity("test")
            password.reportValidity()
        } else {
            password.setCustomValidity("")
        }
    })

    // submit button
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()
        // if (email.value === "") {
        //     email.setCustomValidity("Please enter an email address")
        //     email.reportValidity()
        // } else {
        //     email.setCustomValidity("")
        // }
        blankValueError(email, "Please enter an email address")
        blankValueError(country, "Please enter a country")
    })

    function blankValueError(domElement, message) {
        if (domElement.value === "") {
            domElement.setCustomValidity(message)
            domElement.reportValidity()
        } else {
            domElement.setCustomValidity("")
        }
    }
})()
/******/ })()
;