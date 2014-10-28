function ReadPacket()
{
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadLong("unk");
	packet.ReadByte("unk");
}

ReadPacket();