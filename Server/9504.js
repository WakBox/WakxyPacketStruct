function ReadPacket()
{
	// Paquet météo ????

	packet.ReadInt("unk");
	packet.ReadByte("unk");

	packet.ReadShort("unk");
	packet.ReadFloat("unk");

	packet.ReadFloat("unk");

	packet.ReadFloat("unk");
	packet.ReadFloat("unk");
	packet.ReadFloat("unk");
	packet.ReadFloat("unk");
	packet.ReadFloat("unk");
	packet.ReadFloat("unk");
	packet.ReadFloat("unk");

	packet.Log(packet.Length());	
}

ReadPacket();