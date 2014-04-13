function ReadPacket()
{
	var len = packet.ReadByte();
	packet.ReadString(len, "from char name");

	packet.ReadLong("from char guid");

	var lenM = packet.ReadByte();
	packet.ReadString(lenM, "message");

	packet.Log(packet.Length());
}

ReadPacket();