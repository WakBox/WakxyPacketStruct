function ReadPacket()
{
	packet.ReadByte("Unk1");
	packet.ReadByte("Unk2");
	packet.ReadByte("Unk3");
	packet.ReadByte("Unk4");
}

ReadPacket();