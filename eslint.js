module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "plugin:ava/recommended"
  ],
  "plugins": [
    "ava"
  ],
  "rules": {
    "react/sort-comp": [2, {
      "order": [
        "lifecycle",
        "/^on.+$/",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "everything-else",
        "/^render.+$/",
        "render"
      ]
    }],
    "object-shorthand": [2, "always"],
    "object-curly-spacing": [2, "always", {
      "objectsInObjects": false,
      "arraysInObjects": false
    }],
    "react/jsx-curly-spacing": [2, "never", {"allowMultiline": true}],
    "react/no-multi-comp": [2, { "ignoreStateless": true }],
    "no-use-before-define": [2, "nofunc"],
    "no-console": 2,
  }
};