/**
 * @file Exports the Starcraft 2 API methods.
 * @module lib/sc2
 */
'use strict';

/**
 * Starcraft 2 class constructor.
 *
 * @constructor
 * @param  {Object} blizzard A Blizzard.js instance
 * @return {Function}        SC2 constructor function
 */
const SC2 = function SC2 (blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch a Starcraft 2 data resource.
 *
 * @param  {Object} key           The resource key
 * @param  {Object} args          The resource request arguments
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
SC2.prototype.data = function data (key, args, instance) {
  return this.blizzard.get(`/sc2/data/${key}`, args, instance);
};

/**
 * Fetch Starcraft 2 ladder data.
 *
 * @param  {Object} args          The ladder request arguments
 * @param  {Number} args.id       The ladder ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
SC2.prototype.ladder = function ladder (args, instance) {
  return this.blizzard.get(`/sc2/ladder/${args.id}`, args, instance);
};

/**
 * Fetch Starcraft 2 profile data.
 *
 * @param  {String} key           The profile request arguments
 * @param  {Object} args          The profile request arguments
 * @param  {Number} args.id       The profile ID
 * @param  {String} args.region   The profile region
 * @param  {String} args.name     The profile name
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
SC2.prototype.profile = function profile (key, args, instance) {
  const path = key === 'profile' ? `/sc2/profile/${args.id}/${args.region}/${args.name}/` : `/sc2/profile/${args.id}/${args.region}/${args.name}/${key}`;

  return this.blizzard.get(path, args, instance);
};

module.exports = SC2;
