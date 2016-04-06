function ReadPacket()
{
	var size = packet.ReadByte("companionListSize");
	for (var i = 0; i < size; ++i)
	{
		packet.ReadLong("companion_id");
		packet.ReadShort("breedId");
		packet.ReadLong("ownerId");
		packet.ReadLong("xp");

		var strSize = packet.ReadInt("size");
		packet.ReadString(strSize, "name");

		packet.ReadByte("isUnlocked");
		packet.ReadInt("currentHp");
		packet.ReadInt("maxHp");

		packet.ReadInt("serializationVersion");
		// TODO!
}

	packet.Log(packet.Length());
}

ReadPacket();