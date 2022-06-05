const path = require("path");

module.exports = {
    resolve: {
        alias: {
            "@": path.resolve("resources/ts"),
            "ziggy-js": path.resolve("vendor/tightenco/ziggy/dist"),
        },
    },
};
