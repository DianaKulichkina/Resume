using System.Text.Json;
using WebUI.Interfaces;
using WebUI.Models;

namespace WebUI
{
    public class UserCommunicationsService : IUserCommunicationsService
    {
        public async Task<ApiResponse> SendContactFormEmail(Stream? requestBody)
        {
            if (requestBody == null) throw new ArgumentNullException(nameof(requestBody));

            var contactForm = await JsonSerializer.DeserializeAsync<ContactForm>(requestBody);

            return new ApiResponse(500, "");
        }
    }
}
