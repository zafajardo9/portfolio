'use client';
"use strict";
exports.__esModule = true;
var fa_1 = require("react-icons/fa");
var io_1 = require("react-icons/io");
var link_1 = require("next/link");
var button_1 = require("@/components/ui/button");
var ContainerWorks = function (_a) {
    var icon = _a.icon, projectInfo = _a.projectInfo, techIcons = _a.techIcons, projectName = _a.projectName, details = _a.details, githubLink = _a.githubLink, liveDemoLink = _a.liveDemoLink, status = _a.status, branch = _a.branch;
    return (React.createElement("div", { className: "flex flex-col w-full p-6 rounded-md border gap-2 shadow-md" },
        React.createElement("div", { className: "flex items-center gap-3" },
            React.createElement("div", { className: "p-3 border rounded-full bg-muted" }, icon),
            React.createElement("div", { className: "flex flex-col" },
                React.createElement("h1", { className: "font-bold" }, projectName),
                React.createElement("p", null, details)),
            React.createElement("div", { className: "flex ml-auto gap-2" }, techIcons.map(function (techIcon, index) { return (React.createElement("div", { key: index, className: "p-2 border rounded-full" }, techIcon)); }))),
        React.createElement("div", null,
            React.createElement("p", { className: "text-xs opacity-85 p-4" }, projectInfo)),
        React.createElement(link_1["default"], { href: githubLink },
            React.createElement("div", { className: "w-full rounded-full px-6 py-1 flex items-center gap-3 text-center text-sm font-bold" },
                React.createElement(fa_1.FaGithub, null),
                " ",
                new URL(githubLink).pathname.replace(/^\//, ''))),
        React.createElement(button_1.Button, { asChild: true, variant: "btn_icon_works" },
            React.createElement(link_1["default"], { href: liveDemoLink },
                React.createElement(fa_1.FaPlay, null),
                " Live Demo")),
        React.createElement("div", { className: "text-sm" },
            React.createElement("div", { className: "flex items-center" },
                React.createElement("p", null, "Status:"),
                React.createElement("p", { className: "text-green-600 font-bold px-1" }, status),
                React.createElement(io_1.IoIosGitBranch, null),
                React.createElement("strong", null, branch)))));
};
exports["default"] = ContainerWorks;
