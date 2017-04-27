function ReadPacket()
{
	var protoSize = packet.ReadInt("ProtoEquipmentAccount size");
    packet.DumpBlob("equipment_set", protoSize);
}

ReadPacket();
