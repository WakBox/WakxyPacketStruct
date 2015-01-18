function ReadPacket()
{
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadLong("characterId");
	packet.ReadInt("unk");
	packet.ReadInt("unk");
}

ReadPacket();