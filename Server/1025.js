function ReadPacket()
{
	/*if (packet.Length() < 1)
		return;

	var response = packet.ReadByte("Response code");

	if (response == 5)
	{
		packet.Log("Account is banned");
		
		if (packet.Length() >= 5)
			packet.ReadInt("Ban delay");
	}
	else if (response == 0)
	{
		if (packet.Length() < 3)
			return;
*/
		packet.ReadByte("Response code");
		var size = packet.ReadShort("BlockSize");

		//if (packet.Length() != (size + 3))
		//	return;

		packet.ReadByte("BlockNumber");
		packet.ReadByte("BlockId");
		packet.ReadInt("BlockStart");

		packet.Log("==============");
		packet.ReadByte("Block Id");
		packet.ReadLong("Account Id");
		packet.ReadInt("m_subscriptionLevel");
		packet.ReadInt("m_antiAddictionLevel");
		packet.ReadLong("m_accountExpirationDate");

		for (var i = 0; i < 95; ++i)
			packet.ReadInt("m_adminRights[" + i + "]");

		packet.ReadString("m_accountNickName");
		packet.ReadInt("m_accountCommunity ID, see Wl.java for IDs");

		var unkSize = packet.ReadShort("size of gOM, see bJZ.java");
		for (var j = 0; j < unkSize; ++j)
		{
			packet.ReadByte("key");
			packet.ReadLong("value");
		}

	packet.Log(packet.Length());
}

ReadPacket();