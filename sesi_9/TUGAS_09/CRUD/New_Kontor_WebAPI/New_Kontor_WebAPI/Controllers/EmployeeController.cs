using New_Kantor_WebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace New_Kantor_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private EmployeeContext _context;
        public EmployeeController(EmployeeContext context)
        {
            this._context = context;
        }

        //Get : api/user
        [HttpGet(Name = "Get All")]
        public ActionResult<IEnumerable<EmployeeItem>> GetEmployeeItems()
        {
            _context = HttpContext.RequestServices.GetService(typeof(EmployeeContext)) as EmployeeContext;
            return _context.GetAllEmployee();

        }
        [HttpGet("{id}", Name = "Get")]
        public ActionResult<IEnumerable<EmployeeItem>> GetEmployeeItem(string id)
        {
            _context = HttpContext.RequestServices.GetService(typeof(EmployeeContext)) as EmployeeContext;
            return _context.GetEmployee(id);
        }
        [HttpDelete("{id}")]
        public ActionResult<IEnumerable<EmployeeItem>> DeleteEmployeeItem( string id)
        {
            _context = HttpContext.RequestServices.GetService(typeof(EmployeeContext)) as EmployeeContext;
            return _context.DeleteEmployee(id);
        }
        [HttpPut("{id}")]
        public ActionResult<IEnumerable<EmployeeItem>> PutEmployeeItem(string id,string nama , string jenisKelamin, string alamat)
        {
            _context = HttpContext.RequestServices.GetService(typeof(EmployeeContext)) as EmployeeContext;
            return _context.PutEmployee(id,nama,jenisKelamin,alamat);
        }
        [HttpPost]
        public ActionResult<IEnumerable<EmployeeItem>> PostEmployeeItem( string nama, string jenisKelamin, string alamat)
        {
            _context = HttpContext.RequestServices.GetService(typeof(EmployeeContext)) as EmployeeContext;
            return _context.PostEmployee(nama, jenisKelamin, alamat);
        }
    }
}
