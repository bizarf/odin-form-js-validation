(() => {
    const email = document.querySelector("#email")
    const submitBtn = document.querySelector("#submitBtn")
    const country = document.querySelector("#country")
    const areaCode = document.querySelector("#areaCode")
    const password = document.querySelector("#password")
    const passwordConfirmation = document.querySelector("#passwordConfirmation")
    const errorMessage = document.querySelectorAll(".error")
    const errorIcon = document.querySelectorAll(".fa-circle-exclamation")
    const checkMark = document.querySelectorAll(".fa-circle-check")

    // email field
    email.addEventListener("input", () => {
        if (email.validity.typeMismatch) {
            errorMessage[0].style.display = "block";
            errorMessage[0].textContent = "Please type in a valid email address";
            errorIcon[0].style.display = "block"
        } else {
            errorMessage[0].style.display = "none";
            errorIcon[0].style.display = "none"
            email.style.borderColor = "none"
            email.style.outlineColor = "none"
        }

        if (email.validity.valid) {
            checkMark[0].style.display = "block"
            email.style.borderColor = ""
        } else {
            checkMark[0].style.display = "none"
        }

        if (email.value === "") {
            checkMark[0].style.display = "none"
        }
    })

    // country.addEventListener("input", () => {
    //     if (country.validity.valueMissing) {
    //         country.setCustomValidity("Please type in a country");
    //         country.reportValidity()
    //     } else {
    //         country.setCustomValidity("")
    //     }
    // })

    areaCode.addEventListener("input", () => {
        if (areaCode.validity.patternMismatch) {
            errorMessage[2].style.display = "block";
            errorMessage[2].textContent = "Please type in a valid postcode or zip code";
            errorIcon[2].style.display = "block"
            areaCode.style.borderColor = "#dc2626"
        } else {
            errorMessage[2].style.display = "none";
            errorIcon[2].style.display = "none"
            areaCode.style.borderColor = "none"
            // areaCode.style.outlineColor = "none"
        }
    })

    password.addEventListener("input", () => {
        if (!password.value < 8) {
            errorMessage[3].style.display = "block";
            errorMessage[3].textContent = "Please type in a password that is more than 8 characters";
            errorIcon[3].style.display = "block"
            password.style.borderColor = "#dc2626"
        } else {
            errorMessage[2].style.display = "none";
            errorIcon[2].style.display = "none"
            password.style.borderColor = "none"
            password.style.outlineColor = "none"
        }
    })

    // submit button
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()
        blankValueError(email, 0, "Please enter an email address")
        blankValueError(country, 1, "Please enter a country")
        blankValueError(areaCode, 2, "Please enter a postcode or zip code")
        blankValueError(password, 3, "Please enter a password")
        blankValueError(passwordConfirmation, 4, "Please type in the above password to ")
    })

    function blankValueError(domElement, domElementValue, message) {
        if (domElement.validity.valueMissing) {
            errorMessage[domElementValue].style.display = "block";
            errorMessage[domElementValue].textContent = message;
            errorIcon[domElementValue].style.display = "block"
        }

        if (!domElement.validity.valid) {
            domElement.style.borderColor = "#dc2626"
        }
    }
})()