function ReadPacket()
{
	packet.ReadLong("TargetGuid");
	packet.ReadLong("CharacterGuid");
	packet.ReadLong("ActionId ?");
}

ReadPacket();