function InputText(formdata) {
    let input_text = formdata.text.value;
    console.log(formdata.text.value);

    sha256(input_text).then(hash => JudgeAnswer(hash));
}
function JudgeAnswer(ans) {
    if (ans == "559aead08264d5795d3909718cdd05abd49572e84fe55590eef31a88a08fdffd") {
        location.href = "./answerA.html";
    }
    else if (ans == "df7e70e5021544f4834bbee64a9e3789febc4be81470df629cad6ddb03320a5c") {
        location.href = "./answerB.html";
    }
    else if (ans == "6b23c0d5f35d1b11f9b683f0b0a617355deb11277d91ae091d399c655b87940d") {
        location.href = "./answerC.html";
    }
    else {
        location.href = "./index.html"
    }
}

const sha256 = async (text) => {
    const uint8 = new TextEncoder().encode(text)
    const digest = await crypto.subtle.digest('SHA-256', uint8)
    return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2, '0')).join('')
}

