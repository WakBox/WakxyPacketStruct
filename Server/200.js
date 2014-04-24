function ReadPacket()
{
	var loop = packet.ReadShort("loop size");
	for (var i = 0; i < loop; ++i)
	{
		packet.ReadLong("instance elementId");
		packet.ReadShort("buffer size");

		var count = packet.ReadByte("block count");
		for (var j = 0; j < count; ++j)
		{
			packet.ReadByte("block id");
			packet.ReadInt("block start");
		}

		for (var m = 0; m < count; ++m)
		{
			var bId = packet.ReadByte("blockId");

			if (bId == 2)
			{
				packet.ReadShort("?");
				packet.ReadByte("isVisible");
				packet.ReadByte("isUsable");
				packet.ReadByte("?");
				packet.ReadByte("?");
				packet.ReadByte("?");
				var k = packet.ReadInt("k");
				//for (var p = 0; p < k; ++p)
				//	packet.ReadByte(p);
			}
			else if (bId == 3)
			{
				packet.Log("========================");
for (var u = 0; u < 8; ++u)				
packet.ReadByte(u);
			}
		}
	} 

	packet.Log(packet.Length());
}

ReadPacket();
