function ReadPacket()
{
	packet.Log("CharacterInformationMessage");

	var longCount = packet.ReadShort("m_reservedIds size");
	for (var i=0; i<longCount; i++)
		packet.ReadLong("m_reservedIds[" + i + "]");

	packet.ReadInt("buffer size");
	packet.ReadByte("Char serialization part Id");

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

	// HP
	packet.ReadInt("HP");

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

	// SHORTCUT_INVENTORIES
	var aInv = packet.ReadShort("shortcutInventories size");

	for (var i = 0; i < aInv; ++i)
	{
		packet.Log("========= Inv " + i + " =========");
		packet.ReadByte("Type");
		var invSize = packet.ReadShort("Content");

		for (var x = 0; x < invSize; ++x)
		{
			packet.ReadShort("Position");
			packet.ReadByte("Type");
			packet.ReadLong("TargetUniqueId");
			packet.ReadInt("TargetReferenceId");
			packet.ReadInt("TargetGfxId");
		}
	}

	// EMOTE_INVENTORY
	var emoteSize = packet.ReadShort("Emote ID Size");
	for (var i = 0; i < emoteSize; ++i)
		packet.ReadInt("EmoteId");

	// LANDMARK_INVENTORY
	var landSize = packet.ReadShort("Size");
	for (var i = 0; i < landSize; ++i)
		packet.ReadByte("LandmarkId");

	// DISCOVERED_ITEMS
	var count = packet.ReadShort("ZaapsCount");
	for (var i = 0; i < count; ++i)
		packet.ReadInt("Zaaps + " + i);

	count =packet.ReadShort("dragosCount");
	for (var i = 0; i < count; ++i)
		packet.ReadInt("dragos + " + i);

	count = packet.ReadShort("boatscount");
	for (var i = 0; i < count; ++i)
		packet.ReadInt("boat + " + i);

	count = packet.ReadShort("cannonCount");
	for (var i = 0; i < count; ++i)
		packet.ReadInt("cannon + " + i);

	count = packet.ReadShort("phoenixcount");
	for (var i = 0; i < count; ++i)
		packet.ReadInt("phoenix + " + i);

	packet.ReadInt("selectedPhoenix");

	// SPELL_INVENTORY
	var spellSize = packet.ReadShort("Size");

	for (var i = 0; i < spellSize; ++i)
	{
		packet.Log("========= Spell " + i + " =========");
		packet.ReadByte("Type");
		packet.ReadLong("Uid");
		packet.ReadInt("SpellId");
		packet.ReadShort("Level");

		var skillSize = packet.ReadByte("SkillSize");
		for (var j = 0; j < skillSize; ++j)
			packet.ReadInt("[" + j + "] skillId");
	}

	packet.ReadByte("needSpellRestat");
	packet.ReadByte("needSpellAutoRestat");

	// RawQuestItemInventory
	var questInvSize = packet.ReadShort("questInventory size");
	for (var i = 0; i < questInvSize; ++i)
	{
		packet.ReadInt("refId");
		packet.ReadShort("quantity");
	}

	// RawInventoryItemInventory
	var tempInvSize = packet.ReadShort("temporaryInventory size ?");
	for (var i = 0; i < tempInvSize; ++i)
	{
		ReadInventory(packet, i);
	}

	// RawCosmeticsItemInventory
	var cosmeInvSize = packet.ReadShort("cosmeticsInventory items size");
	for (var i = 0; i < cosmeInvSize; ++i)
	{
		packet.ReadInt("refId");
		packet.ReadByte("bindId");
	}
	packet.ReadInt("activeRefId");
	
	// RawCosmeticsItemInventory
	var petCosmeInvSize = packet.ReadShort("petCosmeticsInventory items size");
	for (var i = 0; i < petCosmeInvSize; ++i)
	{
		packet.ReadInt("refId");
		packet.ReadByte("bindId");
	}
	packet.ReadInt("activeRefId");

	// BAGS - TODO FIX ME
	var bagCount = packet.ReadShort("Bags count");

	for (var i = 0; i < bagCount; ++i)
	{
		packet.Log("========= Bag " + i + " =========");
		packet.ReadLong("uniqueId");
		packet.ReadInt("referenceId");
		packet.ReadByte("position");
		packet.ReadShort("maximumSize");

		var itemCount = packet.ReadShort("item count");

		for (var j = 0; j < itemCount; ++j)
		{			
			ReadInventory(packet, j);
		}
	}

    // PROTO_TEMPORARY_INVENTORY - TODO FIX ME
    packet.ReadShort("PROTO_TEMPORARY_INVENTORY Size to read");

	// BREED_SPECIFIC - TODO FIX ME
	if (packet.ReadByte("hasOsaSpecific") == 1)
	{
		for (var i = 0; i < packet.ReadByte("capturedCreatures size"); ++i)
		{
			packet.ReadByte("index");
			packet.ReadShort("typeId");
			packet.ReadShort("quantity");
			packet.ReadBigString("name");
		}

		packet.ReadByte("currentCreatureIndex");
	}

	// SKILL_INVENTORY - Struct OK
	var skillCount = packet.ReadShort("SkillInventory");
	for (var i = 0; i < skillCount; ++i)
	{
		packet.Log("========= Skill " + i + " =========");
		packet.ReadInt("refid");
		packet.ReadShort("level");
		packet.ReadLong("xp");
	}

	// CRAFT
	var craftCount = packet.ReadShort("Craft Count");
	for (var i = 0; i < craftCount; ++i)
	{
		packet.Log("========= Craft " + i + " =========");
		packet.ReadInt("craftId");
		packet.ReadLong("craftXp");

		if (packet.ReadByte("hasPlantationCounter") == 1)
			packet.ReadInt("plantationCounter");

		if (packet.ReadByte("hasNonDestructiveCollectCounter"))
			packet.ReadInt("nonDestructiveCollectCounter");

		if (packet.ReadByte("hasdestructiveCollectCounter"))
			packet.ReadInt("destructiveCollectCounter");

		if (packet.ReadByte("hasRecipeCounter"))
			packet.ReadInt("recipeCounter");

		var rawRSize = packet.ReadShort("rawLearnedRecipes size");
		for (var j = 0; j < rawRSize; ++j)
			packet.ReadInt("recipeId");
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
			packet.ReadLong("startDate");
		}
	}

	// DIMENSIONAL_BAG_FOR_LOCAL_CLIENT
	packet.ReadLong("OwnerId");
	var ownLenName = packet.ReadShort();
	packet.ReadString(ownLenName, "OwnerName");
	packet.ReadLong("Guild Id");
	var roomsCount = packet.ReadByte("roomscount");

	for (var i = 0; i < roomsCount; ++i)
	{
		packet.Log("========= Bag rooms " + i + " =========");
		// Bag rooms
		packet.ReadByte("Layout position");
		var IECount = packet.ReadShort("InteractiveElements count");
		for (var j = 0; j < IECount; ++j)
		{
			packet.ReadLong("templateId");
			packet.ReadInt("positionX");
			packet.ReadInt("positionY");
			packet.ReadShort("positionX");
			packet.ReadByte("direction");

			// TODO itemForm ->dMe.java
			packet.ReadLong("uniqueId");
			packet.ReadInt("refId");
			packet.ReadShort("quantity");

			if (packet.ReadByte("hasTimestamp") == 1)
				packet.ReadLong("timestampValue");

			if (packet.ReadByte("haspet") == 1)
			{
				packet.ReadInt("definitionId");
				packet.ReadBigString("name");
				packet.ReadInt("colorItemRefId");
				packet.ReadInt("equippedRefItemId");
				packet.ReadInt("health");
				packet.ReadInt("xp");
				packet.ReadByte("fightCounter");
				packet.ReadLong("fightCounterStartDate");
				packet.ReadLong("lastMealDate");
				packet.ReadLong("lastHungryDate");
				packet.ReadInt("sleepRefItemId");
				packet.ReadLong("sleepDate");
			}
	
			if (packet.ReadByte("hasxp") == 1)
			{
				packet.ReadInt("definitionId");
				packet.ReadLong("xp");
			}

			if (packet.ReadByte("hasgems"))
			{
				for (var j = 0; j < packet.ReadShort("Gems size"); ++j)
				{
					packet.ReadByte("position");
					packet.ReadInt("referenceId");
				}
			}

			if (packet.ReadByte("hasRentInfo") == 1)
			{
				packet.ReadInt("type");
				packet.ReadLong("duration");
				packet.ReadLong("count");
			}
	
			if (packet.ReadByte("hasCompanionInfo") == 1)
			{
				packet.ReadLong("xp");
			}

			if (packet.ReadByte("hasBind") == 1)
			{
				packet.ReadByte("type");
				packet.ReadLong("data");
			}

			packet.ReadByte("SpecificData");
			packet.ReadByte("SpecificData part Id");
		}

		if (packet.ReadByte("hasRoomSpecificData") == 0)
		{
			packet.ReadByte("primaryGemLocked");
			packet.ReadInt("primaryGemitemRefId");
			packet.ReadLong("primaryGemUniqueId");
			packet.ReadInt("secondaryGemitemRefId");
			packet.ReadLong("secondaryGemUniqueId");
		}
	}

	packet.ReadInt("customViewModelId");
	if (packet.ReadByte("HasWallet?") == 1)
		packet.ReadInt("Cash");


	packet.ReadByte("dimensionalBagLocked");

	var GESize = packet.ReadShort("groupEntriesSize");
	for (var i = 0; i < GESize; ++i)
	{
		packet.Log("========= groupEntriesSize " + i + " =========");
		packet.ReadByte("groupType");
		packet.ReadByte("groupRights");
	}

	var IESize = packet.ReadShort("individualEntriesSize");
	for (var x = 0; x < IESize; ++x)
	{
		packet.Log("========= individualEntriesSize " + x + " =========");
		packet.ReadLong("userId");
		packet.ReadBigString("username");
		packet.ReadByte("rights");
	}

	var dbProtoSize = packet.ReadShort("Size of dimensionalBag.proto");
	packet.DumpBlob("dimensionalBag", dbProtoSize);

	// CHALLENGES
	if (packet.ReadByte("hasCurrentScenarii") == 1)
	{
		var SCSize = packet.ReadShort("scenarii Size");
		for (var i = 0; i < SCSize; ++i)
		{
			packet.ReadInt("screnrioId");
			var globalVars = packet.ReadShort("globalVars size");
			for (var j = 0; j < globalVars; ++j)
			{
				packet.ReadByte("varId");
				packet.ReadLong("value");
			}

			var cvA = packet.ReadShort("currentVarsForAddedUsers size");
			for (var k = 0; k < cvA; ++k)
			{
				packet.ReadLong("userId");
				var varSize = packet.ReadShort("vars size");
				for (var l = 0; l < varSize; ++l)
				{
					packet.ReadByte("varId");
					packet.ReadLong("value");
				}
			}

			var aaGr = packet.ReadShort("activeActionGroups size");
			for (var m = 0; m < aaGr; ++m)
				packet.ReadInt("actionGroupId");

			var eaGr = packet.ReadShort("executedActionGroups size");
			for (var n = 0; n < eaGr; ++n)
			{
        /* TODO
                                                int actionGroupId
                                                short actionGroup size
                                                {
                                                        short actions size
                                                        {
                                                                int actionUid
                                                                byte hasSpawnedCharacter
                                                                {
                                                                        short serializedCharacterLength
                                                                        byte[serializedCharacterLength] serializedCharacter
                                                                }
                                                        }
                                                }   
                */      		
			}

			if (packet.ReadByte("hasStartTime") == 1)
				packet.ReadLong("value");
		}
	}

	if (packet.ReadByte("hasCurrentChallengeInfo") == 1)
	{
		var chalSize = packet.ReadShort("challenges size");
		for (var i = 0; i < chalSize; ++i)
		{
			packet.ReadInt("screnrioId");
			var activeGoals = packet.ReadShort("activeGoals size");
			for (var j = 0; j < activeGoals; ++j)
				packet.ReadInt("actionGroupId");

			var executedGoals = packet.ReadShort("executedGoals size");
			for (var k = 0; k < executedGoals; ++k)
				packet.ReadInt("actionGroupId");

			var globalVars = packet.ReadShort("globalVars size");
			for (var l = 0; l < globalVars; ++l)
			{
				packet.ReadByte("varId");
				packet.ReadLong("value");
			}

			var watchedVars = packet.ReadShort("watchedVars size");
			for (var m = 0; m < watchedVars; ++m)
			{
				packet.ReadByte("varId");
				packet.ReadLong("value");
			}

			if (packet.ReadByte("hasRemainingTime") == 1)
				packet.ReadLong("value");
		}
	}

	var pastSCSize = packet.ReadShort("pastScenarii size");
	for (var i = 0; i < pastSCSize; ++i)
	{
		packet.ReadInt("scenarioId");
		packet.ReadShort("executionCount");
		packet.ReadByte("status");
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

	// TITLES
	var atcSize = packet.ReadShort("availableTitles size");
	for (var i = 0; i < atcSize; ++i)
	{
		packet.ReadShort("availableTitle");
	}

	// CITIZEN_POINT
	var ncSize = packet.ReadShort("nationCitizenScores size");
	for (var i = 0; i < ncSize; ++i)
	{
		packet.ReadInt("nationId");
		packet.ReadInt("citizenScore");
	}

	var onSize = packet.ReadShort("offendedNationsSize");
	for (var i = 0; i < onSize; ++i)
    {
		packet.ReadInt("offendedNationId");
        packet.ReadInt("lawPoints");
        packet.ReadLong("date");
    }

	// PASSEPORT_INFO
	packet.ReadByte("isPassportActive");

	// SOCIAL_STATES
	packet.ReadByte("afkState as bool");
	packet.ReadByte("dndstate as bool");

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

	// ACHIEVEMENTS
	var dataLen = packet.ReadShort("serializedAchievementsContextLength");
	if (dataLen > 0)
	{
		packet.ReadInt("version");
		var history = packet.ReadByte("history size");
		for (var i = 0; i < history; ++i)
		{
			packet.ReadInt("achievementId");
			packet.ReadLong("unlockTime");
		}

		var nbVariables = packet.ReadInt("nbVariables");
		for (var i = 0; i < nbVariables; ++i)
		{
			packet.ReadInt("value id");
			packet.ReadLong("value");
		}

		var nbAchievements = packet.ReadInt("nbAchievements");
		for (var i = 0; i < nbAchievements; ++i)
		{
			packet.ReadInt("achievement id");
			packet.ReadBool("active");
			packet.ReadBool("complete");
			packet.ReadLong("lastCompleted");
			packet.ReadLong("startTime");
		}

		var nbObjectives = packet.ReadInt("nbObjectives");
		for (var i = 0; i < nbObjectives; ++i)
			packet.ReadInt("objective id");

		var numFollowed = packet.ReadByte("numFollowed");
		for (var i = 0; i < numFollowed; ++i)
			packet.ReadInt("followedAchievement id");
	}

	// ACCOUNT_INFORMATION
	var adminRights = packet.ReadShort("adminRights size");
	for (var i = 0; i < adminRights; ++i)
		packet.ReadInt("adminRight");

	packet.ReadInt("subscriptionLevel");
	packet.ReadInt("forcedSubscriptionLevel");
	packet.ReadInt("antiAddictionLevel");
	packet.ReadLong("sessionStartTime");

	var adRi = packet.ReadShort("AdditionalRights size");
	for (var i = 0; i < adRi; ++i)
		packet.ReadInt("additionalRight");

	packet.ReadByte("additionalSlots");

	packet.ReadByte("accountSecurityType");
	var accountDataSize = packet.ReadShort("accountData");
	for (var adSize = 0; adSize < accountDataSize; ++adSize)
	{
		packet.ReadByte("id");
		packet.ReadLong("value");
	}

	// LOCK_TO_CLIENT
	var lockSize = packet.ReadShort("LOCK_TO_CLIENT size");
	for (var i = 0; i < lockSize; ++i)
	{
		packet.ReadInt("lockId");
		packet.ReadLong("lockDate");
		packet.ReadLong("unlockDate");
		packet.ReadInt("currentLockValue");
		packet.ReadLong("currentLockValueLastModification");
	}


	// DIMENSIONAL_BAG_VIEWS_INVENTORY
	var viewSize = packet.ReadShort("views size");
	for (var i = 0; i < viewSize; ++i)
		packet.ReadInt("viewId");

	// PERSONAL_EFFECTS
	var guildEffects = packet.ReadShort("guildEffects size");
	for (var i = 0; i < guildEffects; ++i)
		packet.ReadInt("guildEffect");

	var havenWorldEffects = packet.ReadShort("havenWorldEffects size");
	for (var i = 0; i < havenWorldEffects; ++i)
		packet.ReadInt("havenWorldEffect");

	var antiAddictionEffects = packet.ReadShort("antiAddictionEffects size");
	for (var i = 0; i < antiAddictionEffects; ++i)
		packet.ReadInt("antiAddictionEffect");

	// ANTI_ADDICTION
	if (packet.ReadByte("hasAddictionData") == 1)
	{
		packet.ReadLong("lastCOnnectionDate");
		packet.ReadLong("currentUsedQuota");
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

	// VISIBILITY
	packet.ReadByte("Visible");

	// OCCUPATION
	if (packet.ReadByte("hasOccupation") == 1)
	{
	}

    // SPELL_DECK
	var spellDeckSize = packet.ReadShort("spellDeckSize size");
	for (var i = 0; i < spellDeckSize; ++i)
	{
		packet.ReadInt("index");

		var activeSpells = packet.ReadShort("activeSpells size");
		for (var j = 0; j < activeSpells; ++j)
			packet.ReadInt("activeSpells");

		var passiveSpells = packet.ReadShort("passiveSpells size");
		for (var j= 0; j < passiveSpells; ++j)
			packet.ReadInt("passiveSpells");

		packet.ReadBigString("Name");
		packet.ReadInt("Level");
	}

	packet.ReadInt("size");

    // DUNGEON_PROGRESSION
    var dungeonSize = packet.ReadShort("Dungeon progress data size");
	packet.DumpBlob("dungeon", dungeonSize);

	// Second part of packet
	var protoBuildSize = packet.ReadInt("buildSheet.proto size");

	packet.DumpBlob("buildSheet", protoBuildSize);

	var protoBuildSize = packet.ReadInt("aptitude.proto size");
	packet.DumpBlob("aptitude");
}

function ReadInventory(packet, pos)
{
	packet.Log("========= Equipment " + pos + " =========");
	packet.ReadShort("Position");

	// RawInventoryItem
	packet.ReadLong("uniqueId");
	packet.ReadInt("refId");
	packet.ReadShort("quantity");

	if (packet.ReadByte("haspet") == 1)
	{
		packet.ReadInt("definitionId");
		packet.ReadBigString("name");
		packet.ReadInt("colorItemRefId");
		packet.ReadInt("equippedRefItemId");
		packet.ReadInt("health");
		packet.ReadInt("xp");
		packet.ReadLong("lastMealDate");
		packet.ReadLong("lastHungryDate");
		packet.ReadInt("sleepRefItemId");
		packet.ReadLong("sleepDate");
	}

	if (packet.ReadByte("hasxp"))
	{
		packet.ReadInt("definitionId");
		packet.ReadLong("xp");
	}

	if (packet.ReadByte("hasgems"))
	{
		var gemsSize = packet.ReadShort("Gems size");
		for (var j = 0; j < gemsSize; ++j)
		{
			packet.ReadByte("position");
			packet.ReadInt("referenceId");
		}
	}

	if (packet.ReadByte("hasRentInfo"))
	{
		packet.ReadInt("type");
		packet.ReadLong("duration");
		packet.ReadLong("count");
	}

	if (packet.ReadByte("hasCompanionInfo"))
	{
		packet.ReadLong("xp");
	}

	if (packet.ReadByte("hasBind") == 1)
	{
		packet.ReadByte("type");
		packet.ReadBool("applied");
	}

	if (packet.ReadByte("hasElements") == 1)
	{
		packet.ReadByte("damageElements");
		packet.ReadByte("resistanceElements");
	}

	if (packet.ReadByte("hasMergedItems") == 1)
	{
		packet.ReadInt("version");
		var mergedItemSize = packet.ReadShort("items size");
		for (var j = 0; j < mergedItemSize; ++j)
			packet.ReadByte();
	}

	if (packet.ReadByte("hasMimiSymbic"))
	{
		packet.ReadInt("skinItemRefId");
	}
}

ReadPacket();
