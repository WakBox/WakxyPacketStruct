function ReadPacket()
{
	packet.Log("Map / Cellule ? En rapport avec packet 201");
	packet.ReadLong("??");
	var s = packet.ReadShort("size");
	for (var i = 0; i < s; ++i)
		packet.ReadByte(i);
}

ReadPacket();