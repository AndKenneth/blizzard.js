const blizzard = require('./initialize');

describe('lib/data.js', () => {

  beforeEach(() => {
    blizzard.axios.get.mockClear();
  });

  test('should have the correct API methods', () => {
    expect(blizzard.data).toEqual(expect.objectContaining({
      connectedRealm: expect.any(Function),
      mythicLeaderboard: expect.any(Function),
      realm: expect.any(Function),
      region: expect.any(Function),
      token: expect.any(Function),
    }));
  });

  describe('#connectedRealm()', () => {
    test('should request the connected realm index', () => {
      blizzard.data.connectedRealm();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/wow/connected-realm/',
        expect.any(Object)
      );
    });

    test('should request a single connected realm', () => {
      blizzard.data.connectedRealm({ realm: 11 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/wow/connected-realm/11',
        expect.any(Object)
      );
    });
  });

  describe('#mythicLeaderboard()', () => {
    test('should request the mythic leaderboard index', () => {
      blizzard.data.mythicLeaderboard({ realm: 11 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/wow/connected-realm/11/mythic-leaderboard/',
        expect.any(Object)
      );
    });

    test('should request a mythic leaderboard period', () => {
      blizzard.data.mythicLeaderboard({ realm: 11, dungeon: 200, period: 606 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/wow/connected-realm/11/mythic-leaderboard/200/period/606',
        expect.any(Object)
      );
    });
  });

  describe('#realm()', () => {
    test('should request the realm index', () => {
      blizzard.data.realm();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/wow/realm/',
        expect.any(Object)
      );
    });

    test('should request a single realm', () => {
      blizzard.data.realm({ realm: 11 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/wow/realm/11',
        expect.any(Object)
      );
    });
  });

  describe('#region()', () => {
    test('should request the region index', () => {
      blizzard.data.region();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/wow/region/',
        expect.any(Object)
      );
    });

    test('should request a single region', () => {
      blizzard.data.region({ region: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/wow/region/1',
        expect.any(Object)
      );
    });
  });

  describe('#token()', () => {
    test('should request token data', () => {
      blizzard.data.token();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/wow/token/',
        expect.any(Object)
      );
    });
  });

});
