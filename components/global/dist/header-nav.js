'use client';
"use strict";
exports.__esModule = true;
exports.HeaderNav = void 0;
var link_1 = require("next/link");
var react_1 = require("react");
var avatar_1 = require("@/components/ui/avatar");
var button_1 = require("@/components/ui/button");
var soc_links_1 = require("./soc-links");
var fa6_1 = require("react-icons/fa6");
var hover_card_1 = require("@/components/ui/hover-card");
var react_2 = require("react");
var lu_1 = require("react-icons/lu");
var drawer_1 = require("@/components/ui/drawer");
var CopyToClipboardButton = function (_a) {
    var text = _a.text;
    var _b = react_2.useState(false), copied = _b[0], setCopied = _b[1];
    var handleCopyClick = function () {
        navigator.clipboard.writeText(text)
            .then(function () {
            // Copy successful
            setCopied(true);
            // Reset the icon after a delay (e.g., 2 seconds)
            setTimeout(function () {
                setCopied(false);
            }, 2000);
        })["catch"](function (error) {
            console.error('Error copying to clipboard:', error);
        });
    };
    return (react_1["default"].createElement("button", { onClick: handleCopyClick }, copied ? react_1["default"].createElement(lu_1.LuCopyCheck, { className: 'text-green-500' }) : react_1["default"].createElement(lu_1.LuCopy, { className: 'hover:text-colorOne' })));
};
function HeaderNav() {
    return (react_1["default"].createElement("div", { className: "sm:flex flex-row" },
        react_1["default"].createElement("div", { className: "w-full" },
            react_1["default"].createElement("div", { className: "grid grid-cols-2 sm:grid-cols-4 h-96 w-full" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "p-4 h-4/5 flex flex-col text-right justify-around" },
                        react_1["default"].createElement("h1", { className: "text-2xl font-bold" }, "Say Hello"),
                        react_1["default"].createElement(hover_card_1.HoverCard, null,
                            react_1["default"].createElement(hover_card_1.HoverCardTrigger, null,
                                react_1["default"].createElement("p", { className: 'text-sm' },
                                    "zafajardo9@gmail.com ",
                                    react_1["default"].createElement(CopyToClipboardButton, { text: "zafajardo9@gmail.com" }))),
                            react_1["default"].createElement(hover_card_1.HoverCardContent, { className: 'p-4 flex align-middle justify-around' },
                                react_1["default"].createElement(avatar_1.Avatar, null,
                                    react_1["default"].createElement(avatar_1.AvatarImage, { src: "https://ik.imagekit.io/23umzxu6uw/2.png?updatedAt=1706607362185" }),
                                    react_1["default"].createElement(avatar_1.AvatarFallback, null, "Z")),
                                react_1["default"].createElement("a", { href: 'mailto:zafajardo9@gmail.com' }, "Email me here! "),
                                react_1["default"].createElement(fa6_1.FaArrowTurnUp, { className: 'text-colorOne' }))),
                        react_1["default"].createElement(soc_links_1["default"], null)),
                    react_1["default"].createElement("p", { className: "text-xs" }, "Built By Zack")),
                react_1["default"].createElement("div", { className: "bg-colorOne p-8 text-white font-bold flex flex-col justify-between" },
                    react_1["default"].createElement("div", { className: "text-2xl" },
                        react_1["default"].createElement("h1", null, "My Works")),
                    react_1["default"].createElement(link_1["default"], { href: "/works" },
                        react_1["default"].createElement(drawer_1.DrawerClose, null,
                            react_1["default"].createElement(button_1.Button, { variant: "custom" }, "See more")))),
                react_1["default"].createElement("div", { className: "bg-colorTwo p-8 text-white font-bold flex flex-col justify-between" },
                    react_1["default"].createElement("div", { className: "text-2xl" },
                        react_1["default"].createElement("h1", null, "Hobbies")),
                    react_1["default"].createElement(link_1["default"], { href: "/hobbies" },
                        react_1["default"].createElement(drawer_1.DrawerClose, null,
                            react_1["default"].createElement(button_1.Button, { variant: "custom" }, "See more")))),
                react_1["default"].createElement("div", { className: "bg-colorThree p-8 text-white font-bold flex flex-col justify-between" },
                    react_1["default"].createElement("div", { className: "text-2xl" },
                        react_1["default"].createElement("h1", null, "About Me")),
                    react_1["default"].createElement(link_1["default"], { href: "/works" },
                        react_1["default"].createElement(drawer_1.DrawerClose, null,
                            react_1["default"].createElement(button_1.Button, { variant: "custom", disabled: true }, "See more"))))))));
}
exports.HeaderNav = HeaderNav;
