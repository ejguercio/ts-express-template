module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Utiliza el parser de TypeScript
    parserOptions: {
        ecmaVersion: 2021, // Permite el análisis de características modernas de ECMAScript
        sourceType: 'module', // Permite el uso de imports
        project: './tsconfig.json', // Especifica la ubicación de tu tsconfig.json
    },
    env: {
        node: true, // Define el entorno como Node.js
        es2021: true, // Define el entorno como ECMAScript 2021
    },
    extends: [
        'eslint:recommended', // Usa las recomendaciones base de ESLint
        'plugin:@typescript-eslint/recommended', // Usa las recomendaciones del plugin de TypeScript
        'plugin:@typescript-eslint/recommended-requiring-type-checking', // Usa reglas adicionales que requieren chequeo de tipos
        'prettier', // Integra Prettier para asegurar consistencia en el formateo
    ],
    plugins: [
        '@typescript-eslint', // Incluye el plugin de TypeScript
    ],
    rules: {
        'prettier/prettier': 'error', // Muestra errores de Prettier como errores de ESLint
        'no-console': 'warn', // Advierte sobre el uso de console.log
        'no-unused-vars': 'off', // Deshabilita la regla base de no-unused-vars
        '@typescript-eslint/no-unused-vars': ['error'], // Usa la versión de TypeScript para no-unused-vars
        '@typescript-eslint/no-explicit-any': 'warn', // Advierte sobre el uso de 'any'
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Desactiva la necesidad de declarar los tipos de retorno de las funciones exportadas
        '@typescript-eslint/no-inferrable-types': 'off', // Permite declarar tipos que podrían inferirse
    },
    settings: {
        'import/resolver': {
            typescript: {}, // Permite la resolución de paths definidos en tsconfig.json
        },
    },
};
