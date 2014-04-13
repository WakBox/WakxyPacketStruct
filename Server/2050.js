function ReadPacket()
{
	packet.ReadByte("character selection result 0 = success, 1 = failed");
}

ReadPacket();