function ReadPacket()
{
	packet.Log("IgnoreListMessage");
	var size = packet.ReadByte("List size");

	for (var i = 0; i < size; ++i)
	{
		packet.ReadString("entryName");
		packet.ReadLong("userId");
	}

	for (var i = 0; i < size; ++i)
	{
		packet.ReadString("characterName");
	}
}

ReadPacket();