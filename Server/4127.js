function ReadPacket()
{
	packet.Log("ActorMoveToMessage");
	packet.ReadLong("actorId");
	packet.ReadInt("X");
	packet.ReadInt("Y");
	packet.ReadShort("Z");
	packet.ReadByte("Direction");
}

ReadPacket();