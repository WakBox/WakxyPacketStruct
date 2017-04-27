function ReadPacket()
{
	var protoSize = packet.ReadInt("ProtoMergedItems size");
	packet.DumpBlob("merged_items", protoSize);
}

ReadPacket();