function ReadPacket()
{
	var response = packet.ReadByte("Response code");

	if (response == 5)
	{
		packet.Log("Account is banned");
		packet.ReadInt("Ban delay");
	}
	else if (response == 0)
	{
		var size = packet.ReadShort("BlockSize");

		packet.ReadByte("BlockNumber");
		packet.ReadByte("BlockId");
		packet.ReadInt("BlockStart");

		packet.Log("==============");
		packet.ReadByte("Block Id");
		packet.ReadLong("Account Id");

		packet.ReadInt("m_subscriptionLevel");
		packet.ReadInt("m_antiAddictionLevel");

		packet.ReadByte("m_additionalSlot");
		packet.ReadLong("m_accountExpirationDate");

		// m_heroesSubscriptions
		var heroCount = packet.ReadInt("Hero subscription count");
		for (var h = 0; h < heroCount; ++h)
		{
			packet.ReadInt("unkInt");
			packet.ReadLong("unkLong");
		}

		for (var i = 0; i < 100; ++i)
			packet.ReadInt("m_adminRights[" + i + "]");

		packet.ReadString("m_accountNickName");
		packet.ReadInt("m_accountCommunity ID, see Wl.java for IDs");

		var unkSize = packet.ReadShort("size of gOM, see bJZ.java");
		for (var j = 0; j < unkSize; ++j)
		{
			packet.ReadByte("key");
			packet.ReadLong("value");
		}
	}
}

ReadPacket();