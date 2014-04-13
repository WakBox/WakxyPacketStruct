function ReadPacket()
{
	packet.ReadBool("Remove ?");

	var i = packet.ReadByte("long count");
	
	for (var j = 0; j < i; ++j)
		packet.ReadLong(j);

	packet.Log(packet.Length());
}

ReadPacket();