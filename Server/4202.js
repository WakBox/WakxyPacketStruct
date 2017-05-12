function ReadPacket()
{
	packet.Log("PartitionResourceInfoMessage");

	var partitionX = packet.ReadShort("partitionX");
	var partitionY = packet.ReadShort("partitionY");

	var i = packet.ReadShort("nbDifferentResources");

	for (var j = 0; j < i; ++j)
	{
		packet.ReadShort("refId");
		var k = packet.ReadShort("nResources");

		for (var l = 0; l < k; ++l)
		{
			/*
        final int relativeXY = serialized & 0x1FF;
        this.m_resourceX = partitionX * 18 + relativeXY / 18;
        this.m_resourceY = partitionY * 18 + relativeXY % 18;
        this.m_resourceZ = (short)(serialized >>> 9 & 0xFFFF);
        this.m_evolutionStep = (byte)(serialized >>> 25 & 0x1F);
        this.m_autoRespawn = ((serialized >>> 30 & 0x1) == 0x1);
this.m_justGrowth = (serialized >>> 31 == 1);
			*/
			var value = packet.ReadInt("serialized");

			var relativeXY = value & 0x1FF;
			packet.Log("relativeXY : " + relativeXY);
			packet.Log("resourceX : " + (partitionX * 18 + relativeXY / 18));
			packet.Log("resourceY : " + (partitionY * 18 + relativeXY % 18));
			packet.Log("resourceZ : " + (value >>> 9 & 0xFFFF));
			packet.Log("evolutionStep : " + (value >>> 25 & 0x1F));
			packet.Log("autoRespawn : " + ((value >>> 30 & 0x1) == 0x1));
			packet.Log("justGrowth : " + (value >>> 31 == 1));
		}
	}
}

ReadPacket();