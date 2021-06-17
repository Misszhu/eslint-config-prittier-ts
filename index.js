module.exports = {
    parser: '@typescript-eslint/parser', //  一个 ESLint 特定的解析器，它利用typescript-estree并被设计用来替代 ESLint 的默认解析器，espree.
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
    ], //使用推荐的React代码检测规范
    // 插件名
    plugins: ['@typescript-eslint'],
    // 指定要启用的环境
    env: {
      browser: true,
      node: true,
    },
    settings: {
      //自动发现React的版本，从而进行规范react代码
      react: {
        pragma: 'React',
        version: 'detect',
      },
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
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 0,
      '@typescript-eslint/ban-types': 0,
      '@typescript-eslint/dot-notation': 0, // 尽可能地执行点表示法
      '@typescript-eslint/no-unused-vars': 0, // 禁止出现未使用过的变量
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/class-name-casing': 0,
      '@typescript-eslint/no-empty-function': 0, // 禁止出现空函数
      '@typescript-eslint/no-use-before-define': 0, // 禁止在变量定义之前使用它们
      '@typescript-eslint/triple-slash-reference': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
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
  