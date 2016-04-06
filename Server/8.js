function ReadPacket()
{
	packet.ReadByte("Bool VersionMatch ? 1 == true");
	packet.ReadByte("Version");
	packet.ReadShort("Revision");
	packet.ReadByte("Change");
	var buildSize = packet.ReadByte();

	packet.ReadString(buildSize, "Build");
}

ReadPacket();