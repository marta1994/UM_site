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
        }

        public List<IconItem> IconItems = new List<IconItem>
        {
            new IconItem {
                Link = "https://www.facebook.com/UstymManchur/",
                Icon = "/images/facebook_icon.png"
            },
            new IconItem {
                Link = "viber://chat?number=+380631732306",
                Icon = "/images/viber_icon.jpg"
            },
            new IconItem {
                Link = "https://www.pinterest.com/ustym1996/",
                Icon = "/images/pinterest_icon.png"
            },
            new IconItem {
                Link = "https://www.instagram.com/y.m_jewelry/",
                Icon = "/images/instagram_icon.png"
            }
        };

        public void OnGet()
        {

        }
    }
}