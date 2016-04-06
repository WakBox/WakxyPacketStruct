function ReadPacket()
{
	var realmSize = packet.ReadInt("Realm size");

	for (var i = 0; i < realmSize; ++i)
	{
		packet.ReadInt("ID");
		packet.ReadString(packet.ReadInt(), "Name");

		packet.ReadInt("Community");
		packet.ReadString(packet.ReadInt(), "IP");

		var ports = packet.ReadInt();
		for (var j = 0; j < ports; ++j)
			packet.ReadInt("Port [ " + j + "]");

		packet.ReadByte("Order");
	}

	realmSize = packet.ReadInt("Realm size");
	
	for (var i = 0; i < realmSize; ++i)
	{
		packet.ReadInt("ID");
		packet.ReadInt(); // version size
		packet.ReadByte("version1");
		packet.ReadShort("version2");
		packet.ReadByte("version3");
		packet.ReadString("build");

		packet.ReadInt(); // config size
		var configSize = packet.ReadInt("Config size");
		for (var j = 0; j < configSize; ++j)
		{
			packet.ReadShort("Key [ " + j + "]");
			packet.ReadString(packet.ReadInt(), "Value [ " + j + "]");
		}

		packet.ReadInt("PlayerCount");
		packet.ReadInt("PlayerLimit");
		packet.ReadBool("IsLocked");
	}
}

ReadPacket();