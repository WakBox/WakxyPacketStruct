function ReadPacket()
{
	packet.Log("CharacterSelectionMessage");
	packet.ReadLong("CharacterId");
}

ReadPacket();