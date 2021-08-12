module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "at-rule-empty-line-before": null,
    "at-rule-no-unknown": null,
    "color-hex-length": null,
    "declaration-colon-newline-after": null,
    "declaration-empty-line-before": [
      "never",
      {
        ignore: ["after-declaration"],
      },
    ],
    indentation: [
      2,
      {
        ignore: ["inside-parens"],
      },
    ],
  },
};
