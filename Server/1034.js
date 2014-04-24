function ReadPacket()
{
	packet.ReadULong("ihv");
	for (var i = 0; i < packet.Length(); ++i)
		packet.ReadByte("publicKey[" + i + "]");
}

ReadPacket();