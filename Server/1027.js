function ReadPacket()
{
	packet.ReadByte("AuthResultCode");
	packet.ReadBool("bool m_activateSteamLinkHint")

	if (packet.ReadBool("bool hasAccountInformations"))
	{
		packet.ReadInt("community");

		if (packet.ReadBool("bool hasAdminInformation"))
		{
		}
	}

	packet.Log(packet.Length());
}

ReadPacket();