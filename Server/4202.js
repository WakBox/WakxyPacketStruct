function ReadPacket()
{
	packet.ReadShort("unk");
	packet.ReadShort("unk");
	var i = packet.ReadShort("i");

	for (var j = 0; j < i; ++j)
	{
		packet.ReadShort("s");
		var k = packet.ReadShort("k");

		for (var l = 0; l < k; ++l)
			packet.ReadInt("unk");
	}

	packet.Log(packet.Length());
}

ReadPacket();