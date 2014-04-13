function ReadPacket()
{
	packet.ReadByte("unk");
	packet.ReadInt("unk");
	packet.ReadInt("time (sec) ??");
	packet.ReadInt("challenge courant");
	packet.ReadInt("unk");
	packet.ReadLong("millisecond");
	packet.ReadInt("protectorId ?");
	packet.ReadInt("unk");
	packet.ReadByte("unk as bool");

	while (packet.Length() > 0)
		packet.ReadInt("unk");

	packet.Log(packet.Length());
}

ReadPacket();