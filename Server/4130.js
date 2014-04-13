function ReadPacket()
{
	packet.ReadLong("character guid");
	packet.ReadShort("buffer size");

	var charPart = packet.ReadByte("char part");
	
	if (charPart == 21)
	{
	if (packet.ReadByte("HasProperties") == 1)
	{
		var s = packet.ReadShort("size");
		for (var i = 0; i < s; ++i)
		{
			packet.ReadByte("id");
			packet.ReadByte("count");
		}
	}
	}
	else if (charPart == 24)
	{
		packet.ReadLong("character guid");
		var size = packet.ReadShort("size");
		for (var j = 0; j < size; ++j)
			packet.ReadInt("zaapId");
	}
	else if (charPart == 26)
	{
		var gSize = packet.ReadShort("guildEffects size");
		for (var k = 0; k < gSize; ++k)
			packet.ReadInt("guildEffect");

		var hSize = packet.ReadShort("havenWorldEffects size");
		for (var l = 0; l < hSize; ++l)
			packet.ReadInt("havenWorldEffect");

		var aSize = packet.ReadShort("antiAddictionEffects size");
		for (var m = 0; m < aSize; ++m)
			packet.ReadInt("antiAddictionEffect");		
	}
}

ReadPacket();