using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Landing.Pages.Mobile
{
    public class StepModel : PageModel
    {
        public StepModel(string imageSource, string header, string textContent)
        {
            ImageSource = imageSource;
            Header = header;
            TextContent = textContent;
        }

        public string ImageSource { get; set; }

        public string Header { get; set; }

        public string TextContent { get; set; }

        public void OnGet()
        {

        }
    }
}