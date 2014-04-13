function ReadPacket()
{
	packet.ReadByte("unk");
	packet.ReadByte("unk");
	var i = packet.ReadByte("loop size");

	for (var j = 0; j < i; ++j)
	{
		packet.ReadByte("unk");
		packet.ReadLong("characterId");
	}

	packet.Log(packet.Length());
}

ReadPacket();