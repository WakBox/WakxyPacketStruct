function ReadPacket()
{
	packet.Log("Spawn de creature (acteur), voir atE.java ligne 241");
	packet.ReadByte("unk bool (spawn [1], despawn [0] ?)");
	var number = packet.ReadByte("unk (number of npc to spawn ?");

	for (var j = 0; j < number; ++j)
	{
		packet.Log("============= NPC " + j + "=============");
		var type = packet.ReadByte("spawn type (0 = char, 1 = monster, 4 = ?");

		packet.ReadLong("Character Guid");
		var k = packet.ReadShort("buffer size");

		if (type == 0)
		{
			packet.ReadByte("Char part Id");

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
			var chSize = packet.ReadShort("size characteristics");
			for (var k = 0; k < chSize; ++k)
			{
				packet.Log("============" + k + "============");
				packet.ReadByte("index");
				packet.ReadInt("current");
				packet.ReadInt("min");
				packet.ReadInt("max");
				packet.Log("============================");
			}

	// FIGHT_PROPERTIES
			if (packet.ReadByte("hasProperties") == 1)
			{
				fpSize = packet.ReadShort("size fightProperties");
				for (var l = 0; l < fpSize; ++l)
				{
					packet.ReadByte("id");
					packet.ReadByte("count");
				}
			}

	// FIGHT
			packet.ReadInt("currentFightId");
			packet.ReadByte("isKo");
			packet.ReadByte("isDead");
			packet.ReadByte("isSummoned");
			packet.ReadByte("isFleeing");
			packet.ReadByte("obstacleId");

			if (packet.ReadByte("hasSummon") == 1)
			{
				// TODO
			}

	// EQUIPMENT_APPEARANCE - can be wrong
			var vSize = packet.ReadByte("EQUIPMENT_APPEARANCE size");
			for (var m = 0; m < vSize; ++m)
			{
				packet.ReadByte("position");
				packet.ReadInt("referenceId");
			}

	// RUNNING_EFFECTS
	if (packet.ReadByte("hasInFightData") == 1)
	{
		if (packet.ReadShort("data length") > 0)
			packet.ReadByte("data");
	}

	if (packet.ReadByte("hasOutFightData") == 1)
	{
		var reSize = packet.ReadShort("size");
		for (var i = 0; i < reSize; ++i)
		{
			packet.ReadLong("uid");
			packet.ReadShort("stateBaseId");
			packet.ReadShort("level");
			packet.ReadInt("remainingDurationInMs");
		}
	}

	// CURRENT_MOVEMENT_PATH
			if (packet.ReadByte("hasCurrentPath") == 1)
			{
				var epSize = packet.ReadByte("EncodedPathSize");
				for (var p = 0; p < epSize; ++p)
					packet.ReadByte();
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
	packet.ReadLong("PartyId");

	// TEMPLATE
			packet.ReadShort("sightRadius");
			packet.ReadShort("aggroRadius");

	// COLLECT
			var uaSize = packet.ReadShort("unavailableActions size");
			for (var s = 0; s < uaSize; ++s)
				packet.ReadInt("collectId");

	// OCCUPATION
			if (packet.ReadByte("hasOccupation") == 1)
			{
				packet.ReadShort("occupationId");
				var cdLength = packet.ReadShort("occupationDataSize");
				for (var r = 0; r < cdLength; ++r)
					packet.ReadByte();
			}

	// XP
			packet.ReadLong("XP");

	
			packet.ReadShort("freePoints");
			var xpBSize = packet.ReadShort("xpBonusPoints");
			for (var t = 0; t < xpBSize; ++t)
			{
				packet.ReadByte("characId");
				packet.ReadShort("nbPoint");
			}

			var cBSize = packet.ReadShort("characteristicBonusPoints");
			for (var u = 0; u < cBSize; ++u)
			{
				packet.ReadByte("characId");
				packet.ReadShort("nbPoint");
			}

			packet.ReadInt("WakfuGauge");

	// CITIZEN_POINT
			var nCSize = packet.ReadShort("size nationCitizenScores");
			for (var v = 0; v < nCSize; ++v)
			{
				packet.ReadInt("NationId");
				packet.ReadInt("citizenScore");
			}

			var oNSize = packet.ReadShort("offendedNations");
			for (var w = 0; w < oNSize; ++w)
				packet.ReadInt("offendedNationId");

	// GUILD_REMOTE_INFO
			packet.ReadLong("GuildId");
			packet.ReadLong("Blazon");
			packet.ReadShort("Level");
			packet.ReadBigString("Guild name");

	// NATION_ID
			packet.ReadInt("NationId");

	// NATION_SYNCHRO
			packet.ReadLong("rank");
			packet.ReadLong("jobs");
			packet.ReadLong("vote");
			packet.ReadByte("governmentOpinion");
			packet.ReadByte("isCandidate");

	// SOCIAL_STATES
			packet.ReadByte("afkState");
			packet.ReadByte("dndState");

	// PET
			if (packet.ReadByte("hasPet") == 1)
			{
				packet.ReadInt("definitionId");
				packet.ReadInt("colorRefItemId");
				packet.ReadInt("equippedRefItemId");
				packet.ReadInt("sleepRefItemId");
				packet.ReadInt("health");
			}

	// ACCOUNT_INFORMATION_REMOTE
			packet.ReadInt("subscriptionLevel");
			var aRSize = packet.ReadShort("additionalRights size");
			for (var x = 0; x < aRSize; ++x)
				packet.ReadInt("additionalRight");

	// COMPANION_CONTROLLER_ID
			packet.ReadLong("controllerId");
			packet.ReadLong("companionId");

	// VISIBILITY
	packet.ReadByte("Visible");
		}
		if (type == 1)
		{
			packet.Log("MONSTER");
			packet.ReadByte("Char part Id");

			// ID
			packet.ReadLong("Monster GUID");

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

	// APPEARANCE
	packet.ReadByte("Show");

	// PUBLIC_CHARACTERISTICS
	packet.ReadShort("Level");
	
			var chSize = packet.ReadShort("size states length");
			for (var k = 0; k < chSize; ++k)
			{
				packet.ReadByte();
			}

	// FIGHT_PROPERTIES
			if (packet.ReadByte("hasProperties") == 1)
			{
				fpSize = packet.ReadShort("size fightProperties");
				for (var l = 0; l < fpSize; ++l)
				{
					packet.ReadByte("id");
					packet.ReadByte("count");
				}
			}

	// FIGHT
			packet.ReadInt("currentFightId");
			packet.ReadByte("isKo");
			packet.ReadByte("isDead");
			packet.ReadByte("isSummoned");
			packet.ReadByte("isFleeing");
			packet.ReadByte("obstacleId");

			if (packet.ReadByte("hasSummon") == 1)
			{
				// TODO
			}

	// EQUIPMENT_APPEARANCE - can be wrong
			var vSize = packet.ReadByte("EQUIPMENT_APPEARANCE size");
			for (var m = 0; m < vSize; ++m)
			{
				packet.ReadByte("position");
				packet.ReadInt("referenceId");
			}

	// RUNNING_EFFECTS
	if (packet.ReadByte("hasInFightData") == 1)
	{
		if (packet.ReadShort("data length") > 0)
			packet.ReadByte("data");
	}

	if (packet.ReadByte("hasOutFightData") == 1)
	{
		var reSize = packet.ReadShort("size");
		for (var i = 0; i < reSize; ++i)
		{
			packet.ReadLong("uid");
			packet.ReadShort("stateBaseId");
			packet.ReadShort("level");
			packet.ReadInt("remainingDurationInMs");
		}
	}

	// CURRENT_MOVEMENT_PATH
			if (packet.ReadByte("hasCurrentPath") == 1)
			{
				var epSize = packet.ReadByte("EncodedPathSize");
				for (var p = 0; p < epSize; ++p)
					packet.ReadByte();
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
	packet.ReadLong("PartyId");
	var membersSize = packet.ReadShort("Members size");
	for (var p = 0; p < membersSize; ++p)
	{
		packet.ReadShort("breedId");
		packet.ReadShort("level");
	}

	// TEMPLATE
			packet.ReadShort("sightRadius");
			packet.ReadShort("aggroRadius");

	// COLLECT
			var uaSize = packet.ReadShort("unavailableActions size");
			for (var s = 0; s < uaSize; ++s)
				packet.ReadInt("collectId");

	// OCCUPATION
			if (packet.ReadByte("hasOccupation") == 1)
			{
				packet.ReadShort("occupationId");
				var cdLength = packet.ReadShort("occupationDataSize");
				for (var r = 0; r < cdLength; ++r)
					packet.ReadByte();
			}

	// XP
			packet.ReadLong("XP");

			packet.ReadShort("freePoints");
			var xpBSize = packet.ReadShort("xpBonusPoints");
			for (var t = 0; t < xpBSize; ++t)
			{
				packet.ReadByte("characId");
				packet.ReadShort("nbPoint");
			}

			var cBSize = packet.ReadShort("characteristicBonusPoints");
			for (var u = 0; u < cBSize; ++u)
			{
				packet.ReadByte("characId");
				packet.ReadShort("nbPoint");
			}

			packet.ReadInt("WakfuGauge");

	// CITIZEN_POINT
			var nCSize = packet.ReadShort("size nationCitizenScores");
			for (var v = 0; v < nCSize; ++v)
			{
				packet.ReadInt("NationId");
				packet.ReadInt("citizenScore");
			}

			var oNSize = packet.ReadShort("offendedNations");
			for (var w = 0; w < oNSize; ++w)
				packet.ReadInt("offendedNationId");

	// GUILD_REMOTE_INFO
			packet.ReadLong("GuildId");
			packet.ReadLong("Blazon");
			packet.ReadShort("Level");
			packet.ReadBigString("Guild name");

	// NATION_ID
			packet.ReadInt("NationId");

	// NATION_SYNCHRO
			packet.ReadLong("rank");
			packet.ReadLong("jobs");
			packet.ReadLong("vote");
			packet.ReadByte("governmentOpinion");
			packet.ReadByte("isCandidate");

	// SOCIAL_STATES
			packet.ReadByte("afkState");
			packet.ReadByte("dndState");

	// PET
			if (packet.ReadByte("hasPet") == 1)
			{
				packet.ReadInt("definitionId");
				packet.ReadInt("colorRefItemId");
				packet.ReadInt("equippedRefItemId");
				packet.ReadInt("sleepRefItemId");
				packet.ReadInt("health");
			}

	// ACCOUNT_INFORMATION_REMOTE
			packet.ReadInt("subscriptionLevel");
			var aRSize = packet.ReadShort("additionalRights size");
			for (var x = 0; x < aRSize; ++x)
				packet.ReadInt("additionalRight");
packet.Log(packet.Length());
	// COMPANION_CONTROLLER_ID
			packet.ReadLong("controllerId");
			packet.ReadLong("companionId");
packet.Log(packet.Length());
	// VISIBILITY
	packet.ReadByte("Visible");
		}
	}

	packet.Log(packet.Length());
}

ReadPacket();