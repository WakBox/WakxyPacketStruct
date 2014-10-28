function ReadPacket()
{
	packet.Log("SetAchievementVariable");
	packet.ReadInt("Variable");
	packet.ReadLong("Value");
}

ReadPacket();