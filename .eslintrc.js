module.exports = {
    root: true,
    env: {
        node: true,
        "jest": true,
        "browser": true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-alert": "off",
        "no-array-constructor": "off",
        "no-bitwise": "off",
        "no-caller": "off",
        "no-case-declarations": "error",
        "no-catch-shadow": "off",
        "no-class-assign": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": "off",
        "no-use-before-define": "off",
        "linebreak-style": 0,
        "no-unused-vars": "off",
        "no-undef":"off",
        "no-empty":"off",
        "no-unused-components" :"off",
        "no-mixed-spaces-and-tabs": 0, 
    },
    globals: {
        var1: "readonly",
        var2: "writable",
        console: "off",
        window: "off",
        lodash: "off",
        Promise: "off",
        const: "off",
        "_": "readonly"
    },
};
