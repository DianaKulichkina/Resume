using WebUI.Interfaces;

namespace WebUI.Extension
{
    public static class IServiceCollectionExtension
    {
        public static IServiceCollection AddDependencies(this IServiceCollection services)
        {
            services.AddTransient<IUserCommunicationsService, UserCommunicationsService>();

            return services;
        }
    }
}
