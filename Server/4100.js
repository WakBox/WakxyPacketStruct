function ReadPacket()
{
	// goN
	packet.ReadShort("Size");

	packet.ReadByte("CharacterPartId");

	packet.ReadLong("Character Id");
	packet.ReadByte("id Type");
	packet.ReadLong("Owner id");

	packet.ReadInt("x");
	packet.ReadInt("y");
	packet.ReadShort("z");
	packet.ReadShort("InstanceId");
	packet.ReadByte("direction");

	// Next
	var pSize = packet.ReadShort("Size");

	// tmp
	for (var m = 0; m < pSize; ++m)
		packet.ReadByte();

/*
	var loopSize = packet.ReadShort("loop size");
	for (var i = 0; i < loopSize; ++i)
	{
		var dataSize = packet.ReadShort("size");

		packet.ReadInt("protectorId");
		if (packet.ReadByte("hasNationality") == 1)
		{
			packet.ReadInt("nativeNationId");
			packet.ReadInt("currentNationId");
			packet.ReadInt("territoryId");
		}

		if (packet.ReadByte("hasAppearance") == 1)
		{
			packet.ReadInt("monsterCrewId");
			packet.ReadLong("monterId");
		}

		if (packet.ReadByte("hasChallenges") == 1)
		{
			packet.ReadInt("dropTableId");
			packet.ReadInt("dropTableIdToBuy");
			packet.ReadInt("dropTableIdChaos");
		}

		if (packet.ReadByte("hasReferenceMerchantInventories") == 1)
		{
			// TODO ir.java
		}

		if (packet.ReadByte("hasNationMerchantInventories") == 1)
		{

		}

		if (packet.ReadByte("haswallet") == 1)
		{

		}

		if (packet.ReadByte("hasstake") == 1)
		{

		}

		if (packet.ReadByte("hastaxes") == 1)
		{

		}

		if (packet.ReadByte("hasweatherModifiers") == 1)
		{

		}	

		if (packet.ReadByte("hassatisfaction") == 1)
		{

		}

		if (packet.ReadByte("hasmonsterTargets") == 1)
		{

		}	

		if (packet.ReadByte("hasresourceTargets") == 1)
		{

		}	

		if (packet.ReadByte("hasecosystem") == 1)
		{

		}	
	}
*/

	// NationProtectorInfo.java
	packet.ReadShort("Size");
	var loopSize2 = packet.ReadShort("loop size");
	for (var i = 0; i < loopSize2; ++i)
	{
		packet.ReadInt("protectorId");
		packet.ReadInt("unk");
		packet.ReadByte("unk as bool (!=0)");
		packet.ReadInt("unk");
		packet.ReadFloat("unk");
		packet.ReadFloat("unk");
		packet.ReadInt("unk");
		packet.ReadInt("unk");
	}

packet.Log(packet.Length());
}

ReadPacket();