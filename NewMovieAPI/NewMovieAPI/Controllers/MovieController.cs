using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using NewMovieAPI.Data;
using NewMovieAPI.Models;

namespace NewMovieAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : Controller
    {
        private readonly ApiDbContext _context;
        public MovieController(ApiDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult> GetMovies()
        {
            var movies = await _context.Movies.ToListAsync();
            return Ok(movies);
        }
        [HttpPost]
        public async Task<IActionResult> CreateMovie(MovieItem data)
        {
            if (ModelState.IsValid)
            {
                await _context.Movies.AddAsync(data);
                await _context.SaveChangesAsync();
                return Ok(data);

            }
            else
            {
                return new JsonResult("Something went wrong") { StatusCode = 500 };
            }
            

        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMovie(int id)
        {
            var movie = await _context.Movies.FirstOrDefaultAsync(x => x.id == id);
            if (movie == null)
            {
                return NotFound();

            }
            return Ok(movie);

        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMovie(int id, MovieItem movie)
        {
            if (id != movie.id)
            {
                return BadRequest();
            }
            var selectedmovie = await _context.Movies.FirstOrDefaultAsync(x => x.id == id);
            if (selectedmovie == null)
                return NotFound();

            selectedmovie.nama = movie.nama;
            selectedmovie.genre = movie.genre;
            selectedmovie.duration = movie.duration;
            selectedmovie.releasedate = movie.releasedate;

            await _context.SaveChangesAsync();
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovie(int id)
        {
            var selecetedmovie = await _context.Movies.FirstOrDefaultAsync(x => x.id == id);
            if (selecetedmovie == null)
                return NotFound();

            _context.Movies.Remove(selecetedmovie);
            await _context.SaveChangesAsync();
            return Ok(selecetedmovie);
        }
    }
}
