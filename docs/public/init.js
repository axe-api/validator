/* eslint-disable no-undef */

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

// Usage
loadScript("/cookieconsent.umd.js").then(() => {
  CookieConsent.run({
    categories: {
      necessary: { enabled: true, readOnly: true },
      analytics: { enabled: true },
    },
    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            title: "We use cookies",
            description:
              "Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter are set only after your consent.",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            showPreferencesBtn: "Manage individual preferences",
          },
          preferencesModal: {
            title: "Cookie preferences",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            savePreferencesBtn: "Accept current selection",
            closeIconLabel: "Close modal",
            sections: [
              {
                title: "Strictly necessary cookies",
                description:
                  "These cookies are essential for the proper functioning of this website. Without them, the website would not work properly.",
                linkedCategory: "necessary",
                cookieTable: {
                  headers: {
                    name: "Name",
                    domain: "Domain",
                    expiration: "Expiration",
                    description: "Description",
                  },
                  body: [
                    {
                      name: "cc_cookie",
                      domain: "validator.axe-api.com",
                      expiration: "6 months",
                      description: "Remembers your cookie preferences.",
                    },
                  ],
                },
              },
              {
                title: "Performance and analytics",
                description:
                  "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                linkedCategory: "analytics",
                cookieTable: {
                  headers: {
                    name: "Name",
                    domain: "Domain",
                    expiration: "Expiration",
                    description: "Description",
                  },
                  body: [
                    {
                      name: "^_ga",
                      domain: "google.com",
                      expiration: "2 years",
                      description:
                        "Used to distinguish users by assigning a unique client ID.",
                    },
                    {
                      name: "^_ga_",
                      domain: "google.com",
                      expiration: "2 years",
                      description:
                        "Used by Google Analytics 4 to persist session state for a specific property.",
                    },
                    {
                      name: "^_gid",
                      domain: "google.com",
                      expiration: "24 hours",
                      description:
                        "Used to distinguish users and track user behavior for 24 hours after visiting the site.",
                    },
                    {
                      name: "^_gat",
                      domain: "google.com",
                      expiration: "1 minute",
                      description:
                        "Used to throttle the request rate to Google Analytics servers.",
                    },
                  ],
                },
              },
              {
                title: "More information",
                description:
                  'For any queries regarding our cookie policy and your choices, please <a href="mailto:i.ozguradem@gmail.com">contact us</a>.',
              },
            ],
          },
        },
      },
    },
  });
});
