function ReadPacket()
{
	packet.Log("Scenario script");

	packet.ReadByte("isreward ? otherwise is event");
	packet.ReadInt("function to call ?");
	packet.ReadInt("ID du scenario");
	lsize = packet.ReadByte("long size");
	for (var i = 0; i < lsize; ++i)
		packet.ReadLong("argument " + i);

	packet.Log(packet.Length());
}

ReadPacket();