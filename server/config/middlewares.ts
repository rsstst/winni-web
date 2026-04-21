export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: ['env:FRONTEND_URL', 'http://localhost:3000'],
    },
  },
};
