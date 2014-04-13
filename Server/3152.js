function ReadPacket()
{
	packet.Log("Chat message from server side");

	var len = packet.ReadByte();
	packet.ReadString(len, "From character name");
	packet.ReadLong("His guid ?");

	var lenM = packet.ReadByte();
	packet.ReadString(lenM, "The message");

	packet.Log(packet.Length());
}

ReadPacket();