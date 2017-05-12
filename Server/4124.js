function ReadPacket()
{
	packet.Log("CharacterHealthUpdateMessage");

	packet.ReadLong("characterId");
	packet.ReadInt("health");
	packet.ReadInt("healthRegen");
}

ReadPacket();