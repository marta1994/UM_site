using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;

namespace Landing.Pages.Mobile
{
    public class IconLineModel : PageModel
    {
        public class IconItem
        {
            public string Icon { get; set; }

            public string Link { get; set; }

            public string Class { get; set; }
        }

        public List<IconItem> IconItems = new List<IconItem>
        {
            new IconItem {
                Link = "https://www.facebook.com/UstymManchur/",
                Icon = "/images/facebook_icon.svg",
                Class = "facebook-link"
            },
            new IconItem {
                Link = "viber://chat?number=+380631732306",
                Icon = "/images/viber_icon.svg",
                Class = "viber-link"
            },
            new IconItem {
                Link = "https://www.pinterest.com/ustym1996/",
                Icon = "/images/pinterest_icon.svg",
                Class = "pinterest-link"
            },
            new IconItem {
                Link = "https://www.instagram.com/y.m_jewelry/",
                Icon = "/images/instagram_icon.svg",
                Class = "instagram-link"
            }
        };

        public void OnGet()
        {

        }
    }
}