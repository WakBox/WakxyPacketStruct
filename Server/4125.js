function ReadPacket()
{
	// Position de départ ??
	packet.ReadInt("position x");
	packet.ReadInt("position y");
	
	packet.Log(packet.Length());
}

ReadPacket();