const lastTextList = document.querySelector('.lastText');
const lastTextURL = document.querySelector('.lastTextURL');
const lastTextTitle = document.querySelector('.textTitle');
const spinner = document.querySelector('.spinner');

const parser = new RSSParser();
const CORS_PROXY = "https://api.codetabs.com/v1/proxy?quest="

const capitalize = (string) => {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
}

parser.parseURL(CORS_PROXY + 'https://medium.com/feed/@gschincariol', function (err, feed) {
    if (err) throw err;
    console.log(feed.title);
    lastTextTitle.textContent = capitalize(feed.items[0].title.toLowerCase());
    lastTextURL.href = feed.items[0].link;
    for (let i = 1; i <= 9; i++) {
        let newText = document.createElement('div');
        newText.className = "lastTextItem";
        newText.innerHTML = `<a class="lastTextURL" href="${feed.items[i].link}" target="_blank" rel="noopener noreferrer"><p class="textTitle">${capitalize(feed.items[i].title.toLowerCase())}</p></a>`;
        lastTextList.appendChild(newText)
    }
    spinner.classList.toggle('d-none');
})