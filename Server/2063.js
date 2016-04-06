function ReadPacket()
{
	packet.Log("ClientCalendarSynchronizationMessage");
	packet.ReadLong("m_synchronizationTime");
}

ReadPacket();