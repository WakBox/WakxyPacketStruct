function ReadPacket()
{
	packet.Log("Spawn de creature (acteur), voir atE.java ligne 241");
	packet.ReadByte("unk bool (spawn [1], despawn [0] ?)");
	var i = packet.ReadByte("unk (number of npc to spawn ?");

	for (var j = 0; j < i; ++j)
	{
		packet.Log("============= NPC " + j + "=============");
		var type = packet.ReadByte("spawn type (0 = char, 1 = monster, 4 = ?");

		packet.ReadLong("Character Guid");
		var k = packet.ReadShort("buffer size");

		if (type == 0)
		{
			packet.ReadByte("Char part Id");

			packet.ReadLong("Char Id");
		
			packet.ReadByte("id Type");
			packet.ReadLong("owner id");
		
			packet.ReadBigString("character name");

			packet.ReadShort("Breed");

			packet.ReadInt("X");
			packet.ReadInt("Y");
			packet.ReadShort("Z");
			packet.ReadShort("InstanceId");
			packet.ReadByte("Direction");

			packet.ReadByte("Gender");
			packet.ReadByte("skinColorIndex");
			packet.ReadByte("hairColorIndex");
			packet.ReadByte("pupilColorIndex");
			packet.ReadByte("skinColorFactor");
			packet.ReadByte("hairColorFactor");
			packet.ReadByte("clothIndex");
			packet.ReadByte("faceIndex");
			packet.ReadShort("Title");

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

			if (packet.ReadByte("hasProperties") == 1)
			{
				fpSize = packet.ReadShort("size fightProperties");
				for (var l = 0; l < fpSize; ++l)
				{
					packet.ReadByte("id");
					packet.ReadByte("count");
				}
			}

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

			var vSize = packet.ReadShort("views size");
			for (var m = 0; m < vSize; ++m)
				packet.ReadInt("viewId");

			if (packet.ReadByte("hasInFightData") == 1)
			{
				var ifdLength = packet.ReadShort("data length");
				for (var n = 0; n < ifdLength; ++n)
					packet.ReadByte();
			}

			if (packet.ReadByte("hasOutFightData") == 1)
			{
				var efSize = packet.ReadShort("effects size");
				for (var o = 0; o < ifdLength; ++o)
				{
					packet.ReadLong("uid");
					packet.ReadShort("stateBaseId");
					packet.ReadShort("level");
					packet.ReadInt("remainingDurationInMs");
				}
			}

			if (packet.ReadByte("hasCurrentPath") == 1)
			{
				var epSize = packet.ReadByte("EncodedPathSize");
				for (var p = 0; p < epSize; ++p)
					packet.ReadByte();
			}

			if (packet.ReadByte("hasProperties") == 1)
			{
				var prSize = packet.ReadShort("properties Size");
				for (var q = 0; q < prSize; ++q)
				{
					packet.ReadByte("id");
					packet.ReadByte("count");
				}
			}

			packet.ReadLong("PartyId");

			packet.ReadShort("sightRadius");
			packet.ReadShort("aggroRadius");

			var uaSize = packet.ReadShort("unavailableActions size");
			for (var s = 0; s < uaSize; ++s)
				packet.ReadInt("collectId");

			if (packet.ReadByte("hasOccupation") == 1)
			{
				packet.ReadShort("occupationId");
				var cdLength = packet.ReadShort("occupationDataSize");
				for (var r = 0; r < cdLength; ++r)
					packet.ReadByte();
			}

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

			var nCSize = packet.ReadShort("size nationCitizenScores");
			for (var v = 0; v < nCSize; ++v)
			{
				packet.ReadInt("NationId");
				packet.ReadInt("citizenScore");
			}

			var oNSize = packet.ReadShort("offendedNations");
			for (var w = 0; w < oNSize; ++w)
				packet.ReadInt("offendedNationId");

			packet.ReadLong("GuildId");
			packet.ReadLong("Blazon");
			packet.ReadShort("Level");
			packet.ReadBigString("Guild name");

			packet.ReadInt("NationId");

			packet.ReadLong("rank");
			packet.ReadLong("jobs");
			packet.ReadLong("vote");
			packet.ReadByte("governmentOpinion");
			packet.ReadByte("isCandidate");

			packet.ReadByte("afkState");
			packet.ReadByte("dndState");

			if (packet.ReadByte("hasPet") == 1)
			{
				packet.ReadInt("definitionId");
				packet.ReadInt("colorRefItemId");
				packet.ReadInt("equippedRefItemId");
				packet.ReadInt("sleepRefItemId");
				packet.ReadInt("health");
			}

			packet.ReadInt("subscriptionLevel");
			var aRSize = packet.ReadShort("additionalRights size");
			for (var x = 0; x < aRSize; ++x)
				packet.ReadInt("additionalRight");

			packet.ReadLong("controllerId");
			packet.ReadLong("companionId");	
		}
	}

	packet.Log(packet.Length());
}

ReadPacket();