function ReadPacket()
{
	packet.ReadLong("actor id (NPC ?)");
	packet.ReadByte("direction");
}

ReadPacket();