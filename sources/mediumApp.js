const lastTextList = document.querySelector('.textsList');
const spinner = document.querySelector('.spinner');

const username = `gschincariol`
const RSSUrl = `https://medium.com/feed/@${username}`;
const RSSConverter = `https://api.rss2json.com/v1/api.json?rss_url=${RSSUrl}`;

const capitalize = (string) => {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const getMediumData = async () => {

    try {
        const response = await fetch(RSSConverter);
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
};

const getMediumTexts = async () => {
    const feed = await getMediumData();
    const posts = await feed.items;
    for (let post of posts) {
        const newText = document.createElement('div');
        newText.classList = 'lastTextItem';
        newText.innerHTML = `<a class="lastTextURL" href="${post.link}" target="_blank" rel="noopener noreferrer"><p class="textTitle">${capitalize(post.title.toLowerCase())}</p></a>`;
        lastTextList.appendChild(newText);
    }
    spinner.classList.toggle('d-none');
}

getMediumTexts();