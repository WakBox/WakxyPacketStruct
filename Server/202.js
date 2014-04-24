function ReadPacket()
{
	packet.Log("Map / Cellule ? En rapport avec packet 201");
	packet.ReadLong("ElementId");
	var s = packet.ReadShort("buffer size");
	
		var count = packet.ReadByte("block count");
		for (var j = 0; j < count; ++j)
		{
			packet.ReadByte("block id");
			packet.ReadInt("block start");
		}

		for (var m = 0; m < count; ++m)
		{
			var bId = packet.ReadByte("blockId");

				packet.ReadShort("?");
				packet.ReadByte("isVisible");
				packet.ReadByte("isUsable");
				packet.ReadByte("?");
				packet.ReadByte("?");
				packet.ReadByte("?");
				var k = packet.ReadInt("k");
		}

packet.Log(packet.Length());
}

ReadPacket();