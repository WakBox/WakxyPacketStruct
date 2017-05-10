function ReadPacket()
{
	packet.ReadString(packet.ReadInt(), "Token");
	packet.ReadLong("unk long");
}

ReadPacket();