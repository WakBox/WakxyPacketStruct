function ReadPacket()
{
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadInt("unk");

	packet.ReadLong("characterId");
	packet.ReadInt("unk");
	packet.ReadShort("unk");
	var bool = packet.ReadByte("unk");

	if (bool == 1)
	{
		// todo
	}
	
	bool = packet.ReadByte("unk");
	if (bool == 1)
	{
		// todo
	}
	else
	{
		packet.ReadByte("unk");
		packet.ReadInt("X");
		packet.ReadInt("Y");
		packet.ReadShort("Z");
	}
}

ReadPacket();