'use strict';

/**
 * installation-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::installation-service.installation-service');
