function ReadPacket()
{
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadByte("unk");
	packet.ReadInt("unk");

	var size = packet.ReadShort("unk");
		for (var i = 0; i < size; ++i)
			packet.ReadByte();

	while (packet.Length() > 0)
	{
		var size = packet.ReadShort("short size");
		for (var i = 0; i < size; ++i)
			packet.ReadByte(i);
	}
}

ReadPacket();