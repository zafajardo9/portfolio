'use client';
"use strict";
exports.__esModule = true;
exports.Navbar = void 0;
var link_1 = require("next/link");
var react_1 = require("react");
var fi_1 = require("react-icons/fi");
var avatar_1 = require("@/components/ui/avatar");
var button_1 = require("@/components/ui/button");
var drawer_1 = require("../ui/drawer");
function Navbar() {
    return (react_1["default"].createElement("div", { className: "flex justify-between items-center bg-white px-8 \r\n        rounded-lg m-3 shadow-md fixed top-0 left-1/2 \r\n        transform -translate-x-1/2 w-full max-w-screen-xl\r\n        \r\n        " },
        react_1["default"].createElement("div", { className: "text-lg font-semibold" },
            react_1["default"].createElement(link_1["default"], { href: "/" },
                react_1["default"].createElement(avatar_1.Avatar, null,
                    react_1["default"].createElement(avatar_1.AvatarImage, { src: "https://ik.imagekit.io/23umzxu6uw/2.png?updatedAt=1706607362185" }),
                    react_1["default"].createElement(avatar_1.AvatarFallback, null, "Z")))),
        react_1["default"].createElement("div", { className: "flex items-center divide-x" },
            react_1["default"].createElement("ul", { className: "relative flex items-center justify-between h-16 bg-gray space-x-8" },
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(button_1.Button, { variant: "main" },
                        react_1["default"].createElement(link_1["default"], { href: "https://ik.imagekit.io/23umzxu6uw/Fajardo-Resume%201.pdf?updatedAt=1707619553129", className: "hover:font-bold", "data-no-prefetch": true }, "Download Resume"))),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(drawer_1.DrawerTrigger, null,
                        react_1["default"].createElement(fi_1.FiMenu, null)))))));
}
exports.Navbar = Navbar;
