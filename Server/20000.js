function ReadPacket()
{
	packet.Log("Synchronisation des nations");
	while (packet.Length() != 0)
	{
		packet.ReadInt("Nation ID");
		var j = packet.ReadInt("loop size");
		for (var k = 0; k < j; k++)
		{
			packet.ReadByte("NationPartId");
			packet.ReadLong("?");
			packet.ReadLong("?");
			packet.ReadLong("?");
			packet.ReadByte("?");
		}
	}

	packet.Log(packet.Length());
}

ReadPacket();