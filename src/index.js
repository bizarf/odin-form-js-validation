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
    const sucessfulSubmit = document.querySelector(".sucessfulSubmit")

    // email field
    email.addEventListener("input", () => {
        if (email.validity.typeMismatch) {
            errorMessage[0].style.display = "block";
            errorMessage[0].textContent = "Please type in a valid email address";
            errorIcon[0].style.display = "block"
        } else {
            errorMessage[0].style.display = "none";
            errorIcon[0].style.display = "none"
            email.style.borderColor = ""
        }

        if (email.validity.valid) {
            checkMark[0].style.display = "block"
            email.style.borderColor = ""
        } else {
            checkMark[0].style.display = "none"
        }

        if (email.validity.valueMissing) {
            checkMark[0].style.display = "none"
        }
    })

    country.addEventListener("input", () => {
        if (country.validity.valid) {
            errorMessage[1].style.display = "none"
            errorIcon[1].style.display = "none"
            checkMark[1].style.display = "block";
        }

        if (country.validity.valueMissing) {
            checkMark[1].style.display = "none"
        }
    })

    areaCode.addEventListener("input", () => {
        if (areaCode.validity.patternMismatch) {
            errorMessage[2].style.display = "block";
            errorMessage[2].textContent = "Please type in a valid postcode or zip code";
            errorIcon[2].style.display = "block"
            areaCode.style.borderColor = "#dc2626"
            checkMark[2].style.display = "none";
        } else {
            errorMessage[2].style.display = "none";
            errorIcon[2].style.display = "none"
            checkMark[2].style.display = "block";
            areaCode.style.borderColor = ""
        }

        if (areaCode.validity.valueMissing) {
            checkMark[2].style.display = "none";
        }
    })

    password.addEventListener("input", () => {
        if (password.validity.tooShort) {
            errorMessage[3].style.display = "block";
            errorMessage[3].textContent = "Please type in a password that is more than 8 characters";
            errorIcon[3].style.display = "block"
            password.style.borderColor = "#dc2626"
            checkMark[3].style.display = "none"
        } else {
            errorMessage[3].style.display = "none";
            errorIcon[3].style.display = "none"
            password.style.borderColor = ""
            checkMark[3].style.display = "block"
        }

        if (password.validity.valueMissing) {
            checkMark[3].style.display = "none"
        }
    })

    passwordConfirmation.addEventListener("input", () => {
        if (passwordConfirmation.value !== password.value) {
            errorMessage[4].style.display = "block";
            errorMessage[4].textContent = "Your password does not match";
            errorIcon[4].style.display = "block"
            passwordConfirmation.style.borderColor = "#dc2626"
            checkMark[4].style.display = "none"
        } else {
            errorMessage[4].style.display = "none";
            errorIcon[4].style.display = "none"
            passwordConfirmation.style.borderColor = ""
            checkMark[4].style.display = "block"
        }

        if (passwordConfirmation.validity.valueMissing) {
            checkMark[4].style.display = "none"
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

        if (email.validity.valid && country.validity.valid && areaCode.validity.valid && password.validity.valid && passwordConfirmation.validity.valid) {
            sucessfulSubmit.style.display = "block";
        } else {
            sucessfulSubmit.style.display = "none";
        }
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