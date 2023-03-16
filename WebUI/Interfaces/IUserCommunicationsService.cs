using WebUI.Models;

namespace WebUI.Interfaces
{
    public interface IUserCommunicationsService
    {
        public Task<ApiResponse> SendContactFormEmail(Stream? requestBody);
    }
}
