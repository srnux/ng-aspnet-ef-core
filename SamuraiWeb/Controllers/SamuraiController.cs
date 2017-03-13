using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Samurai.Data;

namespace Samurai.Controllers
{
  [Route("api/[controller]")]
  public class SamuraiController : Controller
  {
    private readonly DisconnectedData _repository;

    public SamuraiController(DisconnectedData repository) {
      _repository = repository;
    }

    [HttpGet]
    public IEnumerable<Domain.SamuraiReference> Get() {
      var list= _repository.GetSamuraiReferenceList();
      return list;
    }

    [HttpGet("{id}")]
    public Samurai.Domain.Samurai Get(int id)
    {
      return _repository.LoadSamuraiGraph(id);
    }

    //example raw json: {"name":"Julie","secretIdentity":{"realName":"Julia"}}
    [HttpPost]
    public void Post([FromBody] Samurai.Domain.Samurai value) {
      _repository.SaveSamuraiGraph(value);
    }

    //example raw json:{"id":"3","name":"Julietta","IsDirty":"true","secretIdentity":{"id":"3","realName":"Julia Lerman","IsDirty":"true"}}
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Samurai.Domain.Samurai value) {
      _repository.SaveSamuraiGraph(value);
    }

    [HttpDelete("{id}")]
    public void Delete(int id) {
      _repository.DeleteSamuraiGraph(id);
    }
  }
}