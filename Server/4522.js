function ReadPacket()
{
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadLong("monsterId ?");
	packet.ReadByte("unk");
}

ReadPacket();