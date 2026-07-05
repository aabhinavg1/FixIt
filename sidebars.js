/** @type {import('@docusaurus/types').SidebarsConfig} */
const tutorials = require('./sidebars/tutorials');
const basicTerminology = require('./sidebars/basicTerminology');
const cpp = require('./sidebars/cpp');
const mcq = require('./sidebars/mcq');
const site = require('./sidebars/site');
const benchmarking = require('./sidebars/benchmarking');
const dsa = require('./sidebars/dsa');

module.exports = {
  ...tutorials,
  ...basicTerminology,
  ...cpp,
  ...mcq,
  ...site,
  ...benchmarking,
  ...dsa,
};
