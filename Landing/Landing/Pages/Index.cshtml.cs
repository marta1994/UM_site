using Landing.Helpers;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Landing.Pages
{
    public class IndexModel : PageModel
    {
        private readonly IUserAgentHelper userAgentHelper;

        public IndexModel(IUserAgentHelper userAgentHelper)
        {
            this.userAgentHelper = userAgentHelper;
        }

        public DeviceType DeviceType { get; private set; }

        public void OnGet()
        {
            DeviceType = userAgentHelper.DetermineDeviceType(HttpContext);
        }
    }
}
