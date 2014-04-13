function ReadPacket()
{
	packet.ReadInt("territoire ID ?");

	var i = packet.ReadInt("i");
	for (var j = 0; j < i; ++j)
		packet.ReadByte(j);

	var k = packet.ReadInt("k");
	for (var j = 0; j < k; ++j)
		packet.ReadByte(j);

	packet.Log(packet.Length());
}

ReadPacket();