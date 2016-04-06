function ReadPacket()
{
	packet.Log("IgnoreListMessage");
	packet.ReadByte("List size");
}

ReadPacket();