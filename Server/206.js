function ReadPacket()
{
	while (packet.Length() > 0)
	packet.ReadByte("?");
}

ReadPacket();