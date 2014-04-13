function ReadPacket()
{
	packet.ReadLong("itemUniqueId");
	packet.ReadInt("unk");
	packet.ReadShort("quantity (stack)");
	packet.ReadLong("unk");
	packet.ReadShort("item ajouté à l'endroit désiré avec succès ? ou ID de l'endroit");

	packet.Log(packet.Length());
}

ReadPacket();