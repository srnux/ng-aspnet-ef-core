﻿namespace Samurai.Domain
{
  public class SamuraiBattle:ClientChangeTracker
  {
    public int SamuraiId { get; set; }
    public Samurai Samurai { get; set; }
    public int BattleId { get; set; }
    public Battle Battle { get; set; }
   
  }
}