function ReadPacket()
{
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadInt("unk");
	packet.ReadLong("monsterId or characterId => then targetId ?");
}

ReadPacket();