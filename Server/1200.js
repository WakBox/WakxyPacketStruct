function ReadPacket()
{
	packet.ReadByte("World count");

	packet.ReadByte("WorldSize?");
	packet.ReadByte("BlockCount");

	packet.ReadByte("BlockId");
	packet.ReadInt("BlockStart");
	packet.ReadByte("BlockId");
	packet.ReadInt("BlockStart");
	packet.ReadByte("BlockId");
	packet.ReadInt("BlockStart");

	// Block 1
	packet.ReadByte("BlockId");
	packet.ReadInt("WorldID");
	var stringLength = packet.ReadByte();
	packet.ReadString(stringLength, "Always the same?");


	packet.ReadByte("BlockId");
	var worldNameLength = packet.ReadByte();
	packet.Log("WorldNameLength : " + worldNameLength);
	packet.ReadString(worldNameLength, "World Name");
	var worldLanguageLength = packet.ReadByte();
	packet.ReadString(worldLanguageLength, "World Language");

	packet.ReadByte("BlockId");
	packet.ReadByte("Online");
	packet.ReadByte("Full");
	packet.ReadByte("Population");

	packet.Log(packet.Length());
}

ReadPacket();