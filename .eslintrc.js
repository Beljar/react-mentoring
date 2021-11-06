const path = require('path');

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
    ],
    "rules": {
        "react/jsx-filename-extension" : [
            1,
                {
                    "extensions": [
                        ".tsx"
                    ]
                }
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
         ],
        "@typescript-eslint/no-var-requires": 0,
        "import/prefer-default-export": "off",
        "no-use-before-define": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "react/require-default-props": "off",
        "semi": "error",
        "indent": "error",
    },
    "settings": {
        "import/resolver": {
          "alias": {
            "map": [
              ["src", path.resolve(__dirname, 'src')],
            ]
          },
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"],
            "moduleDirectory": ["node_modules", '.'],
          },
        }
      },
};
