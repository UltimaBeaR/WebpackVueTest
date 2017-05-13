using Microsoft.AspNetCore.Mvc;

namespace WebpackVueTest.Controllers
{
   public class HomeController : Controller
   {
      public IActionResult Index() {
         return View();
      }
   }
}
