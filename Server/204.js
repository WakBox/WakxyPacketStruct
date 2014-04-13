function ReadPacket()
{
	var i = packet.ReadShort("i");

	for (var j = 0; j < i; ++j)
	{
		packet.ReadLong("l1");
		packet.ReadLong("instance elementId ????");
		var k = packet.ReadShort("k");

		for (var j = 0; j < k; ++j)
			packet.ReadByte(j);

		packet.ReadLong("l3");
	}
}

ReadPacket();