using System.Collections.Generic;

namespace Samurai.Domain
{
  public class Samurai: ClientChangeTracker
  {
    public Samurai()
    {
      Quotes = new List<Quote>();
    }

    public int Id { get; set; }
    public string Name { get; set; }
    public List<Quote> Quotes { get; set; }
    public List<SamuraiBattle> SamuraiBattles { get; set; }
    public SecretIdentity SecretIdentity { get; set; }
  
  }
    public class SamuraiReference
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}