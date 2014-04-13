function ReadPacket()
{
	packet.Log("Connection retry ticket update");

	// Connection retry
	var length = packet.Length();
	if (length > 0)
		for (var i = 0; i < length; ++i)
			packet.ReadByte("Byte [" + i + "]");
}

ReadPacket();