/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
    moduleFileExtensions: ["js", "ts", "vue"],
    transform: {
        "^.+\\.vue$": "@vue/vue3-jest",
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/resources/ts/$1",
        ziggy: "<rootDir>/vendor/tightenco/ziggy/dist",
    },
    automock: true,
};
