function ReadPacket()
{
	packet.ReadInt("fightId");
	packet.ReadByte("fightTypeId");
	packet.ReadInt("unk mapId ???");
	packet.ReadLong("zoneEffectIndex");
	packet.ReadLong("unkId effectArea Id ???");

	var sizeOf = packet.ReadInt("Byte Size");
	{
		var sizeB = packet.Length();
		packet.Log(sizeB);

		packet.ReadShort("unk");
		packet.ReadShort("unk");
		packet.ReadInt("unk");
		packet.ReadInt("unk");
		packet.ReadInt("width");
		packet.ReadInt("height");
		packet.ReadShort("unk");
		var sizeW = packet.ReadShort("unk size");
		for (var i = 0; i < sizeW; ++i)
			packet.ReadShort("unk");

		var bool = packet.ReadByte("unk as boolean") == 1;
		if (bool)
		{
			for (var i = 0; i < sizeW; ++i)
				packet.ReadByte();
		}

		// TODO
		for (var i = 0; i < 161; ++i)
			packet.ReadByte();

		packet.Log(packet.Length() + sizeOf);
	}

	var sizeOfShort = packet.ReadShort("unk size");
	{
		var sizeB = packet.Length();
		packet.Log(sizeB);

		packet.ReadShort("unk");
		packet.ReadInt("unk");
		packet.ReadByte("unk");
		packet.ReadInt("unk");

		var usizel = packet.ReadByte("unk size");
		for (var i = 0; i < usizel; ++i)
			packet.ReadLong("unk");

		usizel = packet.ReadByte("unk size");
		for (var i = 0; i < usizel; ++i)
			packet.ReadLong("unk");		

		var  usize = packet.ReadByte("unk size");
		for (var i = 0; i < usize; ++i)
		{
			packet.ReadLong("unk");
			packet.ReadShort("unk");
		}

		packet.ReadByte("unk");

		// TODO
		for (var i = 0; i < 26; ++i)
			packet.ReadByte();

		packet.Log(packet.Length() + sizeOfShort);
	}

	packet.ReadLong("unk");
	packet.ReadLong("unk");

	var arraySizes = packet.ReadByte("array size");
 	for (var j = 0; j < arraySizes; ++j)
	{
		packet.ReadLong("unk");
		packet.ReadByte("unk");
		packet.ReadByte("unk");
		var shortSize = packet.ReadShort("unk size");
		for (var i = 0; i < shortSize; ++i)
			packet.ReadByte();

		shortSize = packet.ReadShort("unk size");
		for (var i = 0; i < shortSize; ++i)
			packet.ReadByte();		
	}

	var unkSize = packet.ReadByte("unk size");
	for (var i = 0; i < unkSize; ++i)
	{
		packet.ReadByte("unk");
		packet.ReadLong("unk");
	}

	unkSize = packet.ReadByte("unk size");
	for (var i = 0; i < unkSize; ++i)
	{
		packet.ReadByte("unk");
	}

	packet.Log(packet.Length());
}

ReadPacket();