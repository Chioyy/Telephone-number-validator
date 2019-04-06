function telephoneCheck(str) {
    let regEx = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\-\s]?[0-9]{4}$/;
    if (regEx.test(str) === true) {
        return document.getElementById("answer").innerHTML = "Valid number"; 
    }
    document.getElementById("answer").innerHTML = "Invalid number"; 
}

document.getElementById("button").addEventListener("click", function() {
    telephoneCheck(document.getElementById("str").value);
});