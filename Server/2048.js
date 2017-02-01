function ReadPacket()
{
	var numCharacters = packet.ReadByte("numCharacters");
	for(var i = 0; i < numCharacters; i++){
        packet.Log("================================");
        packet.Log("=>                 Parse character [" + i + "]");
        packet.Log("================================");
        
        packet.ReadShort("serializedCharacterSize");
        packet.ReadByte("serializationTypeNumber");

		// ID - CharacterSerializedId
		packet.ReadLong("character id");
		
		// IDENTITY - CharacterSerializedIdentity
		packet.ReadByte("typeId (non-player = 1, player = 0)");
		packet.ReadLong("OwnerId");

		// NAME - CharacterSerializedName
        packet.ReadBigString("Name");

		// BREED - CharacterSerializedBreed
        packet.ReadShort("Breed");

		// ACTIVE_EQUIPMENT_SHEET
		packet.ReadByte("ActiveEquipmentSheet");

		// APPEARANCE - CharacterSerializedAppearance
		packet.ReadByte("gender");
		packet.ReadByte("skinColorIndex");
		packet.ReadByte("hairColorIndex");
		packet.ReadByte("pupilColorIndex");
		packet.ReadByte("skinColorFactor");
		packet.ReadByte("hairColorFactor");
		packet.ReadByte("clothIndex");
		packet.ReadByte("faceIndex");
		packet.ReadShort("currentTitle");

		// EQUIPMENT_APPEARANCE - CharacterSerializedEquipmentAppearance
		var equipSize = packet.ReadByte("EquipmentAppearance size");
		for (var j = 0; j < equipSize; ++j)
		{
			packet.ReadByte("position");
			packet.ReadInt("referenceId");
			packet.ReadInt("skinId");
		}

		// CREATION_DATA - CharacterSerializedCreationData
        if (packet.ReadByte("hasCreationData?") == 1)
		{
			packet.ReadByte("isNewCharacter");
			packet.ReadByte("needsRecustom");
			packet.ReadShort("recustomValue");
			packet.ReadByte("needInitialXp");
		}

		// XP - CharacterSerializedXp
		packet.ReadLong("XP");

		// CHARACTER_LIST_NATION_ID - CharacterSerializedNationId
		packet.ReadInt("Nation");

		packet.ReadLong("Guild Id");
		packet.ReadLong("Guild Blazon");

		packet.ReadShort("InstanceId");
	}
}

ReadPacket();