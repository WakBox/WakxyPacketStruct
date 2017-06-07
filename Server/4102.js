function ReadPacket()
{
	packet.Log("ActorSpawnMessage");

	packet.ReadBool("myFightSpawn (0 = SpawnInWorld, 1= SpawnInMyFight)");
	var number = packet.ReadByte("charactersCount");

	for (var j = 0; j < number; ++j)
	{
		packet.Log("============= Actor " + j + "=============");
		
		/*
type 0 character = new PlayerCharacter();
type 1 character = NonPlayerCharacter.createNpc();
type 4 InteractiveNonPlayerCharacter();

		*/
		var type = packet.ReadByte("characterType");

		packet.ReadLong("characterId");
		var k = packet.ReadShort("serializedSize");

		if (type == 0)
		{
			packet.ReadByte("CharacterSerializerPart (9 - FOR_REMOTE_CHARACTER_INFORMATION)");
			

	// ID
	packet.ReadLong("Char Id");

	// IDENTITY
	packet.ReadByte("idType");
	packet.ReadLong("owner");

	// NAME
	packet.ReadBigString("Name");

	// BREED
	packet.ReadShort("Breed");

	// GUILD_BLAZON
	packet.ReadLong("guildBlazon");

	// GUILD_ID
	packet.ReadLong("guildId");

// POSITION
	packet.ReadInt("X");
	packet.ReadInt("Y");
	packet.ReadShort("Z");
	packet.ReadShort("InstanceId");
	packet.ReadByte("Direction");
	var hasDimBagPosition = packet.ReadByte("dimBagPosition");
	if (hasDimBagPosition)
	{
		packet.ReadInt("DimBag X");
		packet.ReadInt("DimBag Y");
		packet.ReadShort("DimBag Z");
		packet.ReadShort("DimBag InstanceId");
	}

	// APPEARANCE
	packet.ReadByte("Gender");
	packet.ReadByte("skinColorIndex");
	packet.ReadByte("hairColorIndex");
	packet.ReadByte("pupilColorIndex");
	packet.ReadByte("skinColorFactor");
	packet.ReadByte("hairColorFactor");
	packet.ReadByte("clothIndex");
	packet.ReadByte("faceIndex");
	packet.ReadShort("currentTitle");

// PUBLIC_CHARACTERISTICS
var publicCharSize = packet.ReadShort("size");
for (var a = 0; a < publicCharSize; ++a)
{
packet.ReadByte("index");
packet.ReadInt("current");
packet.ReadInt("min");
packet.ReadInt("max");
packet.ReadInt("maxPercentModifier");
}

// FIGHT_PROPERTIES
	if (packet.ReadByte("hasProperties") == 1)
	{
		var propSize = packet.ReadShort("Properties size");
		for (var i = 0; i < propSize; ++i)
		{
			packet.ReadByte("id");
			packet.ReadByte("count");
		}
	}

// FIGHT
packet.ReadInt("currentFightId");
packet.ReadBool("isKo");
packet.ReadBool("isDead");
packet.ReadBool("isSummoned");
packet.ReadBool("isFleeing");
packet.ReadByte("obstacleId");

if (packet.ReadBool("hasSUMMONDATA"))
{
// TODO
}

// EQUIPMENT_APPEARANCE
var equipmentAppearSize = packet.ReadByte("EquipmentAppearance");
for (var a = 0; a < equipmentAppearSize; ++a)
{
	packet.ReadByte("position");
	packet.ReadInt("referenceId");
	packet.ReadInt("skinId");
}

	// RUNNING_EFFECTS
	if (packet.ReadByte("hasInFightData"))
	{
		var size = packet.ReadShort("data length");
		packet.Skip(size); // data
	}

	if (packet.ReadByte("hasOutFightData") )
	{
		var reSize = packet.ReadShort("size");
		for (var i = 0; i < reSize; ++i)
		{
			packet.ReadLong("uid");
			packet.ReadShort("stateBaseId");
			packet.ReadShort("level");
			packet.ReadInt("remainingDurationInMs");
			packet.ReadLong("startDate");
		}
	}

// CURRENT_MOVEMENT_PATH
if (packet.ReadByte("hasCurrentPath"))
{
	// TODO
	packet.Skip(packet.ReadByte("encodedPathSize"));
}

	// WORLD_PROPERTIES
	if (packet.ReadByte("hasProperties") == 1)
	{
		var propSize = packet.ReadShort("Properties size");
		for (var i = 0; i < propSize; ++i)
		{
			packet.ReadByte("id");
			packet.ReadByte("count");
		}
	}

            // GROUP
packet.ReadLong("partyId");

            // TEMPLATE
// nothing

            // COLLECT
// nothing

// PET
	if (packet.ReadByte("hasPet") == 1)
	{
		packet.ReadInt("definitionId");
		packet.ReadInt("colorRefItemId");
		packet.ReadInt("equippedRefItemId");
		packet.ReadInt("sleepRefItemId");
		packet.ReadInt("health");
		packet.ReadInt("reskinRefItemId");
	}

	if (packet.ReadByte("hasMount") == 1)
	{
		packet.ReadInt("definitionId");
		packet.ReadInt("colorRefItemId");
		packet.ReadInt("equippedRefItemId");
		packet.ReadInt("sleepRefItemId");
		packet.ReadInt("health");
		packet.ReadInt("reskinRefItemId");
	}


// OCCUPATION
	if (packet.ReadByte("hasOccupation") == 1)
	{
packet.ReadShort("occupationId");
packet.Skip(packet.ReadShort("occupationData size"));

// TODO
	}

	// XP
	packet.ReadLong("XP");

	// XP_CHARACTERISTICS
	packet.ReadShort("m_freePoints");
	var xpBpSize = packet.ReadShort("xpBonusPoints size");
	for (var i = 0; i < xpBpSize; ++i)
	{
		packet.Log("========= xpBonusPoints " + i + " =========");
		packet.ReadByte("characId");
		packet.ReadShort("nbPoint");
	}

	var cBpSize = packet.ReadShort("characteristicBonusPoints size");
	for (var i = 0; i < cBpSize; ++i)
	{
		packet.Log("========= characteristicBonusPoints " + i + " =========");
		packet.ReadByte("characId");
		packet.ReadShort("nbPoint");
	}

	packet.ReadInt("wakfuGauge");

	// CITIZEN_POINT
	var ncSize = packet.ReadShort("nationCitizenScores size");
	for (var i = 0; i < ncSize; ++i)
	{
		packet.ReadInt("nationId");
		packet.ReadInt("citizenScore");
	}

	var ocSize = packet.ReadShort("offendedNations size");
	for (var i = 0; i < ocSize; ++i)
	{
		packet.ReadInt("offendedNationId");
		// Since 1.53.2!
        //packet.ReadInt("lawPoints");
        //packet.ReadLong("date");
	}

// GUILD_REMOTE_INFO
packet.ReadLong("guildId");
packet.ReadLong("blazon");
packet.ReadShort("level");
packet.ReadBigString("guildName");
packet.ReadInt("nationId");

// NATION_ID
packet.ReadInt("Nation Id");

// NATION_SYNCHRO
	packet.ReadLong("Rank");
	packet.ReadLong("Jobs");
	packet.ReadLong("Votedate");
	packet.ReadByte("Government Opinion");
packet.ReadBool("IsCandidate");
packet.ReadByte("pvpState");
packet.ReadLong("pvpDate");
packet.ReadByte("pvpRank");

	// SOCIAL_STATES
	packet.ReadByte("afkState as bool");
	packet.ReadByte("dndstate as bool");

            // ACCOUNT_INFORMATION_REMOTE
packet.ReadInt("subscriptionLevel");
var rightsSize = packet.ReadShort("additionalRightsSize");
for (var a = 0; a < rightsSize; ++a)
	packet.ReadInt("additionalRights");
packet.ReadInt("heroesSubscriptionLevel");
packet.ReadShort("characterMaxLevel");
packet.ReadLong("betaReward");

            // COMPANION_CONTROLLER_ID
// nothing

            // VISIBILITY
packet.ReadByte("Visible");

            // COSMETICS
if (packet.ReadByte("hasActiveCosmetic"))
{
packet.ReadInt("activeCosmeticRefId");
}

            // DOWNSCALE_INFO
packet.ReadShort("downscaleLevel");

		}
		else if (type == 1)
		{
			packet.Log("Reading Monster data");
			packet.ReadByte("CharacterSerializerPart");

	// ID
	packet.ReadLong("Char Id");

	// IDENTITY
	packet.ReadByte("idType");
	packet.ReadLong("owner");

	// NAME
	packet.ReadBigString("Name");

	// BREED
	packet.ReadShort("Breed");

// POSITION
	packet.ReadInt("X");
	packet.ReadInt("Y");
	packet.ReadShort("Z");
	packet.ReadShort("InstanceId");
	packet.ReadByte("Direction");
	var hasDimBagPosition = packet.ReadByte("dimBagPosition");
	if (hasDimBagPosition)
	{
		packet.ReadInt("DimBag X");
		packet.ReadInt("DimBag Y");
		packet.ReadShort("DimBag Z");
		packet.ReadShort("DimBag InstanceId");
	}

	// APPEARANCE
	packet.ReadBool("show");

// PUBLIC_CHARACTERISTICS
packet.ReadShort("level");
var charSize = packet.ReadShort("size");
packet.Skip(charSize);

// FIGHT_PROPERTIES
	if (packet.ReadByte("hasProperties") == 1)
	{
		var propSize = packet.ReadShort("Properties size");
		for (var i = 0; i < propSize; ++i)
		{
			packet.ReadByte("id");
			packet.ReadByte("count");
		}
	}

// FIGHT
packet.ReadInt("currentFightId");
packet.ReadBool("isKo");
packet.ReadBool("isDead");
packet.ReadBool("isSummoned");
packet.ReadBool("isFleeing");
packet.ReadByte("obstacleId");

if (packet.ReadBool("hasSUMMONDATA"))
{
	packet.ReadShort("typeId");
	packet.ReadBigString("name");
	packet.ReadInt("currentHp");
	packet.ReadLong("summonId");
	packet.ReadLong("currentXP");
	packet.ReadShort("cappedLevel");
	packet.ReadShort("forcedLevel");
	packet.ReadByte("obstacleId");
	
	if (packet.ReadByte("DOUBLEINVOC"))
	{
		packet.ReadInt("power");
		packet.ReadInt("gfxId");
		packet.ReadByte("sex");
		packet.ReadByte("haircolorindex");
		packet.ReadByte("haircolorfactor");
		packet.ReadByte("skincolorindex");
		packet.ReadByte("skincolorfactor");
		packet.ReadByte("pupilcolorindex");
		packet.ReadByte("clothIndex");
		packet.ReadByte("faceIndex");
		packet.ReadByte("doubleType");

		// RawSpellLevelInventory
		var contents = packet.ReadShort("RawSpellLevelInventory contents");
		for (var i = 0; i < contents; ++i)
		{
			packet.ReadByte("type");
			packet.ReadLong("uniqueId");
			packet.ReadInt("spellId");
			packet.ReadShort("level");
			var skills = packet.ReadByte("skills");
			for (var z = 0; z < skills; ++z)
				packet.ReadInt("skillId");
		}

		// RawCharacteristics
		var publicCharSize = packet.ReadShort("size");
		for (var a = 0; a < publicCharSize; ++a)
		{
			packet.ReadByte("index");
			packet.ReadInt("current");
			packet.ReadInt("min");
			packet.ReadInt("max");
			packet.ReadInt("maxPercentModifier");
		}

		var equipmentAppareances = packet.ReadShort("equipmentAppareances");
		for (var i = 0; i < equipmentAppareances; ++i)
		{
			packet.ReadByte("position");
			packet.ReadInt("refId");
		}
	}

	if (packet.ReadByte("IMAGEINVOC"))
	{
		packet.ReadInt("gfxId");
		packet.ReadByte("sex");
		
		// RawCharacteristics
		var publicCharSize = packet.ReadShort("size");
		for (var a = 0; a < publicCharSize; ++a)
		{
			packet.ReadByte("index");
			packet.ReadInt("current");
			packet.ReadInt("min");
			packet.ReadInt("max");
			packet.ReadInt("maxPercentModifier");
		}
	}

	packet.ReadInt("direction");
	packet.ReadLong("summonerId");
}

// CURRENT_MOVEMENT_PATH
if (packet.ReadByte("hasCurrentPath"))
{
	// TODO
	packet.Skip(packet.ReadByte("encodedPathSize"));
}

	// WORLD_PROPERTIES
	if (packet.ReadByte("hasProperties") == 1)
	{
		var propSize = packet.ReadShort("Properties size");
		for (var i = 0; i < propSize; ++i)
		{
			packet.ReadByte("id");
			packet.ReadByte("count");
		}
	}

            // GROUP
packet.ReadLong("partyId");
var members = packet.ReadShort("members");
for (var i = 0; i < members; ++i)
{
packet.ReadShort("breedId");
packet.ReadShort("level");
}

            // TEMPLATE
packet.ReadShort("sightRadius");
packet.ReadShort("aggroRadius");

            // COLLECT
var unavailableActions = packet.ReadShort("unavailableActions");
for (var i = 0; i < unavailableActions; ++i)
	packet.ReadInt("collectId");

            // COMPANION_CONTROLLER_ID
packet.ReadLong("controllerId");
packet.ReadLong("companionId");


		}		
		else
			packet.Skip(k);
	}
}

ReadPacket();
