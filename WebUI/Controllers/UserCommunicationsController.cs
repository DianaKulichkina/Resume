using Microsoft.AspNetCore.Mvc;
using WebUI.Interfaces;
using WebUI.Models;

namespace WebUI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserCommunicationsControllerController : ControllerBase
    {
        private readonly IUserCommunicationsService _userCommunicationService;
        private readonly ILogger<HomeController> _logger;

        public UserCommunicationsControllerController(IUserCommunicationsService userCommunicationService, ILogger<HomeController> logger)
        {
            _userCommunicationService = userCommunicationService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> ContactForm()
        {
            try
            {
                var apiResponse = await _userCommunicationService.SendContactFormEmail(Request.Body);
                return Content(apiResponse.Message!);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }
    }
}