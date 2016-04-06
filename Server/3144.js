function ReadPacket()
{
	packet.Log("FriendListMessage");
	packet.ReadByte("List size");
}

ReadPacket();