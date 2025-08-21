(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/puzzle/[level]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PuzzlePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const LEVEL_CONFIGS = {
    "1": {
        level: "1",
        title: "Qui a gagné quoi à la fête foraine ?",
        subtitle: "Niveau 1",
        image: {
            src: "https://www.bonpourlesoreilles.net/wp-content/uploads/2019/01/histoire-fete-foraine.jpg",
            alt: "Ballons de fête foraine"
        },
        participants: [
            "Alice",
            "Benoît",
            "Clara",
            "David"
        ],
        categories: [
            "Ballon",
            "Boisson",
            "Lot"
        ],
        values: {
            Ballon: [
                "Rouge",
                "Bleu",
                "Vert",
                "Jaune"
            ],
            Boisson: [
                "Soda",
                "Jus",
                "Limonade",
                "Thé glacé"
            ],
            Lot: [
                "Peluche",
                "Casquette",
                "Bonbon géant",
                "Porte-clés"
            ]
        },
        hints: [
            "La personne qui a gagné la <strong>Peluche</strong> a bu du <strong>Jus</strong>.",
            "<strong>Benoît</strong> n’a pas eu de ballon <strong>Rouge</strong> ni <strong>Vert</strong>.",
            "Le ballon <strong>Jaune</strong> est associé au <strong>Thé glacé</strong>.",
            "<strong>Clara</strong> n’a pas gagné la <strong>Casquette</strong>.",
            "La personne au ballon <strong>Bleu</strong> a bu du <strong>Soda</strong>.",
            "<strong>Alice</strong> n’a pas gagné de <strong>Porte-clés</strong>.",
            "La <strong>Limonade</strong> est allée avec le <strong>Porte-clés</strong>.",
            "Le <strong>Bonbon géant</strong> n’est allé ni à <strong>Alice</strong> ni à <strong>Benoît</strong>."
        ],
        solution: {
            Alice: {
                Ballon: "Rouge",
                Boisson: "Jus",
                Lot: "Peluche"
            },
            "Benoît": {
                Ballon: "Bleu",
                Boisson: "Soda",
                Lot: "Casquette"
            },
            Clara: {
                Ballon: "Vert",
                Boisson: "Limonade",
                Lot: "Porte-clés"
            },
            David: {
                Ballon: "Jaune",
                Boisson: "Thé glacé",
                Lot: "Bonbon géant"
            }
        },
        recapClasses: {
            Ballon: "r-ball",
            Boisson: "r-bois",
            Lot: "r-lot"
        }
    },
    "2": {
        level: "2",
        title: "Club de lecture : qui lit quoi et avec quel accessoire ?",
        subtitle: "Niveau 2",
        image: {
            src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;auto=format&amp;fit=crop&amp;w=1200&amp;h=600",
            alt: "Club de lecture avec livres et boissons chaudes"
        },
        participants: [
            "Emma",
            "Félix",
            "Jade",
            "Lucas"
        ],
        categories: [
            "Genre",
            "Boisson",
            "Accessoire"
        ],
        values: {
            Genre: [
                "Policier",
                "Fantastique",
                "Historique",
                "Science-fiction"
            ],
            Boisson: [
                "Café",
                "Thé",
                "Chocolat chaud",
                "Cappuccino"
            ],
            Accessoire: [
                "Marque-page",
                "Lunettes",
                "Écharpe",
                "Carnet"
            ]
        },
        hints: [
            "La personne qui lit le <strong>Fantastique</strong> boit du <strong>Thé</strong>.",
            "Le <strong>Café</strong> n’est pas bu par <strong>Lucas</strong> ni par le lecteur du <strong>Historique</strong>.",
            "Les <strong>Lunettes</strong> sont associées au <strong>Policier</strong>.",
            "<strong>Emma</strong> n’utilise pas d’<strong>Écharpe</strong>.",
            "Le <strong>Cappuccino</strong> va avec la <strong>Science-fiction</strong>.",
            "<strong>Jade</strong> n’a ni le <strong>Marque-page</strong> ni le genre <strong>Policier</strong>.",
            "Le <strong>Chocolat chaud</strong> est allé avec le <strong>Carnet</strong>.",
            "<strong>Félix</strong> n’a pas bu de <strong>Thé</strong> et il ne lit pas la <strong>Science-fiction</strong>."
        ],
        solution: {
            Emma: {
                Genre: "Fantastique",
                Boisson: "Thé",
                Accessoire: "Marque-page"
            },
            "Félix": {
                Genre: "Policier",
                Boisson: "Café",
                Accessoire: "Lunettes"
            },
            Jade: {
                Genre: "Historique",
                Boisson: "Chocolat chaud",
                Accessoire: "Carnet"
            },
            Lucas: {
                Genre: "Science-fiction",
                Boisson: "Cappuccino",
                Accessoire: "Écharpe"
            }
        },
        recapClasses: {
            Genre: "r-genre",
            Boisson: "r-bois",
            Accessoire: "r-acc"
        }
    }
};
function PuzzleView(param) {
    let { cfg } = param;
    const [CAT_A, CAT_B, CAT_C] = cfg.categories;
    const valsA = cfg.values[CAT_A];
    const valsB = cfg.values[CAT_B];
    const valsC = cfg.values[CAT_C];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            maxWidth: 980,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: cfg.title
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: cfg.subtitle
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "controls",
                style: {
                    textAlign: "center",
                    marginBottom: 16
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "btn",
                    children: "← Sélection de niveau"
                }, void 0, false, {
                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: cfg.image.src,
                alt: cfg.image.alt,
                className: "illus",
                width: 1200,
                height: 600
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "hints",
                className: "hints card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hints-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "hints-title",
                                    children: "Indices"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    id: "toggleHints",
                                    className: "btn",
                                    type: "button",
                                    children: "Masquer les indices"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "hints-list",
                            id: "hintsList",
                            children: cfg.hints.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: h
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 27
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gridWrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "grid",
                    id: "grid",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "sideLabel topBlank groupLeft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "sideLabel topBlank rowLeft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "colHead col-1",
                                        colSpan: 4,
                                        children: CAT_A
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "colHead col-2",
                                        colSpan: 4,
                                        children: CAT_B
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "colHead col-3",
                                        colSpan: 4,
                                        children: CAT_C
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "sideLabel groupLeft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "sideLabel rowLeft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    valsA.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "v col-1",
                                            children: v
                                        }, "".concat(CAT_A, "-").concat(v), false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 34
                                        }, this)),
                                    valsB.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "v col-2",
                                            children: v
                                        }, "".concat(CAT_B, "-").concat(v), false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 34
                                        }, this)),
                                    valsC.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "v col-3",
                                            children: v
                                        }, "".concat(CAT_C, "-").concat(v), false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 34
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            cfg.participants.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "block-1",
                                    children: [
                                        idx === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            rowSpan: cfg.participants.length,
                                            className: "sideLabel groupLeft row-1",
                                            children: "Personne"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 31
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "rowLeft",
                                            children: p
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this),
                                        valsA.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-1",
                                                "data-person": p,
                                                "data-category": CAT_A,
                                                "data-value": v
                                            }, "".concat(p, "-").concat(CAT_A, "-").concat(v), false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this)),
                                        valsB.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-2",
                                                "data-person": p,
                                                "data-category": CAT_B,
                                                "data-value": v
                                            }, "".concat(p, "-").concat(CAT_B, "-").concat(v), false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this)),
                                        valsC.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-3",
                                                "data-person": p,
                                                "data-category": CAT_C,
                                                "data-value": v
                                            }, "".concat(p, "-").concat(CAT_C, "-").concat(v), false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, "p-".concat(p), true, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)),
                            valsC.map((left, idxRow)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "block-2",
                                    children: [
                                        idxRow === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            rowSpan: valsC.length,
                                            className: "sideLabel groupLeft row-2",
                                            children: CAT_C
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "rowLeft",
                                            children: left
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this),
                                        valsA.map((top)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-1",
                                                "data-pair": "".concat(CAT_C, "|").concat(CAT_A),
                                                "data-leftcat": CAT_C,
                                                "data-left": left,
                                                "data-topcat": CAT_A,
                                                "data-top": top
                                            }, "".concat(CAT_C, "|").concat(CAT_A, "-").concat(left, "-").concat(top), false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this)),
                                        valsB.map((top)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-2",
                                                "data-pair": "".concat(CAT_C, "|").concat(CAT_B),
                                                "data-leftcat": CAT_C,
                                                "data-left": left,
                                                "data-topcat": CAT_B,
                                                "data-top": top
                                            }, "".concat(CAT_C, "|").concat(CAT_B, "-").concat(left, "-").concat(top), false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 50
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 83
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 116
                                        }, this)
                                    ]
                                }, "c-".concat(left), true, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this)),
                            valsB.map((left, idxRow)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "block-boisson",
                                    children: [
                                        idxRow === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            rowSpan: valsB.length,
                                            className: "sideLabel groupLeft row-3",
                                            children: CAT_B
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "rowLeft",
                                            children: left
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this),
                                        valsA.map((top)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-1",
                                                "data-pair": "".concat(CAT_B, "|").concat(CAT_A),
                                                "data-leftcat": CAT_B,
                                                "data-left": left,
                                                "data-topcat": CAT_A,
                                                "data-top": top
                                            }, "".concat(CAT_B, "|").concat(CAT_A, "-").concat(left, "-").concat(top), false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 50
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 83
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 116
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 50
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 83
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 116
                                        }, this)
                                    ]
                                }, "b-".concat(left), true, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "controls",
                style: {
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "undo",
                        className: "btn",
                        type: "button",
                        disabled: true,
                        children: "Annuler (Ctrl+Z)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "reset",
                        className: "btn",
                        type: "button",
                        children: "Effacer la grille"
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "toggleCorrection",
                        className: "btn",
                        type: "button",
                        children: "Afficher la correction"
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "answers",
                id: "recap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Participant"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                cfg.categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: c
                                    }, "recap-head-".concat(c), false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 41
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: cfg.participants.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                "data-person": p,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: p
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    cfg.categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: cfg.recapClasses[c]
                                        }, "recap-".concat(p, "-").concat(c), false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, "recap-".concat(p), true, {
                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "answers hidden",
                id: "solution",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Correction"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                cfg.categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: c
                                    }, "sol-head-".concat(c), false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 41
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: cfg.participants.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                "data-person": p,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: p
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this),
                                    cfg.categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "s-".concat(c.toLowerCase()),
                                            children: "—"
                                        }, "sol-".concat(p, "-").concat(c), false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 43
                                        }, this))
                                ]
                            }, "sol-".concat(p), true, {
                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                id: "puzzle-solution",
                type: "application/json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(cfg.solution)
                }
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_c = PuzzleView;
/** Helpers d'attributs data-* pour éviter dataset:any */ const getData = (el, key)=>el.getAttribute("data-".concat(key));
const setData = (el, key, value)=>{
    if (value === null || value === "") el.removeAttribute("data-".concat(key));
    else el.setAttribute("data-".concat(key), value);
};
function PuzzlePage(param) {
    let { params } = param;
    _s();
    const { level } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PuzzlePage.useEffect": ()=>{
            var _document_getElementById, _document_getElementById1, _document_getElementById2, _document_getElementById3;
            const grid = document.getElementById("grid");
            const recapTable = document.getElementById("recap");
            const solutionTable = document.getElementById("solution");
            if (!grid || !recapTable || !solutionTable) return;
            let history = [];
            function updateUndoButton() {
                const btn = document.getElementById("undo");
                if (!btn) return;
                if (history.length === 0) btn.setAttribute("disabled", "true");
                else btn.removeAttribute("disabled");
            }
            function performUndo() {
                const last = history.pop();
                if (!last) return;
                // Restaurer l'état précédent
                setState(last.el, last.prev);
                recomputeForbidden();
                updateRecap();
                saveProgress();
                updateUndoButton();
            }
            // Raccourci clavier Ctrl+Z / Cmd+Z
            document.addEventListener("keydown", {
                "PuzzlePage.useEffect": (e)=>{
                    const isUndo = (e.key === "z" || e.key === "Z") && (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey;
                    if (!isUndo) return;
                    e.preventDefault();
                    performUndo();
                }
            }["PuzzlePage.useEffect"]);
            const CELL_STATES = [
                "",
                "no",
                "ok"
            ];
            function inferParticipants() {
                const rows = recapTable ? Array.from(recapTable.querySelectorAll('tbody tr[data-person]')) : [];
                if (rows.length) {
                    return rows.map({
                        "PuzzlePage.useEffect.inferParticipants": (r)=>r.getAttribute("data-person")
                    }["PuzzlePage.useEffect.inferParticipants"]).filter({
                        "PuzzlePage.useEffect.inferParticipants": (v)=>!!v
                    }["PuzzlePage.useEffect.inferParticipants"]);
                }
                const ths = grid ? Array.from(grid.querySelectorAll("tr.block-1 .rowLeft")) : [];
                if (ths.length) return ths.map({
                    "PuzzlePage.useEffect.inferParticipants": (th)=>{
                        var _textContent;
                        return ((_textContent = th.textContent) === null || _textContent === void 0 ? void 0 : _textContent.trim()) || "";
                    }
                }["PuzzlePage.useEffect.inferParticipants"]).filter(Boolean);
                return [];
            }
            function inferCategories() {
                const heads = recapTable ? Array.from(recapTable.querySelectorAll("thead th")).map({
                    "PuzzlePage.useEffect.inferCategories": (th)=>{
                        var _textContent;
                        return ((_textContent = th.textContent) === null || _textContent === void 0 ? void 0 : _textContent.trim()) || "";
                    }
                }["PuzzlePage.useEffect.inferCategories"]).filter(Boolean) : [];
                if (heads.length > 1) return heads.slice(1);
                const colHeads = grid ? Array.from(grid.querySelectorAll(".colHead")).map({
                    "PuzzlePage.useEffect.inferCategories": (th)=>{
                        var _textContent;
                        return ((_textContent = th.textContent) === null || _textContent === void 0 ? void 0 : _textContent.trim()) || "";
                    }
                }["PuzzlePage.useEffect.inferCategories"]).filter(Boolean) : [];
                if (colHeads.length) return colHeads;
                return [];
            }
            function inferRecapClassByCategory(categories) {
                const firstRow = recapTable ? recapTable.querySelector("tbody tr") : null;
                const headCats = recapTable ? Array.from(recapTable.querySelectorAll("thead th")).map({
                    "PuzzlePage.useEffect.inferRecapClassByCategory": (th)=>{
                        var _th_textContent;
                        return ((_th_textContent = th.textContent) === null || _th_textContent === void 0 ? void 0 : _th_textContent.trim()) || "";
                    }
                }["PuzzlePage.useEffect.inferRecapClassByCategory"]).slice(1) : [];
                const cells = firstRow ? Array.from(firstRow.querySelectorAll("td")) : [];
                const map = {};
                headCats.forEach({
                    "PuzzlePage.useEffect.inferRecapClassByCategory": (cat, i)=>{
                        const td = cells[i];
                        if (!td) return;
                        const cls = Array.from(td.classList).find({
                            "PuzzlePage.useEffect.inferRecapClassByCategory.cls": (c)=>c.startsWith("r-")
                        }["PuzzlePage.useEffect.inferRecapClassByCategory.cls"]);
                        if (cls) map[cat] = cls;
                    }
                }["PuzzlePage.useEffect.inferRecapClassByCategory"]);
                categories.forEach({
                    "PuzzlePage.useEffect.inferRecapClassByCategory": (cat)=>{
                        if (!map[cat]) map[cat] = "r-".concat(cat.toLowerCase());
                    }
                }["PuzzlePage.useEffect.inferRecapClassByCategory"]);
                return map;
            }
            function readJsonSolution() {
                const el = document.getElementById("puzzle-solution");
                if (el) {
                    var _el_textContent;
                    const raw = (_el_textContent = el.textContent) === null || _el_textContent === void 0 ? void 0 : _el_textContent.trim();
                    if (raw) {
                        try {
                            return JSON.parse(raw);
                        } catch (e) {
                        /* ignore */ }
                    }
                }
                return null;
            }
            var _readJsonSolution;
            const CONFIG = {
                participants: inferParticipants(),
                categories: inferCategories(),
                recapClassByCategory: {},
                solution: (_readJsonSolution = readJsonSolution()) !== null && _readJsonSolution !== void 0 ? _readJsonSolution : {}
            };
            CONFIG.recapClassByCategory = inferRecapClassByCategory(CONFIG.categories);
            // --- Persistence (localStorage) ---
            const STORAGE_KEY = "puzzle-progress-".concat(level);
            const HINTS_STORAGE_KEY = "puzzle-hints-".concat(level);
            function saveHintsState() {
                try {
                    const list = document.querySelectorAll("#hintsList li");
                    const checked = [];
                    list.forEach({
                        "PuzzlePage.useEffect.saveHintsState": (li, idx)=>{
                            const el = li;
                            if (el.style.textDecoration === "line-through") {
                                checked.push(idx);
                            }
                        }
                    }["PuzzlePage.useEffect.saveHintsState"]);
                    localStorage.setItem(HINTS_STORAGE_KEY, JSON.stringify(checked));
                } catch (e) {}
            }
            function applySavedHints() {
                try {
                    const raw = localStorage.getItem(HINTS_STORAGE_KEY);
                    if (!raw) return;
                    const checked = JSON.parse(raw);
                    const set = new Set(checked);
                    document.querySelectorAll("#hintsList li").forEach({
                        "PuzzlePage.useEffect.applySavedHints": (li, idx)=>{
                            const el = li;
                            el.style.cursor = "pointer";
                            el.style.textDecoration = set.has(idx) ? "line-through" : "";
                        }
                    }["PuzzlePage.useEffect.applySavedHints"]);
                } catch (e) {}
            }
            function makeCellKey(td) {
                return [
                    getData(td, "person") || "",
                    getData(td, "category") || "",
                    getData(td, "value") || "",
                    getData(td, "pair") || "",
                    getData(td, "left") || "",
                    getData(td, "top") || ""
                ].join("|");
            }
            function saveProgress() {
                if (!grid) return;
                const data = {};
                grid.querySelectorAll(".cell").forEach({
                    "PuzzlePage.useEffect.saveProgress": (td)=>{
                        const state = getData(td, "state") || "";
                        if (state) {
                            data[makeCellKey(td)] = state;
                        }
                    }
                }["PuzzlePage.useEffect.saveProgress"]);
                try {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                } catch (e) {}
            }
            function loadProgress() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEY);
                    if (!raw) return;
                    const data = JSON.parse(raw);
                    grid === null || grid === void 0 ? void 0 : grid.querySelectorAll(".cell").forEach({
                        "PuzzlePage.useEffect.loadProgress": (td)=>{
                            const key = makeCellKey(td);
                            const st = data[key];
                            if (st === "ok" || st === "no") {
                                setState(td, st);
                            } else if (!st) {
                            // leave empty
                            }
                        }
                    }["PuzzlePage.useEffect.loadProgress"]);
                } catch (e) {}
            }
            function setState(td, state) {
                setData(td, "state", state);
                td.innerHTML = "";
                if (state === "ok") {
                    const s = document.createElement("span");
                    s.className = "mark ok";
                    s.textContent = "◯";
                    td.appendChild(s);
                } else if (state === "no") {
                    const s = document.createElement("span");
                    s.className = "mark no";
                    s.textContent = "✗";
                    td.appendChild(s);
                }
            }
            function setForbidden(td, on) {
                const current = getData(td, "state");
                // Never overwrite a manual user choice
                if (current === "ok" || current === "no") return;
                if (on) {
                    // mark as auto-forbid without changing the user state
                    td.setAttribute("data-autoforbid", "1");
                    td.classList.add("forbid");
                    // render a subtle dot if and only if the cell is otherwise empty
                    if (!current) {
                        td.innerHTML = "";
                        const s = document.createElement("span");
                        s.className = "mark forbid";
                        s.textContent = "✗"; // distinct from the user's red cross
                        td.appendChild(s);
                    }
                } else {
                    // remove auto forbid only
                    if (td.getAttribute("data-autoforbid") === "1") {
                        td.removeAttribute("data-autoforbid");
                        td.classList.remove("forbid");
                        // Clear the dot only if there's no manual state
                        if (!current) {
                            td.innerHTML = "";
                        }
                    }
                }
            }
            function recomputeForbidden() {
                grid === null || grid === void 0 ? void 0 : grid.querySelectorAll('.cell').forEach({
                    "PuzzlePage.useEffect.recomputeForbidden": (cell)=>{
                        const td = cell;
                        // Only clear previous auto-forbid markers
                        if (td.getAttribute('data-autoforbid') === '1') {
                            td.removeAttribute('data-autoforbid');
                            td.classList.remove('forbid');
                            // remove visual dot if cell has no manual state
                            if (!getData(td, 'state')) {
                                td.innerHTML = '';
                            }
                        }
                    }
                }["PuzzlePage.useEffect.recomputeForbidden"]);
                // Règle A
                CONFIG.participants.forEach({
                    "PuzzlePage.useEffect.recomputeForbidden": (person)=>{
                        CONFIG.categories.forEach({
                            "PuzzlePage.useEffect.recomputeForbidden": (category)=>{
                                const cells = Array.from((grid === null || grid === void 0 ? void 0 : grid.querySelectorAll('.cell[data-person="'.concat(person, '"][data-category="').concat(category, '"]'))) || []);
                                const ok = cells.find({
                                    "PuzzlePage.useEffect.recomputeForbidden.ok": (c)=>getData(c, "state") === "ok"
                                }["PuzzlePage.useEffect.recomputeForbidden.ok"]);
                                if (ok) cells.forEach({
                                    "PuzzlePage.useEffect.recomputeForbidden": (c)=>{
                                        if (c !== ok) setForbidden(c, true);
                                    }
                                }["PuzzlePage.useEffect.recomputeForbidden"]);
                            }
                        }["PuzzlePage.useEffect.recomputeForbidden"]);
                    }
                }["PuzzlePage.useEffect.recomputeForbidden"]);
                // Règle B
                CONFIG.categories.forEach({
                    "PuzzlePage.useEffect.recomputeForbidden": (category)=>{
                        const allValueCells = Array.from((grid === null || grid === void 0 ? void 0 : grid.querySelectorAll('.cell[data-category="'.concat(category, '"][data-person]'))) || []);
                        const values = [
                            ...new Set(allValueCells.map({
                                "PuzzlePage.useEffect.recomputeForbidden": (td)=>getData(td, "value") || ""
                            }["PuzzlePage.useEffect.recomputeForbidden"]))
                        ];
                        values.forEach({
                            "PuzzlePage.useEffect.recomputeForbidden": (value)=>{
                                const sameValueCells = allValueCells.filter({
                                    "PuzzlePage.useEffect.recomputeForbidden.sameValueCells": (td)=>getData(td, "value") === value
                                }["PuzzlePage.useEffect.recomputeForbidden.sameValueCells"]);
                                const ok = sameValueCells.find({
                                    "PuzzlePage.useEffect.recomputeForbidden.ok": (td)=>getData(td, "state") === "ok"
                                }["PuzzlePage.useEffect.recomputeForbidden.ok"]);
                                if (ok) sameValueCells.forEach({
                                    "PuzzlePage.useEffect.recomputeForbidden": (td)=>{
                                        if (td !== ok) setForbidden(td, true);
                                    }
                                }["PuzzlePage.useEffect.recomputeForbidden"]);
                            }
                        }["PuzzlePage.useEffect.recomputeForbidden"]);
                    }
                }["PuzzlePage.useEffect.recomputeForbidden"]);
                // Règle C (paires)
                const pairs = [
                    ...new Set(Array.from((grid === null || grid === void 0 ? void 0 : grid.querySelectorAll('.cell[data-pair]')) || []).map({
                        "PuzzlePage.useEffect.recomputeForbidden": (td)=>getData(td, "pair") || ""
                    }["PuzzlePage.useEffect.recomputeForbidden"]))
                ];
                pairs.forEach({
                    "PuzzlePage.useEffect.recomputeForbidden": (pair)=>{
                        const cells = grid ? Array.from(grid.querySelectorAll('.cell[data-pair="'.concat(pair, '"]'))) : [];
                        const lefts = [
                            ...new Set(cells.map({
                                "PuzzlePage.useEffect.recomputeForbidden": (td)=>getData(td, "left") || ""
                            }["PuzzlePage.useEffect.recomputeForbidden"]))
                        ];
                        lefts.forEach({
                            "PuzzlePage.useEffect.recomputeForbidden": (left)=>{
                                const rowCells = cells.filter({
                                    "PuzzlePage.useEffect.recomputeForbidden.rowCells": (td)=>getData(td, "left") === left
                                }["PuzzlePage.useEffect.recomputeForbidden.rowCells"]);
                                const ok = rowCells.find({
                                    "PuzzlePage.useEffect.recomputeForbidden.ok": (td)=>getData(td, "state") === "ok"
                                }["PuzzlePage.useEffect.recomputeForbidden.ok"]);
                                if (ok) rowCells.forEach({
                                    "PuzzlePage.useEffect.recomputeForbidden": (td)=>{
                                        if (td !== ok) setForbidden(td, true);
                                    }
                                }["PuzzlePage.useEffect.recomputeForbidden"]);
                            }
                        }["PuzzlePage.useEffect.recomputeForbidden"]);
                        const tops = [
                            ...new Set(cells.map({
                                "PuzzlePage.useEffect.recomputeForbidden": (td)=>getData(td, "top") || ""
                            }["PuzzlePage.useEffect.recomputeForbidden"]))
                        ];
                        tops.forEach({
                            "PuzzlePage.useEffect.recomputeForbidden": (top)=>{
                                const colCells = cells.filter({
                                    "PuzzlePage.useEffect.recomputeForbidden.colCells": (td)=>getData(td, "top") === top
                                }["PuzzlePage.useEffect.recomputeForbidden.colCells"]);
                                const ok = colCells.find({
                                    "PuzzlePage.useEffect.recomputeForbidden.ok": (td)=>getData(td, "state") === "ok"
                                }["PuzzlePage.useEffect.recomputeForbidden.ok"]);
                                if (ok) colCells.forEach({
                                    "PuzzlePage.useEffect.recomputeForbidden": (td)=>{
                                        if (td !== ok) setForbidden(td, true);
                                    }
                                }["PuzzlePage.useEffect.recomputeForbidden"]);
                            }
                        }["PuzzlePage.useEffect.recomputeForbidden"]);
                    }
                }["PuzzlePage.useEffect.recomputeForbidden"]);
            }
            function updateRecap() {
                CONFIG.participants.forEach({
                    "PuzzlePage.useEffect.updateRecap": (p)=>{
                        CONFIG.categories.forEach({
                            "PuzzlePage.useEffect.updateRecap": (cat)=>{
                                const ok = Array.from((grid === null || grid === void 0 ? void 0 : grid.querySelectorAll('.cell[data-person="'.concat(p, '"][data-category="').concat(cat, '"][data-state="ok"]'))) || []);
                                const val = ok.map({
                                    "PuzzlePage.useEffect.updateRecap.val": (td)=>getData(td, "value")
                                }["PuzzlePage.useEffect.updateRecap.val"]).filter(Boolean);
                                const cls = CONFIG.recapClassByCategory[cat];
                                const cell = document.querySelector('#recap tbody tr[data-person="'.concat(p, '"] .').concat(cls));
                                if (!cell) return;
                                if (val.length === 1) cell.textContent = val[0];
                                else if (val.length === 0) cell.textContent = "—";
                                else cell.textContent = "⚠︎ multiple";
                            }
                        }["PuzzlePage.useEffect.updateRecap"]);
                    }
                }["PuzzlePage.useEffect.updateRecap"]);
            }
            function fillSolution(map) {
                if (!map) return;
                CONFIG.participants.forEach({
                    "PuzzlePage.useEffect.fillSolution": (p)=>{
                        const row = document.querySelector('#solution tbody tr[data-person="'.concat(p, '"]'));
                        if (!row || !map[p]) return;
                        const headers = solutionTable ? Array.from(solutionTable.querySelectorAll("thead th")).map({
                            "PuzzlePage.useEffect.fillSolution": (th)=>{
                                var _th_textContent;
                                return ((_th_textContent = th.textContent) === null || _th_textContent === void 0 ? void 0 : _th_textContent.trim()) || "";
                            }
                        }["PuzzlePage.useEffect.fillSolution"]).slice(1) : [];
                        const tds = Array.from(row.querySelectorAll("td"));
                        headers.forEach({
                            "PuzzlePage.useEffect.fillSolution": (cat, i)=>{
                                const td = tds[i];
                                if (td) td.textContent = map[p][cat] || "—";
                            }
                        }["PuzzlePage.useEffect.fillSolution"]);
                    }
                }["PuzzlePage.useEffect.fillSolution"]);
            }
            grid.addEventListener("click", {
                "PuzzlePage.useEffect": (e)=>{
                    const td = e.target.closest(".cell");
                    if (!td) return;
                    // 🚫 Bloquer tout clic sur une cellule grisée automatiquement
                    if (td.getAttribute('data-autoforbid') === '1') {
                        return; // ne pas autoriser la modification d'une cellule auto-forbid
                    }
                    const cur = getData(td, "state") || "";
                    const next = CELL_STATES[(CELL_STATES.indexOf(cur) + 1) % CELL_STATES.length];
                    // Appliquer la modification
                    setState(td, next);
                    // Enregistrer uniquement les actions manuelles de l'utilisateur
                    if (cur !== next) {
                        history.push({
                            el: td,
                            prev: cur,
                            next
                        });
                        updateUndoButton();
                    }
                    recomputeForbidden();
                    updateRecap();
                    saveProgress();
                }
            }["PuzzlePage.useEffect"]);
            (_document_getElementById = document.getElementById("reset")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.addEventListener("click", {
                "PuzzlePage.useEffect": ()=>{
                    grid.querySelectorAll(".cell").forEach({
                        "PuzzlePage.useEffect": (td)=>setState(td, "")
                    }["PuzzlePage.useEffect"]);
                    updateRecap();
                    recomputeForbidden();
                    try {
                        localStorage.removeItem(STORAGE_KEY);
                    } catch (e) {}
                    history = [];
                    updateUndoButton();
                }
            }["PuzzlePage.useEffect"]);
            (_document_getElementById1 = document.getElementById("undo")) === null || _document_getElementById1 === void 0 ? void 0 : _document_getElementById1.addEventListener("click", {
                "PuzzlePage.useEffect": ()=>{
                    performUndo();
                }
            }["PuzzlePage.useEffect"]);
            (_document_getElementById2 = document.getElementById("toggleCorrection")) === null || _document_getElementById2 === void 0 ? void 0 : _document_getElementById2.addEventListener("click", {
                "PuzzlePage.useEffect": ()=>{
                    const sol = solutionTable;
                    const btn = document.getElementById("toggleCorrection");
                    if (!btn) return;
                    sol.classList.toggle("hidden");
                    btn.textContent = sol.classList.contains("hidden") ? "Afficher la correction" : "Masquer la correction";
                }
            }["PuzzlePage.useEffect"]);
            (_document_getElementById3 = document.getElementById("toggleHints")) === null || _document_getElementById3 === void 0 ? void 0 : _document_getElementById3.addEventListener("click", {
                "PuzzlePage.useEffect": ()=>{
                    const list = document.getElementById("hintsList");
                    const btn = document.getElementById("toggleHints");
                    if (!list || !btn) return;
                    list.classList.toggle("hidden");
                    btn.textContent = list.classList.contains("hidden") ? "Afficher les indices" : "Masquer les indices";
                }
            }["PuzzlePage.useEffect"]);
            // Toggle strikethrough on hint click + pointer cursor (with persistence)
            applySavedHints();
            document.querySelectorAll("#hintsList li").forEach({
                "PuzzlePage.useEffect": (li)=>{
                    const el = li;
                    el.style.cursor = "pointer";
                    li.addEventListener("click", {
                        "PuzzlePage.useEffect": ()=>{
                            el.style.textDecoration = el.style.textDecoration === "line-through" ? "" : "line-through";
                            saveHintsState();
                        }
                    }["PuzzlePage.useEffect"]);
                }
            }["PuzzlePage.useEffect"]);
            fillSolution(CONFIG.solution);
            loadProgress();
            updateRecap();
            recomputeForbidden();
        }
    }["PuzzlePage.useEffect"], [
        level
    ]);
    const cfg = LEVEL_CONFIGS[level];
    if (!cfg) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            style: {
                maxWidth: 980,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: [
                        "Niveau ",
                        level
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                    lineNumber: 697,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Ce niveau n’est pas encore défini."
                }, void 0, false, {
                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                    lineNumber: 698,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
            lineNumber: 696,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PuzzleView, {
        cfg: cfg
    }, void 0, false, {
        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
        lineNumber: 703,
        columnNumber: 10
    }, this);
}
_s(PuzzlePage, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c1 = PuzzlePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "PuzzleView");
__turbopack_context__.k.register(_c1, "PuzzlePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
        // ignore click for browser’s default behavior
        return;
    }
    if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
            // browser default behavior does not replace the history state
            // so we need to do it manually
            e.preventDefault();
            location.replace(href);
        }
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    if (onNavigate) {
        let isDefaultPrevented = false;
        onNavigate({
            preventDefault: ()=>{
                isDefaultPrevented = true;
            }
        });
        if (isDefaultPrevented) {
            return;
        }
    }
    _react.default.startTransition(()=>{
        (0, _approuterinstance.dispatchNavigateAction)(as || href, replace ? 'replace' : 'push', scroll != null ? scroll : true, linkInstanceRef.current);
    });
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _segmentcache.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto' && props[key] !== 'unstable_forceStale') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto" | "unstable_forceStale"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href"), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _segmentcache.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _segmentcache.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
]);

//# sourceMappingURL=_80690b01._.js.map