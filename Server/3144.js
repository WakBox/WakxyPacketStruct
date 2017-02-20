function ReadPacket()
{
	packet.Log("FriendListMessage");
	var friends = packet.ReadByte("Friends list");

	for (var i = 0; i < friends; ++i)
	{
		packet.ReadShort("size");
		packet.ReadString("Name");
		packet.ReadString("CharacterName");
		packet.ReadString("Commentary");

		packet.ReadBool("Notify");
		packet.ReadLong("userId");
		packet.ReadShort("breedId");
		packet.ReadByte("gender");
		packet.ReadLong("xp");
	}
}

ReadPacket();