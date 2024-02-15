'use strict';

/**
 * installation-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::installation-service.installation-service');
