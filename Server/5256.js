function ReadPacket()
{
	var size = packet.ReadInt("Size");

	packet.ReadByte("byte");

	for (var i = 0; i < size; ++i)
		packet.ReadByte("Byte at " + i);
	
}

ReadPacket();