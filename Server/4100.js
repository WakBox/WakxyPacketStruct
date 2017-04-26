function ReadPacket()
{
	// goN
	packet.ReadShort("Size");

	packet.ReadByte("CharacterPartId");

	packet.ReadLong("Character Id");
	packet.ReadByte("id Type");
	packet.ReadLong("Owner id");

	packet.ReadInt("x");
	packet.ReadInt("y");
	packet.ReadShort("z");
	packet.ReadShort("InstanceId");
	packet.ReadByte("direction");
	if (packet.ReadByte("dimBagPosition") == 1)
	{
		packet.ReadInt("x");
		packet.ReadInt("y");
		packet.ReadShort("z");
		packet.ReadShort("instanceId");
	}

	// m_serializedProtectors
	var pSize = packet.ReadShort("m_serializedProtectors byte Size");
	packet.ReadShort("nbProtectors");

	// m_serializedProtectorInfos
	packet.ReadShort("serializedProtectorInfos");
	packet.ReadShort("nbProtectorsInfos");

	// Dungeon.proto Protobuf
	var protoBuildSize = packet.ReadShort("dungeon.proto size");
	packet.DumpBlob("dungeon", protoBuildSize);
}

ReadPacket();