const bemxjst = require('bem-xjst');
/**
 * @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
 * @return {string} HTML разметка страницы
 */

module.exports = function(obj) {
    // bem-xjst contains two engines, BEMHTML and BEMTREE (starting from v5.0.0)
    // Choose the BEMHTML engine
    let bemhtml = bemxjst.bemhtml;

    // Add templates using the `compile` method
    let templates = bemhtml.compile(() => {
        block("text")({ tag: "span" });
    });

    // Apply templates
    let html = templates.apply(obj);

    return html;
};