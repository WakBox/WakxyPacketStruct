function ReadPacket()
{
	packet.ReadLong("character guid");
	packet.ReadInt("position x");
	packet.ReadInt("position y");
	packet.ReadShort("position z ?");
	packet.ReadByte("as bool");
	packet.ReadByte("as bool");
}

ReadPacket();