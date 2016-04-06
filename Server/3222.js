function ReadPacket()
{
	packet.Log("HasModerationRequestMessage");
	packet.ReadBool("hasRequests");
}

ReadPacket();