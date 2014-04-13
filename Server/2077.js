function ReadPacket()
{
	var size = packet.ReadByte("size");
	for (var i = 0; i < size; ++i)
	{
		packet.ReadLong("l1");
		packet.ReadShort("s");
		packet.ReadLong("l2");
		packet.ReadLong("l3");

		var strSize = packet.ReadInt("size");
		packet.ReadString(strSize, "str");

		packet.ReadByte("as bool -> == 1 ?");
		packet.ReadInt("i");
		packet.ReadInt("j");

		// TODO => dWD.java
		packet.ReadShort("contents size");
}

	packet.Log(packet.Length());
}

ReadPacket();