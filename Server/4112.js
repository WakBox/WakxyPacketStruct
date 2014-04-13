function ReadPacket()
{
	packet.Log("Modifier l'état d'un NPC");
	packet.ReadLong("NPC Id");
	packet.ReadByte("??");
}

ReadPacket();