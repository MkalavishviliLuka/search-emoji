import emojiList from './emojiLIst.json'

function filterEmojis(txt, count) {
    return emojiList.filter(emoji => {
        if (emoji.title.toLocaleLowerCase().includes(txt.toLocaleLowerCase())) {
            return true
        }
        if (emoji.keywords.includes(txt)) return true
        return false
    }).slice(0, count)
}

export default filterEmojis