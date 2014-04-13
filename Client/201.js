function ReadPacket()
{
	packet.Log("Chargement d'un élément interactif");
	packet.ReadLong("ID élément interactif");
	packet.ReadShort("Type élément interactif");
}

ReadPacket();