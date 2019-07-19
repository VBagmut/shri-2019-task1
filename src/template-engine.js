const BEMHTML = require('zero-bem/BEMHTML/BEMHTML');

/**
 * @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
 * @return {string} HTML разметка страницы
 */

export default function (obj) {
    let bemhtml = BEMHTML.BEMHTML;

    let templates = bemhtml.compile(() => {
        // block("text")({ tag: "span" });
    });

    // Apply templates
    let html = templates.apply(obj);

    return html;
 }