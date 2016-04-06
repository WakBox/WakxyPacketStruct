function ReadPacket()
{
	packet.Log("ClientSystemConfigurationMessage");

	packet.ReadInt("size");
	var numProperties = packet.ReadInt("i");
	
	for (var i = 0; i < numProperties; ++i)
	{
		var type = packet.ReadShort();
		packet.ReadString(packet.ReadInt(), GetConfigurationType(type));
	}

	packet.Log(packet.Length());
}

function GetConfigurationType(id)
{
	var r = "TODO";

	switch (id)
	{
		case 1: r = "monitoredproperties.enable"; break;
		case 2: r = "calendar.delta"; break;
		case 3: r = "calendar.timezone"; break;
		case 4: r = "censor.enable"; break;
		case 5: r = "serverLanguage"; break;
		case 6: r = "clientCanDisableProfanityFilter"; break;
		case 7: r = "playerLevelCap"; break;
		case 8: r = "authorizedCharacterClass"; break;
		case 9: r = "worldInstances.forbidden"; break;
		case 10: r = "krosmozGames.enable"; break;
		case 11: r = "shopInGameInteractions.enable"; break;
		case 12: r = "contactModerator.enable"; break;
		case 13: r = "display.subscription.end.popup.enable"; break;
		case 14: r = "partner"; break;
		case 15: r = "shop.enable"; break;
		case 16: r = "soap.authenticationUrl"; break;
		case 17: r = "soap.accountUrl"; break;
		case 18: r = "soap.shopUrl"; break;
		case 19: r = "metrics.reporter.enable"; break; 
	}

	return r;
}

ReadPacket();