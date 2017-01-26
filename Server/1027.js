function ReadPacket()
{
	packet.ReadByte("AuthResultCode");

	if (packet.ReadBool("bool hasAccountInformations"))
	{
		packet.ReadInt("community");

		if (packet.ReadBool("bool hasAdminInformation"))
		{
			packet.ReadInt("size");
		}
	}

	packet.Log(packet.Length());
}

ReadPacket();