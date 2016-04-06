function ReadPacket()
{
	packet.ReadByte("Reason");
	packet.ReadByte("ServerGroup");
}

ReadPacket();