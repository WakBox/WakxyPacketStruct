function ReadPacket()
{
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadLong("monsterId or characterId then target id ?");
	packet.ReadByte("unk");
	packet.ReadByte("unk");

	var i = 0;

	while (packet.Length() > 0)
	{
		packet.Log("==== STEP INDEX " + i + " ====");
		packet.ReadInt("X");
		packet.ReadInt("Y");
		packet.ReadShort("Z");
		packet.Log("==========");
		++i;
	}

	packet.Log(packet.Length());
}

ReadPacket();