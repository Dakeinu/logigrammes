module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/puzzle/[level]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PuzzlePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
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
function PuzzleView({ cfg }) {
    const [CAT_A, CAT_B, CAT_C] = cfg.categories;
    const valsA = cfg.values[CAT_A];
    const valsB = cfg.values[CAT_B];
    const valsC = cfg.values[CAT_C];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            maxWidth: 980,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: cfg.title
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: cfg.subtitle
            }, void 0, false, {
                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "controls",
                style: {
                    textAlign: "center",
                    marginBottom: 16
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "hints",
                className: "hints card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hints-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "hints-title",
                                    children: "Indices"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "hints-list",
                            id: "hintsList",
                            children: cfg.hints.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gridWrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "grid",
                    id: "grid",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "sideLabel topBlank groupLeft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "sideLabel topBlank rowLeft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "colHead col-1",
                                        colSpan: 4,
                                        children: CAT_A
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "colHead col-2",
                                        colSpan: 4,
                                        children: CAT_B
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "sideLabel groupLeft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "sideLabel rowLeft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    valsA.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "v col-1",
                                            children: v
                                        }, `${CAT_A}-${v}`, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 34
                                        }, this)),
                                    valsB.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "v col-2",
                                            children: v
                                        }, `${CAT_B}-${v}`, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 34
                                        }, this)),
                                    valsC.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "v col-3",
                                            children: v
                                        }, `${CAT_C}-${v}`, false, {
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
                            cfg.participants.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "block-1",
                                    children: [
                                        idx === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            rowSpan: cfg.participants.length,
                                            className: "sideLabel groupLeft row-1",
                                            children: "Personne"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 31
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "rowLeft",
                                            children: p
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this),
                                        valsA.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-1",
                                                "data-person": p,
                                                "data-category": CAT_A,
                                                "data-value": v
                                            }, `${p}-${CAT_A}-${v}`, false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this)),
                                        valsB.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-2",
                                                "data-person": p,
                                                "data-category": CAT_B,
                                                "data-value": v
                                            }, `${p}-${CAT_B}-${v}`, false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this)),
                                        valsC.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-3",
                                                "data-person": p,
                                                "data-category": CAT_C,
                                                "data-value": v
                                            }, `${p}-${CAT_C}-${v}`, false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, `p-${p}`, true, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)),
                            valsC.map((left, idxRow)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "block-2",
                                    children: [
                                        idxRow === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            rowSpan: valsC.length,
                                            className: "sideLabel groupLeft row-2",
                                            children: CAT_C
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "rowLeft",
                                            children: left
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this),
                                        valsA.map((top)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-1",
                                                "data-pair": `${CAT_C}|${CAT_A}`,
                                                "data-leftcat": CAT_C,
                                                "data-left": left,
                                                "data-topcat": CAT_A,
                                                "data-top": top
                                            }, `${CAT_C}|${CAT_A}-${left}-${top}`, false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this)),
                                        valsB.map((top)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-2",
                                                "data-pair": `${CAT_C}|${CAT_B}`,
                                                "data-leftcat": CAT_C,
                                                "data-left": left,
                                                "data-topcat": CAT_B,
                                                "data-top": top
                                            }, `${CAT_C}|${CAT_B}-${left}-${top}`, false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 50
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 83
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 116
                                        }, this)
                                    ]
                                }, `c-${left}`, true, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this)),
                            valsB.map((left, idxRow)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "block-boisson",
                                    children: [
                                        idxRow === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            rowSpan: valsB.length,
                                            className: "sideLabel groupLeft row-3",
                                            children: CAT_B
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "rowLeft",
                                            children: left
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this),
                                        valsA.map((top)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "cell col-1",
                                                "data-pair": `${CAT_B}|${CAT_A}`,
                                                "data-leftcat": CAT_B,
                                                "data-left": left,
                                                "data-topcat": CAT_A,
                                                "data-top": top
                                            }, `${CAT_B}|${CAT_A}-${left}-${top}`, false, {
                                                fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 50
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 83
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 116
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 50
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 83
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "blank col-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 116
                                        }, this)
                                    ]
                                }, `b-${left}`, true, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "controls",
                style: {
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: "reset",
                        className: "btn",
                        type: "button",
                        children: "Effacer la grille"
                    }, void 0, false, {
                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "answers",
                id: "recap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Participant"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                cfg.categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: c
                                    }, `recap-head-${c}`, false, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: cfg.participants.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                "data-person": p,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: p
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    cfg.categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: cfg.recapClasses[c]
                                        }, `recap-${p}-${c}`, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, `recap-${p}`, true, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "answers hidden",
                id: "solution",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Correction"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                cfg.categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: c
                                    }, `sol-head-${c}`, false, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: cfg.participants.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                "data-person": p,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: p
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this),
                                    cfg.categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `s-${c.toLowerCase()}`,
                                            children: "—"
                                        }, `sol-${p}-${c}`, false, {
                                            fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 43
                                        }, this))
                                ]
                            }, `sol-${p}`, true, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
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
/** Helpers d'attributs data-* pour éviter dataset:any */ const getData = (el, key)=>el.getAttribute(`data-${key}`);
const setData = (el, key, value)=>{
    if (value === null || value === "") el.removeAttribute(`data-${key}`);
    else el.setAttribute(`data-${key}`, value);
};
function PuzzlePage({ params }) {
    const { level } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        document.addEventListener("keydown", (e)=>{
            const isUndo = (e.key === "z" || e.key === "Z") && (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey;
            if (!isUndo) return;
            e.preventDefault();
            performUndo();
        });
        const CELL_STATES = [
            "",
            "no",
            "ok"
        ];
        function inferParticipants() {
            const rows = recapTable ? Array.from(recapTable.querySelectorAll('tbody tr[data-person]')) : [];
            if (rows.length) {
                return rows.map((r)=>r.getAttribute("data-person")).filter((v)=>!!v);
            }
            const ths = grid ? Array.from(grid.querySelectorAll("tr.block-1 .rowLeft")) : [];
            if (ths.length) return ths.map((th)=>th.textContent?.trim() || "").filter(Boolean);
            return [];
        }
        function inferCategories() {
            const heads = recapTable ? Array.from(recapTable.querySelectorAll("thead th")).map((th)=>th.textContent?.trim() || "").filter(Boolean) : [];
            if (heads.length > 1) return heads.slice(1);
            const colHeads = grid ? Array.from(grid.querySelectorAll(".colHead")).map((th)=>th.textContent?.trim() || "").filter(Boolean) : [];
            if (colHeads.length) return colHeads;
            return [];
        }
        function inferRecapClassByCategory(categories) {
            const firstRow = recapTable ? recapTable.querySelector("tbody tr") : null;
            const headCats = recapTable ? Array.from(recapTable.querySelectorAll("thead th")).map((th)=>th.textContent?.trim() || "").slice(1) : [];
            const cells = firstRow ? Array.from(firstRow.querySelectorAll("td")) : [];
            const map = {};
            headCats.forEach((cat, i)=>{
                const td = cells[i];
                if (!td) return;
                const cls = Array.from(td.classList).find((c)=>c.startsWith("r-"));
                if (cls) map[cat] = cls;
            });
            categories.forEach((cat)=>{
                if (!map[cat]) map[cat] = `r-${cat.toLowerCase()}`;
            });
            return map;
        }
        function readJsonSolution() {
            const el = document.getElementById("puzzle-solution");
            if (el) {
                const raw = el.textContent?.trim();
                if (raw) {
                    try {
                        return JSON.parse(raw);
                    } catch  {
                    /* ignore */ }
                }
            }
            return null;
        }
        const CONFIG = {
            participants: inferParticipants(),
            categories: inferCategories(),
            recapClassByCategory: {},
            solution: readJsonSolution() ?? {}
        };
        CONFIG.recapClassByCategory = inferRecapClassByCategory(CONFIG.categories);
        // --- Persistence (localStorage) ---
        const STORAGE_KEY = `puzzle-progress-${level}`;
        const HINTS_STORAGE_KEY = `puzzle-hints-${level}`;
        function saveHintsState() {
            try {
                const list = document.querySelectorAll("#hintsList li");
                const checked = [];
                list.forEach((li, idx)=>{
                    const el = li;
                    if (el.style.textDecoration === "line-through") {
                        checked.push(idx);
                    }
                });
                localStorage.setItem(HINTS_STORAGE_KEY, JSON.stringify(checked));
            } catch  {}
        }
        function applySavedHints() {
            try {
                const raw = localStorage.getItem(HINTS_STORAGE_KEY);
                if (!raw) return;
                const checked = JSON.parse(raw);
                const set = new Set(checked);
                document.querySelectorAll("#hintsList li").forEach((li, idx)=>{
                    const el = li;
                    el.style.cursor = "pointer";
                    el.style.textDecoration = set.has(idx) ? "line-through" : "";
                });
            } catch  {}
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
            grid.querySelectorAll(".cell").forEach((td)=>{
                const state = getData(td, "state") || "";
                if (state) {
                    data[makeCellKey(td)] = state;
                }
            });
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            } catch  {}
        }
        function loadProgress() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (!raw) return;
                const data = JSON.parse(raw);
                grid?.querySelectorAll(".cell").forEach((td)=>{
                    const key = makeCellKey(td);
                    const st = data[key];
                    if (st === "ok" || st === "no") {
                        setState(td, st);
                    } else if (!st) {
                    // leave empty
                    }
                });
            } catch  {}
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
            grid?.querySelectorAll('.cell').forEach((cell)=>{
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
            });
            // Règle A
            CONFIG.participants.forEach((person)=>{
                CONFIG.categories.forEach((category)=>{
                    const cells = Array.from(grid?.querySelectorAll(`.cell[data-person="${person}"][data-category="${category}"]`) || []);
                    const ok = cells.find((c)=>getData(c, "state") === "ok");
                    if (ok) cells.forEach((c)=>{
                        if (c !== ok) setForbidden(c, true);
                    });
                });
            });
            // Règle B
            CONFIG.categories.forEach((category)=>{
                const allValueCells = Array.from(grid?.querySelectorAll(`.cell[data-category="${category}"][data-person]`) || []);
                const values = [
                    ...new Set(allValueCells.map((td)=>getData(td, "value") || ""))
                ];
                values.forEach((value)=>{
                    const sameValueCells = allValueCells.filter((td)=>getData(td, "value") === value);
                    const ok = sameValueCells.find((td)=>getData(td, "state") === "ok");
                    if (ok) sameValueCells.forEach((td)=>{
                        if (td !== ok) setForbidden(td, true);
                    });
                });
            });
            // Règle C (paires)
            const pairs = [
                ...new Set(Array.from(grid?.querySelectorAll('.cell[data-pair]') || []).map((td)=>getData(td, "pair") || ""))
            ];
            pairs.forEach((pair)=>{
                const cells = grid ? Array.from(grid.querySelectorAll(`.cell[data-pair="${pair}"]`)) : [];
                const lefts = [
                    ...new Set(cells.map((td)=>getData(td, "left") || ""))
                ];
                lefts.forEach((left)=>{
                    const rowCells = cells.filter((td)=>getData(td, "left") === left);
                    const ok = rowCells.find((td)=>getData(td, "state") === "ok");
                    if (ok) rowCells.forEach((td)=>{
                        if (td !== ok) setForbidden(td, true);
                    });
                });
                const tops = [
                    ...new Set(cells.map((td)=>getData(td, "top") || ""))
                ];
                tops.forEach((top)=>{
                    const colCells = cells.filter((td)=>getData(td, "top") === top);
                    const ok = colCells.find((td)=>getData(td, "state") === "ok");
                    if (ok) colCells.forEach((td)=>{
                        if (td !== ok) setForbidden(td, true);
                    });
                });
            });
        }
        function updateRecap() {
            CONFIG.participants.forEach((p)=>{
                CONFIG.categories.forEach((cat)=>{
                    const ok = Array.from(grid?.querySelectorAll(`.cell[data-person="${p}"][data-category="${cat}"][data-state="ok"]`) || []);
                    const val = ok.map((td)=>getData(td, "value")).filter(Boolean);
                    const cls = CONFIG.recapClassByCategory[cat];
                    const cell = document.querySelector(`#recap tbody tr[data-person="${p}"] .${cls}`);
                    if (!cell) return;
                    if (val.length === 1) cell.textContent = val[0];
                    else if (val.length === 0) cell.textContent = "—";
                    else cell.textContent = "⚠︎ multiple";
                });
            });
        }
        function fillSolution(map) {
            if (!map) return;
            CONFIG.participants.forEach((p)=>{
                const row = document.querySelector(`#solution tbody tr[data-person="${p}"]`);
                if (!row || !map[p]) return;
                const headers = solutionTable ? Array.from(solutionTable.querySelectorAll("thead th")).map((th)=>th.textContent?.trim() || "").slice(1) : [];
                const tds = Array.from(row.querySelectorAll("td"));
                headers.forEach((cat, i)=>{
                    const td = tds[i];
                    if (td) td.textContent = map[p][cat] || "—";
                });
            });
        }
        grid.addEventListener("click", (e)=>{
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
        });
        document.getElementById("reset")?.addEventListener("click", ()=>{
            grid.querySelectorAll(".cell").forEach((td)=>setState(td, ""));
            updateRecap();
            recomputeForbidden();
            try {
                localStorage.removeItem(STORAGE_KEY);
            } catch  {}
            history = [];
            updateUndoButton();
        });
        document.getElementById("undo")?.addEventListener("click", ()=>{
            performUndo();
        });
        document.getElementById("toggleCorrection")?.addEventListener("click", ()=>{
            const sol = solutionTable;
            const btn = document.getElementById("toggleCorrection");
            if (!btn) return;
            sol.classList.toggle("hidden");
            btn.textContent = sol.classList.contains("hidden") ? "Afficher la correction" : "Masquer la correction";
        });
        document.getElementById("toggleHints")?.addEventListener("click", ()=>{
            const list = document.getElementById("hintsList");
            const btn = document.getElementById("toggleHints");
            if (!list || !btn) return;
            list.classList.toggle("hidden");
            btn.textContent = list.classList.contains("hidden") ? "Afficher les indices" : "Masquer les indices";
        });
        // Toggle strikethrough on hint click + pointer cursor (with persistence)
        applySavedHints();
        document.querySelectorAll("#hintsList li").forEach((li)=>{
            const el = li;
            el.style.cursor = "pointer";
            li.addEventListener("click", ()=>{
                el.style.textDecoration = el.style.textDecoration === "line-through" ? "" : "line-through";
                saveHintsState();
            });
        });
        fillSolution(CONFIG.solution);
        loadProgress();
        updateRecap();
        recomputeForbidden();
    }, [
        level
    ]);
    const cfg = LEVEL_CONFIGS[level];
    if (!cfg) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            style: {
                maxWidth: 980,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: [
                        "Niveau ",
                        level
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/puzzle/[level]/page.tsx",
                    lineNumber: 697,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PuzzleView, {
        cfg: cfg
    }, void 0, false, {
        fileName: "[project]/src/app/puzzle/[level]/page.tsx",
        lineNumber: 703,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__315a92d2._.js.map