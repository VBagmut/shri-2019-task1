module.exports = {
    index: [
        {
            block: "layout",
            elem: "container",
            elemMods: { size: "m", active: true }
        }
    ],
    grid: [
        {
            block: 'grid',
            mods: { 'm-columns': '10'},
            content: {
                block: 'text',
                content: 'lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000lorem1000'
            }
        }
    ],
    product: [],
    content: [],
    collect: [],
    // content blocks
    payment: [
        {
            block: "layout",
            elem: "container",
            elemMods: { size: "m" },
            content: {
                block: "theme",
                mods: {
                    color: "project-default",
                    space: "default_xl"
                },
                mix: { block: "payment" },
                content: { 
                        block: 'text',
                        mods: {
                            size: 'xxl',
                            type: 'h1',
                            view: 'primary',
                        },
                        content: {
                            elem: 'word',
                            mods: {
                                size: 'xxl'
                            },
                            elemMods: {
                                width: 'l'
                            },
                            
                        },
                                mix: {
                                    block: 'theme',
                                    mods: {
                                        'size_default': 'xxl'
                                    },
                                }
                 }
            }
        }
    ]
};
