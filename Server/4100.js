function ReadPacket()
{
	// -- CharacterInformation - 26
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
	// --

	// m_serializedProtectors
	packet.ReadShort("m_serializedProtectors byte Size");
	var nbProtectors = packet.ReadShort("nbProtectors");
	for (var i = 0; i < nbProtectors; ++i)
	{
		var size = packet.ReadShort("protector serialized size");
		packet.Skip(size);
	}

	// m_serializedProtectorInfos
	packet.ReadShort("serializedProtectorInfos");
	var nbProtectorsInfos = packet.ReadShort("nbProtectorsInfos");
	for (var i = 0; i < nbProtectorsInfos; ++i)
	{
		// this.jdField_b_of_type_JavaUtilArrayList.add(eDh.a((ByteBuffer)localObject));
		packet.ReadInt("m_id");
		packet.ReadInt("m_nation");
		packet.ReadBool("m_isChaos");
		packet.ReadInt("m_cash");
		packet.ReadFloat("m_fleaTaxValue");
		packet.ReadFloat("m_marketTaxValue");
		packet.ReadInt("m_currentSatisfaction");
		packet.ReadInt("m_currentSatisfaction");
	}

	// Dungeon.proto Protobuf
	var protoBuildSize = packet.ReadShort("dungeon.proto size");
	packet.DumpBlob("dungeon", protoBuildSize);
}

ReadPacket();