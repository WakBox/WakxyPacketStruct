function ReadPacket()
{
	var count = packet.ReadByte("CharactersCount");
	for(var i = 0; i < count; i++){
        packet.Log("================================");
        packet.Log("=>                 Parse character [" + i + "]");
        packet.Log("================================");
        
        packet.ReadShort("data size");
        packet.ReadByte("part id");

		// ID
		packet.ReadLong("character id");
		
		// IDENTITY
		packet.ReadByte("typeId");
		packet.ReadLong("OwnerId");

		// NAME
        packet.ReadBigString("Name");

		// BREED
        packet.ReadShort("Breed");

		// APPEARANCE
		packet.ReadByte("gender");
		packet.ReadByte("skinColorIndex");
		packet.ReadByte("hairColorIndex");
		packet.ReadByte("pupilColorIndex");
		packet.ReadByte("skinColorFactor");
		packet.ReadByte("hairColorFactor");
		packet.ReadByte("clothIndex");
		packet.ReadByte("faceIndex");
		packet.ReadShort("currentTitle");

		// EQUIPMENT_APPEARANCE
		var equipSize = packet.ReadByte("equipSize size");
		for (var j = 0; j < equipSize; ++j)
		{
			packet.ReadByte("position");
			packet.ReadInt("referenceId");
		}

		// CREATION_DATA
        if (packet.ReadByte("CreationData?") == 1)
		{
			packet.ReadByte("isnewCharacter");
			packet.ReadByte("needsRecustom");
			packet.ReadShort("recustomValue");
		}

		// XP
		packet.ReadLong("XP");

		// CHARACTER_LIST_NATION_ID
		packet.ReadInt("Nation");
	}

	packet.Log(packet.Length());
}

ReadPacket();