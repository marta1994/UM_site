using Microsoft.AspNetCore.Http;

namespace Landing.Helpers
{
    public interface IUserAgentHelper
    {
        DeviceType DetermineDeviceType(HttpContext httpContext);
    }
}
