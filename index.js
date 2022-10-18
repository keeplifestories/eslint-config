'use strict';

module.exports = {
  rules: {
    'import/first': ['warn'],
    'import/newline-after-import': ['warn'],
    'import/no-useless-path-segments': ['warn'],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index', 'object', 'type'],
        ],
        pathGroups: [
          {
            pattern: 'react+(|-native)',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/no-relative-parent-imports': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: [
              /**
               * This is really finicky, but basically * has lower priority
               * than just ending with /, so I use those to override /*
               *
               * "/*" represents /Outline and /Solid, and
               * "/" represents /Outline/* and /Solid/*
               */
              'SvgIcon/allIcons',
              '*/SvgIcon/Hero/*',
              '!*/SvgIcon/Hero/Outline/',
              '!*/SvgIcon/Hero/Solid/',
              '*/SvgIcon/Custom/*',
              '!*/SvgIcon/Custom/Outline/',
              '!*/SvgIcon/Custom/Solid/',
            ],
            message: 'please import the icon directly to prevent bundle bloat',
          },
        ],
        paths: [
          {
            name: 'react-native',
            importNames: ['SafeAreaView'],
            message:
              'Please use SafeAreaView from safe-area-view-context package instead.',
          },
          {
            name: 'react-native-gesture-handler',
            importNames: ['TouchableOpacity'],
            message: 'Please use TouchableOpacity from react-native instead.',
          },
        ],
      },
    ],
    'no-shadow': 'off',
    'prettier/prettier': ['warn'],
    'react-native/no-unused-styles': ['warn'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
};
