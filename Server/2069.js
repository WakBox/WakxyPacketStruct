function ReadPacket()
{
	packet.Log("AdditionalCharacterSlotsUpdate");
	packet.ReadByte("m_additionalSlots");
}

ReadPacket();