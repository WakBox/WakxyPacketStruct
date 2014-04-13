function ReadPacket()
{
	packet.Log("Emote result, see cNu");

	packet.ReadByte("emote state 1 = begin, 2 = end");
	packet.ReadShort("emote id ? can't be...");
	packet.ReadLong("character guid");

	while(packet.Length() > 0)
		packet.ReadByte("??");

	packet.Log(packet.Length());
}

ReadPacket();