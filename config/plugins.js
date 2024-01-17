module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: env('VERCEL_DEPLOY_HOOK'),
      apiToken: env('VERCEL_API_TOKEN'),
      appFilter: env('VERCEL_APP_FILTER'),
      teamFilter: env('VERCEL_TEAM_FILTER'),
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});