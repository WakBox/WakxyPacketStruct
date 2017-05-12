function ReadPacket()
{
	packet.Log("ActorSpawnMessage");

	packet.ReadBool("myFightSpawn (0 = SpawnInWorld, 1= SpawnInMyFight)");
	var number = packet.ReadByte("charactersCount");

	for (var j = 0; j < number; ++j)
	{
		packet.Log("============= Actor " + j + "=============");
		
		/*
type 0 character = new PlayerCharacter();
type 1 character = NonPlayerCharacter.createNpc();
type 4 InteractiveNonPlayerCharacter();

		*/
		var type = packet.ReadByte("characterType");

		packet.ReadLong("characterId");
		var k = packet.ReadShort("serializedSize");

		if (type == 0)
		{
			packet.ReadByte("CharacterSerializerPart (9 - FOR_REMOTE_CHARACTER_INFORMATION)");
			packet.Skip(k - 1);
		}
		else
			packet.Skip(k);
	}
}

ReadPacket();