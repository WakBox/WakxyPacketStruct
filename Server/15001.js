function ReadPacket()
{
	packet.Log("server time response");

	packet.ReadLong("server time");
	packet.ReadByte("is day [1] or night [0] ?");
	packet.ReadFloat("time state, day/night starting [f < 10], day/night ending [f > 90], day/night during [the rest]");
}

ReadPacket();