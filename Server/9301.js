function ReadPacket()
{
	packet.ReadInt("territoire ID ?");
	packet.ReadByte("unk as bool");
}

ReadPacket();