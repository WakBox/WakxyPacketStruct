function ReadPacket()
{
	packet.Log("userNotFound");
	var len = packet.ReadByte();
	packet.ReadString(len, "destination char name");
}

ReadPacket();