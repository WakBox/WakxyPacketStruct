function ReadPacket()
{
	packet.ReadByte("m_resultCode");

	if (packet.ReadBool("bool hasAccountInformations"))
	{
		packet.ReadInt("community");

		if (packet.ReadBool("bool hasAdminInformation"))
		{
			packet.ReadInt("size");
			packet.ReadLong("accountId");
			packet.ReadString(packet.ReadInt(), "name");

			var admSize = packet.ReadInt("admin right size");
			for (var i = 0; i < admSize; ++i)
			{
				packet.ReadInt("serverId");
				packet.ReadInt("rightId");
			}
		}

		packet.DumpBlob("account_status", packet.Length());
	}
}

ReadPacket();