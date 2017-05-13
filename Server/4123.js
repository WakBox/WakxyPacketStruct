function ReadPacket()
{
	packet.Log("UnapplyStateMessage");
	var size = packet.ReadByte("size?") & 0xFF;
}

ReadPacket();