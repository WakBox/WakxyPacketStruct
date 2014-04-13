function parseID(){
        packet.ReadLong("CharacterID");
};

function parseIdentity(){
        packet.ReadByte("idType?");
        packet.ReadLong("Owner");
};

function parseAppearence(){
        packet.ReadByte("Sex");
        packet.ReadByte("SkinColor");
        packet.ReadByte("HairColor");
        packet.ReadByte("PupilColor");
        packet.ReadByte("SkinColorFactor");
        packet.ReadByte("HairColorFactor")
        packet.ReadByte("Cloth")
        packet.ReadByte("Face")
        packet.ReadShort("Title");
};

function parseEquip(){
        var equipCount = packet.ReadByte("EquipCount");
        for(var i = 0; i < equipCount; i++){
                packet.ReadByte("Slot[" + i + "]");
                packet.ReadInt("Skin Slot[" + i + "]");
        }
};

function parseXp(){
		for (var i = 0; i < 100; ++i)
			packet.ReadByte(i);
        packet.ReadLong("XP?");
        packet.ReadShort("FreePoint?");
        var idc = packet.ReadShort("??");
        for(var i = 0; i < idc; i++){
                packet.ReadByte("??[" + i + "]");
                packet.ReadShort("??[" + i + "]");
        }
        packet.ReadShort("Caract");
        for(var i = 0; i < idc; i++){
                packet.ReadByte("??[" + i + "]");
                packet.ReadShort("??[" + i + "]");
        }
        packet.ReadInt("Gauge");
};

function ReadPacket()
{
packet.ReadShort("?");
}

ReadPacket();