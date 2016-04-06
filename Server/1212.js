function ReadPacket()
{
	packet.ReadByte("resultCode");
	packet.ReadString(packet.ReadInt(), "Token");
}

ReadPacket();