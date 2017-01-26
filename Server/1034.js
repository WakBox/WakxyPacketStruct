function ReadPacket()
{
	packet.ReadULong("salt");
    var remaining = packet.Length();
	for (var i = 0; i < remaining; ++i)
		packet.ReadByte("publicKey[" + i + "]");
}

ReadPacket();