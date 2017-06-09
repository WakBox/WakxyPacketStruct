function ReadPacket()
{
	packet.ReadInt("fightId");
	packet.ReadInt("uniqueId");
	packet.ReadInt("triggeringActionUniqueId");
	packet.ReadBool("triggered");
	packet.ReadInt("runningEffectId");

	// baseImpl/common/clientAndServer/game/effect/runningEffect/RunningEffect.java
	var serializedRunningEffect = packet.ReadShort("serializedRunningEffect size");
	var blocks = packet.ReadByte("block length");

	for (var i = 0; i < blocks; ++i)
	{
		packet.ReadByte("index");
		packet.ReadInt("offset");
	}

	for (var i = 0; i < blocks; ++i)
	{
		packet.ReadByte("index");

		packet.ReadLong("getUniqueId");
		packet.ReadLong("getBaseUid");
		packet.ReadInt("getEffectId");
		packet.ReadInt("m_targetCell.getX");
		packet.ReadInt("m_targetCell.getY");
		packet.ReadShort("m_targetCell.getZ");
		packet.ReadInt("value");
	}

	/*

	while (packet.Length() > 0)
	{
		var serializedTarget = packet.ReadShort("serializedTarget");
		packet.ReadByte("length");
		packet.ReadByte("index");
		packet.ReadInt("offset");

		packet.ReadLong("targetId");

		packet.ReadInt("actionId");
		packet.ReadInt("triggerActionUniqueId");
	}*/
}

ReadPacket();