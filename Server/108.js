function ReadPacket()
{
	packet.ReadByte("serverGroup");
	packet.ReadInt("key");
	packet.ReadLong("nanotime from client");
	packet.ReadLong("??");
	packet.ReadLong("??");
}

ReadPacket();