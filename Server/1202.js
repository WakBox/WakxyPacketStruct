/*
   private int bCT;
   private byte bkt;


   public boolean a(byte[] var1) {
      ByteBuffer var2 = ByteBuffer.wrap(var1);
      this.bCT = var2.getInt();
      this.bkt = var2.get();
      return true;
   }
*/

// Même paquet que 1201
function ReadPacket()
{
	packet.ReadInt("WorldId");
	packet.ReadByte("Result");
}
ReadPacket();