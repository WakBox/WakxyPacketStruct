function ReadPacket()
{
	packet.ReadInt("AchievementId");
	packet.ReadLong("On {Sever time}");
}

ReadPacket();