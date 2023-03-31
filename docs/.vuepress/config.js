const version = '1.0.1';

import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';

// import docsearchPlugin from '@vuepress/plugin-docsearch';

import theme from './theme';
import { enHeadConfig, frHeadConfig } from './configs/head';

export default defineUserConfig({
  lang: 'en-US',
  locales: {
    '/': enHeadConfig,
    '/fr/': frHeadConfig,
  },
  theme,
  shouldPrefetch: false,
  bundler: viteBundler(),
  plugins: [
    /*docsearchPlugin({
      appId: 'OEWJGZ6584',
      apiKey: '9da6989deaa25628c61dce09c61710b5',
      indexName: '[[docssearch-index]]',
      locales: {
        '/': {
          placeholder: 'Search',
          translations: {
            button: {
              buttonText: 'Search',
              buttonAriaLabel: 'Search',
            },
            modal: {
              searchBox: {
                resetButtonTitle: 'Clear',
                resetButtonAriaLabel: 'Clear',
                cancelButtonText: 'Cancel',
                cancelButtonAriaLabel: 'Cancel',
              },
              startScreen: {
                recentSearchesTitle: 'Search history',
                noRecentSearchesText: 'No recent search',
                saveRecentSearchButtonTitle: 'Save recent searches',
                removeRecentSearchButtonTitle: 'Remove recent searches',
                favoriteSearchesTitle: 'Collect',
                removeFavoriteSearchButtonTitle: 'Remove',
              },
              errorScreen: {
                titleText: 'Unable to get results',
                helpText: 'You may need to check your internet connection',
              },
              footer: {
                selectText: 'Choose',
                navigateText: 'Switch',
                closeText: 'Close',
                searchByText: 'Search by',
              },
              noResultsScreen: {
                noResultsText: 'No relevant results found',
                suggestedQueryText: 'You can try...',
                reportMissingResultsText:
                  'Do you think this query should have results?',
                reportMissingResultsLinkText: 'Report missing result',
              },
            },
          },
        },
        '/fr/': {
          placeholder: 'Rechercher',
          translations: {
            button: {
              buttonText: 'Rechercher',
              buttonAriaLabel: 'Rechercher',
            },
            modal: {
              searchBox: {
                resetButtonTitle: 'Effacer',
                resetButtonAriaLabel: 'Effacer',
                cancelButtonText: 'Annuler',
                cancelButtonAriaLabel: 'Annuler',
              },
              startScreen: {
                recentSearchesTitle: "Rechercher l'historique",
                noRecentSearchesText: 'Aucun recherche récente',
                saveRecentSearchButtonTitle:
                  'Sauvegarder les recherches récentes',
                removeRecentSearchButtonTitle:
                  'Supprimer les recherches récentes',
                favoriteSearchesTitle: 'Mettre en favori',
                removeFavoriteSearchButtonTitle: 'Supprimer des favoris',
              },
              errorScreen: {
                titleText: 'Aucun résultat',
                helpText: 'Vérifiez peut-être votre connexion Internet.',
              },
              footer: {
                selectText: 'Sélectionner',
                navigateText: 'Changer',
                closeText: 'Fermer',
                searchByText: 'Rechercher par',
              },
              noResultsScreen: {
                noResultsText: 'Aucun résultat trouvé par votre recherche.',
                suggestedQueryText: 'Essayez peut-être...',
                reportMissingResultsText:
                  'Pensez-vous que cette recherche devrait retourner des résultats ?',
                reportMissingResultsLinkText: 'Rapporter un résultat manquant',
              },
            },
          },
        },
      },
    }),*/
  ],
});
