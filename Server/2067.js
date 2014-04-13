function ReadPacket()
{
	packet.ReadInt("size");
	var i = packet.ReadInt("i");
	
	for (var j = 0; j < i; ++j)
	{
		packet.ReadShort("unk");
		var size = packet.ReadInt("size");

		packet.ReadString(size, "str");
	}

	packet.Log(packet.Length());
}

ReadPacket();