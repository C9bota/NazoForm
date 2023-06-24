function InputText(formdata) {
    let input_text = formdata.text.value;
    console.log(formdata.text.value);

    sha256(input_text).then(hash => JudgeAnswer(hash));
}
function JudgeAnswer(ans) {
    if (ans == "b37e8ac766eda029fdbca8f1059a2f0de918e355f8618749eb08e854a9ba8c48") {
        location.href = "./answerA.html";
    }
    else if (ans == "d05e85223cbfdadfed652729012c4068752705f5e46c5e9179da3352fd4a4c86") {
        location.href = "./answerB.html";
    }
    else if (ans == "4a3b3fdb51bb8d878603d69e5530d619ae91e157cc6019e92ab6ca81a6b84411") {
        location.href = "./answerC.html";
    }
    else if (ans == "272035948829ea1a2624d6c61a7a8476be430f886d6e6ea92bde406ede574265") {
        location.href = "./answerD.html";
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

