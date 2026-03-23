/** @type {import('@docusaurus/types').SidebarsConfig} */
const tutorials = require('./sidebars/tutorials');
const cpp = require('./sidebars/cpp');
const mcq = require('./sidebars/mcq');
const site = require('./sidebars/site');

module.exports = {
  ...tutorials,
  ...cpp,
  ...mcq,
  ...site,
};
