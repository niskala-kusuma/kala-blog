// @ts-nocheck
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',       // 1️⃣ Parser untuk TS(X) :contentReference[oaicite:6]{index=6}
    parserOptions: {
      project: './tsconfig.json',             // 2️⃣ Typed linting :contentReference[oaicite:7]{index=7}
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: { jsx: true },            // 3️⃣ Enable JSX :contentReference[oaicite:8]{index=8}
    },
    settings: {
      react: { version: 'detect' },           // 4️⃣ Auto-detect React version :contentReference[oaicite:9]{index=9}
      'import/resolver': {
        node: {
          paths: ['src'],                     // 5️⃣ Resolve absolute imports dari src :contentReference[oaicite:10]{index=10}
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {},                       // 6️⃣ Juga resolve berdasarkan tsconfig paths :contentReference[oaicite:11]{index=11}
      },
    },
    plugins: [
      'react',
      'react-hooks',
      '@typescript-eslint',
      'import',
    ],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',             // React rules :contentReference[oaicite:12]{index=12}
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'prettier',                             // Supaya ESLint dan Prettier gak konflik
    ],
    rules: {
      // Contoh custom rule:
      // '@typescript-eslint/explicit-function-return-type': 'off',
    },
  }
  