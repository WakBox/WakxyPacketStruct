function ReadPacket()
{
	var j = packet.ReadInt("size");

	for (var i = 0; i < j; ++i)
	{
		var type = packet.ReadInt("unserializer type (dCy.java: 0 = characters, 1 = company, 2 = EQUIPMENT_INVENTORY, 3 = EQUIPMENT_BUILD_SHEETS");

		if (type == 0)
		{
			packet.Log(">> CHARACTERS");
			var count = packet.ReadInt("characters");
			for (var k = 0; k < count; ++k)
			{
				packet.ReadLong("guid");
				packet.ReadShort("short");
			}
		}
		else if (type == 1)
		{
			packet.Log(">> COMPANY");

			packet.ReadLong("unk");
			packet.ReadLong("unk");
			packet.ReadInt("unk");
			packet.ReadLong("unk");
			packet.ReadString("unk", packet.ReadInt());
			packet.ReadInt("unk");
			packet.ReadBool("unk");
		}
	}
}

ReadPacket();