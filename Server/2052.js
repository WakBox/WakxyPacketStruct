function ReadPacket()
{
	packet.ReadLong("characterId");
	packet.ReadByte("result");
}

ReadPacket();