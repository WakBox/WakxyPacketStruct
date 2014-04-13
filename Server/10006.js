function ReadPacket()
{
	packet.Log("Leaving le havre-sac -> resultat");
	packet.ReadByte("?");
}

ReadPacket();