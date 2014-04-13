function ReadPacket()
{
	var count = packet.ReadByte("CharactersCount");
	for(var i = 0; i < count; i++){
        packet.Log("================================");
        packet.Log("=>                 Parse character [" + i + "]");
        packet.Log("================================");
        
        packet.ReadShort("data size");
        packet.ReadByte("block id");

		packet.ReadLong("character id");
		
		packet.ReadByte("typeId");
		packet.ReadLong("OwnerId");

        packet.ReadBigString("Name");

        packet.ReadShort("Breed");

		packet.ReadByte("gender");
		packet.ReadByte("skinColorIndex");
		packet.ReadByte("hairColorIndex");
		packet.ReadByte("pupilColorIndex");
		packet.ReadByte("skinColorFactor");
		packet.ReadByte("hairColorFactor");
		packet.ReadByte("clothIndex");
		packet.ReadByte("faceIndex");
		packet.ReadShort("currentTitle");

		var vSize = packet.ReadShort("views size");
		for (var j = 0; j < vSize; ++j)
			packet.ReadInt("viewId");

        if (packet.ReadByte("CreationData?") == 1)
		{
			packet.ReadByte("isnewCharacter");
			packet.ReadByte("needsRecustom");
		}

		packet.ReadLong("XP");
        
		packet.ReadInt("Nation");
	}

	packet.Log(packet.Length());
}

ReadPacket();