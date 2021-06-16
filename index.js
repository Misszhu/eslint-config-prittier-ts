module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
      'airbnb-typescript'
    ],
    plugins: ['@typescript-eslint'],
    // 指定要启用的环境
    env: {
      browser: true,
      node: true,
    },
    parserOptions: {    
      //指定ESLint可以解析JSX语法
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/no-empty-function': 0, // 禁止出现空函数
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-vars': 0, // 禁止出现未使用过的变量
      '@typescript-eslint/no-use-before-define': 0, // 禁止在变量定义之前使用它们
      '@typescript-eslint/class-name-casing': 0,
      '@typescript-eslint/triple-slash-reference': 0,
      'prettier/prettier': [
        'error',
        {
          printWidth: 120,
          semi: false,
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: false,
          jsxBracketSameLine: true,
          arrowParens: 'avoid',
          insertPragma: false,
          tabWidth: 2,
          useTabs: false, 
          endOfLine: 'auto',
        },
      ],
    },
  }
  