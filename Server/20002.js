function ReadPacket()
{
	packet.ReadLong("Character Guid");
	packet.ReadShort("Block size");
	packet.ReadByte("Block Id");

	packet.ReadInt("Nation Id");
	packet.ReadLong("Ranks");
	packet.ReadLong("Jobs");
	packet.ReadLong("Votedate");
	packet.ReadByte("Government Opinion");
	packet.ReadByte("IsCandidate");

	var gSize = packet.ReadShort("guild size");
	for (var i = 0; i < gSize; ++i)
		packet.ReadByte();

	packet.ReadInt("havenWorldId");
	packet.ReadFloat("moderationBonusLearningFactor");
	packet.Log(packet.Length());
}

ReadPacket();