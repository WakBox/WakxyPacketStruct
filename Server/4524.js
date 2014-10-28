function ReadPacket()
{
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadLong("unk");
	packet.ReadByte("unk");
	packet.ReadByte("unk");

	packet.Log(packet.Length());
}

ReadPacket();