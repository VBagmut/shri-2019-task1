module.exports = {
    index: [
        {
            block: "theme",
            mods: {
                color: "project-default",
                space: "default",
                size: "default",
                gap: "small"
            },
            content: {
                block: "layout",
                content: {
                    elem: "container",
                    elemMods: {
                        size: "m",
                        align: "center"
                    },
                    content: [
                        {
                            block: "section",
                            mods: {
                                "indent-b": "xxl"
                            },
                            content: [
                                {
                                    block: "grid",
                                    mods: {
                                        "m-columns": 10,
                                        "col-gap": "full"
                                    },
                                    content: [
                                        {
                                            block: "payment",
                                            mix: [
                                                {
                                                    block: "grid",
                                                    elem: "fraction",
                                                    elemMods: {
                                                        "m-col": 5
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block: "warning",
                                            mix: [
                                                {
                                                    block: "grid",
                                                    elem: "fraction",
                                                    elemMods: {
                                                        "m-col": 5
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: "section",
                            mods: {
                                "indent-b": "xxl"
                            },
                            content: [
                                {
                                    block: "grid",
                                    mods: {
                                        "m-columns": 10,
                                        "col-gap": "half"
                                    },
                                    content: [
                                        {
                                            block: "product",
                                            mix: [
                                                {
                                                    block: "grid",
                                                    elem: "fraction",
                                                    elemMods: {
                                                        "m-col": 2
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block: "product",
                                            mix: [
                                                {
                                                    block: "grid",
                                                    elem: "fraction",
                                                    elemMods: {
                                                        "m-col": 2
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block: "product",
                                            mix: [
                                                {
                                                    block: "grid",
                                                    elem: "fraction",
                                                    elemMods: {
                                                        "m-col": 2
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block: "product",
                                            mix: [
                                                {
                                                    block: "grid",
                                                    elem: "fraction",
                                                    elemMods: {
                                                        "m-col": 2
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block: "product",
                                            mix: [
                                                {
                                                    block: "grid",
                                                    elem: "fraction",
                                                    elemMods: {
                                                        "m-col": 2
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: "section",
                            mods: {
                                "indent-b": "xxl"
                            },
                            content: [
                                {
                                    block: "grid",
                                    mods: {
                                        "m-columns": 12,
                                        "col-gap": "full"
                                    },
                                    content: [
                                        {
                                            block: "card",
                                            mods: {
                                                border: "all"
                                            },
                                            mix: [
                                                {
                                                    block: "grid",
                                                    elem: "fraction",
                                                    elemMods: {
                                                        "m-col": 8
                                                    }
                                                }
                                            ],
                                            content: "List"
                                        },
                                        {
                                            block: "card",
                                            mods: {
                                                border: "all"
                                            },
                                            mix: [
                                                {
                                                    block: "grid",
                                                    elem: "fraction",
                                                    elemMods: {
                                                        "m-col": 4
                                                    }
                                                }
                                            ],
                                            content: [
                                                {
                                                    block: "text",
                                                    mods: {
                                                        size: "m",
                                                        type: "p",
                                                        view: "primary"
                                                    },
                                                    content: [
                                                        {
                                                            elem: "word",
                                                            elemMods: {
                                                                width: "l"
                                                            }
                                                        },
                                                        {
                                                            elem: "word",
                                                            elemMods: {
                                                                width: "m"
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ],
    product: [],
    content: [],
    collect: [],
};
