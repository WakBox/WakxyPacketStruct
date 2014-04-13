function ReadPacket()
{
	packet.ReadByte("result (0 = SUCCESS, 1 = userNotFound");
	var len = packet.ReadShort();
	packet.ReadString(len, "whois result");
}

ReadPacket();