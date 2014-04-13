function ReadPacket()
{
	packet.ReadInt("combat Id ?");

	packet.ReadByte("unk");
	packet.ReadLong("unk");
	packet.ReadLong("unk");

	var i =	packet.ReadByte("i");
	for (var j = 0; j < i; ++j)
		packet.ReadLong("unk");

	var j = packet.ReadByte("size");
	for (var k = 0; k < j; ++k)
	{
		packet.ReadLong("unk");
		packet.ReadByte("unk");
	}

	packet.ReadByte("unk");
	
	for (var l = packet.ReadByte() - 1; l >= 0; l = l - 1)
	{
		packet.ReadShort("unk");
		packet.ReadShort("unk");
	}

	while (packet.Length() > 0)
	{
		packet.ReadShort("s1");
		packet.ReadShort("s2");

		packet.ReadInt("j");
		packet.ReadInt("k");
		packet.ReadInt("m");
		packet.ReadInt("n");

		packet.ReadShort("unk");
		packet.ReadShort("unk");
		var i1 = packet.ReadShort("i1");

		for (var i2 = 0; i2 < i1; ++i2)
			packet.ReadShort(i2);

		packet.ReadByte("i2 = (byte == 1 ? 1 : 0)");
		packet.ReadByte("unk");

		packet.ReadByte("unk");
		packet.ReadByte("unk");

		var i3 = packet.ReadByte("i3");
		for (var i4 = 0; i4 < i3; i4++)
		{
			packet.ReadByte("unk");
			packet.ReadInt("unk");
		}
	}

	packet.Log(packet.Length());
}

ReadPacket();