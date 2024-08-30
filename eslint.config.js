import { includeIgnoreFile } from '@eslint/compat'
import pluginJs from '@eslint/js'
import eslintPluginAstro from 'eslint-plugin-astro'
import perfectionist from 'eslint-plugin-perfectionist'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('typescript-eslint').Config}  */
export default [
  includeIgnoreFile(`${import.meta.dirname}/.gitignore`),
  { files: ['**/*.{js,ts,astro}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  perfectionist.configs['recommended-natural'],
  eslintPluginPrettierRecommended,
]
