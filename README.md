# Battle.net API

A Node JS wrapper for the Battle.net API

# Install

Add `battlenet-api` to your application's `package.json` file and run:

```
npm install
```

Alternatively:
```
npm install battlenet-api --save
```

# How to use

Simply `require()` the Battle.net API within your application:

```javascript
var bnet = require('battlenet-api');
```

And then access the API methods to request data:

```javascript
bnet.wow.character.profile(obj, callback);
```

## Battle.net API Key

Your private Battle.net API key is input with the `BATTLENET_API_KEY` environment variable. This must be present in order to get a proper response. There are a variety of ways to set this variable but the easiest is to run your node server with the variable from the command line.

```
$ sudo BATTLENET_API_KEY=[your_api_key] node server.js
```

# Documentation

Each API method receives a parameters object for the request, and a callback function to execute once the request has completed. The available request parameters are explained for each method below.

`callback` takes three arguments: `error`, `response`, and `body`.

## Overview

### World of Warcraft

* [Achievement](#achievement)
* [Auction](#auction)
* [Battle Pet](#battle-pet)
  * [Ability](#battle-pet-ability)
  * [Species](#battle-pet-species)
  * [Stats](#battle-pet-stats)
* [Challenge](#challenge)
  * [Realm Leaderboard](#challenge-realm-leaderboard)
  * [Region Leaderboard](#challenge-region-leaderboard)
* [Character](#character)
  * [Profile](#character-profile)
  * [Achievements](#character-achievements)
  * [Appearance](#character-appearance)
  * [Guild](#character-guild)
  * [Hunter Pets](#character-hunterpets)
  * [Items](#character-items)
  * [Mounts](#character-mounts)
  * [Pets](#character-pets)
  * [Pet Slots](#character-petslots)
  * [Progression](#character-progression)
  * [PVP](#character-pvp)
  * [Quests](#character-quests)
  * [Reputation](#character-reputation)
  * [Stats](#character-stats)
  * [Talents](#character-talents)
  * [Titles](#character-titles)
  * [Audit](#character-audit)
  * [Aggregate](@character-aggregate)
* [Guild](#guild)
* [Item](#item)
  * [Item](#item-item)
  * [Item Set](#item-item-set)
* [PVP](#pvp)
  * [Leaderboard](#pvp-leaderboard)
* [Quest](#quest)
* [Realm Status](#realm-status)
* [Recipe](#recipe)
* [Spell](#spell)

## World of Warcraft

The World of Warcraft API methods are available through the `wow` object of the Battle.net API.

```javascript
var wow = bnet.wow;
```

**ALL** API methods take `origin` as one of the parameters. This indicates which regional API endpoint to use. The possible values are `us`, `eu`, `kr`, `tw`. The China API is unavailable at this time.

---

<a name="achievement"></a>
### Achievement

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`]

`id` the unique achievement ID.

*Usage*

```javascript
bnet.wow.achievement({region: 'us', id: 2144}, callback);
```

---

<a name="auction"></a>
### Auction

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`realm` the slugified realm name.

*Usage*

```javascript
bnet.wow.auction({region: 'us', realm: 'proudmoore'}, callback);
```

---

<a name="battle-pet"></a>
### Battle Pet

<a name="battle-pet-abilities"></a>
#### Abilities

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique ID of the battle pet ability.

*Usage*

```javascript
bnet.wow.battlePet.ability({region: 'us', id: 640}, callback);
```

<a name="battle-pet-species"></a>
#### Species

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique ID of the battle pet species.

*Usage*

```javascript
bnet.wow.battlePet.species({region: 'us', id: 258}, callback);
```

<a name="battle-pet-stats"></a>
#### Stats

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique ID of the battle pet species.

`fields` an object containing the battle pet `level`, `breedId`, and `qualityId`

*Usage*

```javascript
bnet.wow.battlePet.stats({region: 'us', id: 258, fields: { level: 25, breedId: 5, qualityId: 4 }}, callback);
```

---

<a name="challenge"></a>
### Challenge

#### Realm Leaderboards

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`realm` the slugified realm name.

*Usage*

```javascript
bnet.wow.challenge.realmLeaderboard({region: 'us', realm: 'proudmoore'}, callback);
```

#### Region Leaderboards

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

*Usage*

```javascript
bnet.wow.challenge.regionLeaderboard({region: 'us'}, callback);
```

---

<a name="character"></a>
### Character

All character requests require the following parameters:

`origin` [`us`, `eu`, `kr`, `tw`].

`realm` the slugified realm of the character.

`name` the name of the character.

<a name="character-profile"></a>
#### Profile

Returns basic profile data about the character.

*Usage*

```javascript
bnet.wow.character.profile({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-achievements"></a>
#### Achievements

Returns the achievement data of the character.

*Usage*

```javascript
bnet.wow.character.achievements({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-appearance"></a>
#### Appearance

Returns the appearance data of the character.

*Usage*

```javascript
bnet.wow.character.appearance({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-guild"></a>
#### Guild

Returns the guild data of the character.

*Usage*

```javascript
bnet.wow.character.guild({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-hunterpets"></a>
#### Hunter Pets

Returns the hunter pet data of the character (where applicable).

*Usage*

```javascript
bnet.wow.character.hunterPets({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-items"></a>
#### Items

Returns the item data of the character.

*Usage*

```javascript
bnet.wow.character.items({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-mounts"></a>
#### Mounts

Returns the mount data of the character.

*Usage*

```javascript
bnet.wow.character.mounts({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-pets"></a>
#### Pets

Returns the pet data of the character.

*Usage*

```javascript
bnet.wow.character.pets({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-petslots"></a>
#### Pet Slots

Returns the pet slots data of the character.

*Usage*

```javascript
bnet.wow.character.petSlots({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-progression"></a>
#### Progression

Returns the progression data of the character.

*Usage*

```javascript
bnet.wow.character.progression({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-pvp"></a>
#### PVP

Returns the PVP data of the character.

*Usage*

```javascript
bnet.wow.character.pvp({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-quests"></a>
#### Quests

Returns the quest data of the character.

*Usage*

```javascript
bnet.wow.character.quests({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-reputation"></a>
#### Reputation

Returns the reputation data of the character.

*Usage*

```javascript
bnet.wow.character.reputation({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-stats"></a>
#### Stats

Returns the statistics data of the character.

*Usage*

```javascript
bnet.wow.character.stats({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-talents"></a>
#### Talents

Returns the talent data of the character.

*Usage*

```javascript
bnet.wow.character.talents({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-titles"></a>
#### Titles

Returns the title data of the character.

*Usage*

```javascript
bnet.wow.character.titles({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-audit"></a>
#### Audit

Returns an audit of the character's equipment.

*Usage*

```javascript
bnet.wow.character.audit({region: 'us', realm: 'proudmoore', name: 'charni'}, callback);
```

<a name="character-aggregate"></a>
#### Aggregate

Returns the specified character fields aggregated in a single request.

*Parameters*

`fields` an array of one or more character fields.

*Usage*

```javascript
bnet.wow.character.aggregate({region: 'us', realm: 'proudmoore', name: 'charni', fields: ['pets', 'petSlots']}, callback);
```

---

<a name="item"></a>
### Item

#### Item

Returns the item data of the specified item id.

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique item id.

*Usage*

```javascript
bnet.wow.item.item({region: 'us', id: 18803}, callback);
```

#### Item Set

Returns the item set data of the specified set id.

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique item set id.

*Usage*

```javascript
bnet.wow.item.item({region: 'us', id: 1060}, callback);
```

---

<a name="guild"></a>
### Guild

All guild requests require the following parameters:

`origin` [`us`, `eu`, `kr`, `tw`].

`realm` the slugified realm of the guild.

`name` the name of the guild.

<a name="guild-profile"></a>
#### Profile

Returns basic profile data of the guild.

*Usage*

```javascript
bnet.wow.guild.profile({region: 'us', realm: 'proudmoore', name: 'black wolf mercenaries'}, callback);
```

<a name="guild-members"></a>
#### Members

Returns the members data of the guild.

*Usage*

```javascript
bnet.wow.guild.members({region: 'us', realm: 'proudmoore', name: 'black wolf mercenaries'}, callback);
```

<a name="guild-achievements"></a>
#### Achievements

Returns the achievement data of the guild.

*Usage*

```javascript
bnet.wow.guild.achievements({region: 'us', realm: 'proudmoore', name: 'black wolf mercenaries'}, callback);
```

<a name="guild-news"></a>
#### News

Returns the news data of the guild.

*Usage*

```javascript
bnet.wow.guild.news({region: 'us', realm: 'proudmoore', name: 'black wolf mercenaries'}, callback);
```

<a name="guild-challenge"></a>
#### Challenge

Returns the challenge data of the guild.

*Usage*

```javascript
bnet.wow.guild.challenge({region: 'us', realm: 'proudmoore', name: 'black wolf mercenaries'}, callback);
```

---

<a name="pvp"></a>
### PVP

#### Leaderboards

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`bracket` [`2v2`, `3v3`, `5v5`, `rbg`]

*Usage*

```javascript
bnet.wow.pvp({region: 'us', bracket: '2v2'}, callback);
```

---

<a name="quest"></a>
### Quest

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique quest id.

*Usage*

```javascript
bnet.wow.quest({region: 'us', quest: 13146}, callback);
```

---

<a name="realm-status"></a>
### Realm Status

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`fields` [optional] an array of one or more realms to limit.

*Usage*

All realms

```javascript
bnet.wow.realmStatus({region: 'us']}, callback);
```

Selected realms

```javascript
bnet.wow.realmStatus({region: 'us', realms: ['proudmoore', 'blackrock', 'frostmourne']]}, callback);
```

---

<a name="recipe"></a>
### Recipe

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique recipe id.

*Usage*

All realms
```javascript
bnet.wow.recipe({region: 'us', id: 33994]}, callback);
```

---

<a name="spell"></a>
### Spell

*Parameters*

`origin` [`us`, `eu`, `kr`, `tw`].

`id` the unique spell id.

*Usage*

All realms
```javascript
bnet.wow.spell({region: 'us', id: 8056]}, callback);
```
