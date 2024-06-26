module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked', // Reemplazado
    // 'plugin:@typescript-eslint/strict-type-checked', // Alternativa
    'plugin:@typescript-eslint/stylistic-type-checked', // Opcional
    'plugin:react-hooks/recommended',
    'plugin:react/recommended', // Agregado
    'plugin:react/jsx-runtime', // Agregado
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
