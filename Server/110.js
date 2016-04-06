function ReadPacket()
{
	packet.Log("Client IP address");
	packet.ReadUByte("Unk1");
	packet.ReadUByte("Unk2");
	packet.ReadUByte("Unk3");
	packet.ReadUByte("Unk4");
}

ReadPacket();