import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jest from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ignores: ['node_modules/**/*', 'dist/**/*', 'coverage/**/*'],
    },
    { files: ['src/**/*.{js,mjs,cjs,ts}', 'tests/**/*.{js,mjs,cjs,ts}'] },
    { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['tests/**/*.{js,mjs,cjs,ts}'],
        ...jest.configs['flat/recommended'],
        rules: {
            ...jest.configs['flat/recommended'].rules,
            'jest/prefer-expect-assertions': 'off',
        },
    },
    {
        rules: {
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            indent: 'off',
        },
    },
    eslintPluginPrettierRecommended,
];
