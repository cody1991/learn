const urlParser = document.createElement('a');

export function domain(url) {
    urlParser.href = url;
    return urlParser.hostname;
}

export function fromNow(time) {
    const between = Date.now() / 1000 - Number(time);

    if (between < 3600) {

    }
}

function plu
