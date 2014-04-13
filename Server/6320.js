function ReadPacket()
{
	packet.ReadInt("Action UID");
	packet.ReadInt("unk");

	packet.ReadByte("unk as bool");
	packet.ReadByte("unk as bool");

	packet.ReadInt("ActionId (= SpellId ?)");

	packet.ReadShort("bytes size");
	var count = packet.ReadByte("block count");
		for (var j = 0; j < count; ++j)
		{
			packet.ReadByte("block id");
			packet.ReadInt("block start");
		}

		for (var m = 0; m < count; ++m)
		{
			packet.Log("==============" + m + "==============");
			var bId = packet.ReadByte("blockId");

			if (bId == 0)
			{
				packet.ReadLong("itemUniqueId");
				packet.ReadLong("itemUniqueId");
				packet.ReadInt("effet generic ?");
			
				packet.ReadInt("unk");
				packet.ReadInt("unk");
				packet.ReadShort("unk");
				packet.ReadInt("unk");
			}
			else if (bId == 1)
			{
				packet.ReadLong("character guid");
			}
			else if (bId == 2)
			{
				packet.ReadLong("character guid");
			}
			else if (bId == 3)
			{
				packet.ReadInt("unk");
				
				for (var m = 0; m < 31; ++m)
					packet.ReadByte();
			}
			packet.Log("============================");
		}

	while (packet.Length() > 0)
	{
		var s = packet.ReadShort("bytes size");
		packet.ReadLong("character guid");

		packet.ReadInt("Action UID");
		packet.ReadInt("unk");
	}

	packet.Log(packet.Length());
}

ReadPacket();