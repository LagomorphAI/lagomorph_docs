// cookieconsent-config.js
// CookieConsent UMD loaded before this via defer — sets window.CookieConsent.

function updateGa4Consent(granted) {
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('consent', 'update', {
    ad_storage: granted ? 'granted' : 'denied',
    ad_user_data: granted ? 'granted' : 'denied',
    ad_personalization: granted ? 'granted' : 'denied',
    analytics_storage: granted ? 'granted' : 'denied',
  });
}

CookieConsent.run({
  cookie: {
    name: 'cc_cookie',
    domain: '.lagomorph.ai',
    sameSite: 'Lax',
    expiresAfterDays: 182,
  },

  guiOptions: {
    consentModal: {
      layout: 'bar inline',
      position: 'bottom',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: false,
      flipButtons: false,
    },
  },

  categories: {
    necessary: {
      readOnly: true,
    },
    analytics: {
      services: {
        ga4: {
          label: '<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Analytics 4</a>',
          onAccept: function() { updateGa4Consent(true); },
          onReject: function() { updateGa4Consent(false); },
          cookies: [{ name: /^_ga/ }],
        },
      },
    },
  },

  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: 'We value your privacy',
          description: 'We use Google Analytics to understand how visitors use our documentation and improve your experience. With your consent, we collect detailed usage data including user behavior patterns to help us optimise our website. Without consent, we collect only basic page view analytics with limited data retention.',
          acceptAllBtn: 'Accept all cookies',
          acceptNecessaryBtn: 'Use basic analytics only',
          showPreferencesBtn: 'Manage preferences',
          footer: '<a href="https://lagomorph.ai/privacy-policy/">Privacy Policy</a>',
        },
        preferencesModal: {
          title: 'Cookie Preferences',
          acceptAllBtn: 'Accept all cookies',
          acceptNecessaryBtn: 'Use basic analytics only',
          savePreferencesBtn: 'Save my preferences',
          closeIconLabel: 'Close',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'How we use cookies',
              description: 'docs.lagomorph.ai uses Google Analytics to understand visitor behaviour and improve our documentation. Our site functions completely without your consent to analytics cookies. When you choose to use basic analytics only, Google Analytics operates in a restricted mode where it only collects anonymous data with limited functionality and shorter retention periods. Full data collection, including detailed user behaviour tracking, is only enabled with your explicit consent.',
            },
            {
              title: 'Essential Cookies',
              description: 'Our cookie consent banner uses a single essential cookie, <b>cc_cookie</b>, to remember your consent choices and ensure the banner does not appear on every page you visit. It contains no personal information beyond your consent preferences.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Functionality Cookies',
              description: "We don't currently use functionality cookies. This category would be for cookies that remember your preferences and settings to enhance your experience. docs.lagomorph.ai is designed to work seamlessly without storing any personal preferences via cookies.",
              linkedCategory: 'functionality',
            },
            {
              title: 'Analytics & Performance Cookies',
              description: 'These cookies collect information about how visitors interact with our documentation, including page views, time spent on pages, and user journey patterns. When you consent, Google Analytics can track your sessions across visits and provide us with enhanced insights. When consent is denied, only basic page view data is collected with restricted functionality and shorter data retention.',
              linkedCategory: 'analytics',
            },
            {
              title: 'Need help?',
              description: 'If you have any questions about our cookie policy or data practices, please contact us. You can also review our full <a class="cc__link" href="https://lagomorph.ai/privacy-policy/" target="_blank">Privacy Policy</a> for more details.',
            },
          ],
        },
      },
    },
  },
});
