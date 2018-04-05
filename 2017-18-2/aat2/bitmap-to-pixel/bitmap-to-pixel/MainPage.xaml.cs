using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;
using Windows.Storage;
using Windows.Storage.Pickers;
using Windows.Graphics.Imaging;
using Windows.Storage.Streams;
using Windows.UI.Xaml.Media.Imaging;
using Windows.UI;
using System.Threading.Tasks;
using Windows.UI.Xaml.Shapes;

// The Blank Page item template is documented at https://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x409

namespace bitmap_to_pixel
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        private PixelDataProvider PixelData;
        private SoftwareBitmap Bitmap;

        public string ImportName { get; set; }
        public string Export { get; set; }

        public MainPage()
        {
            this.InitializeComponent();
        }

        private async void SetImportPath(object sender, RoutedEventArgs e)
        {
            FileOpenPicker fileOpenPicker = new FileOpenPicker
            {
                ViewMode = PickerViewMode.Thumbnail,
                SuggestedStartLocation = PickerLocationId.PicturesLibrary
            };
            fileOpenPicker.FileTypeFilter.Add(".bmp");

            StorageFile image = await fileOpenPicker.PickSingleFileAsync();
            if (image != null)
            {
                using (IRandomAccessStream stream = await image.OpenAsync(FileAccessMode.Read))
                {
                    BitmapDecoder decoder = await BitmapDecoder.CreateAsync(stream);
                    this.PixelData = await decoder.GetPixelDataAsync();
                    this.Bitmap = await decoder.GetSoftwareBitmapAsync();
                    if (this.Bitmap.BitmapPixelFormat != BitmapPixelFormat.Bgra8 || this.Bitmap.BitmapAlphaMode == BitmapAlphaMode.Straight)
                    {
                        this.Bitmap = SoftwareBitmap.Convert(this.Bitmap, BitmapPixelFormat.Bgra8, BitmapAlphaMode.Premultiplied);
                    }
                }
                SoftwareBitmapSource source = new SoftwareBitmapSource();
                await source.SetBitmapAsync(this.Bitmap);
                this.ImagePreview.Source = source;
                this.ImportName = image.Name;
                this.ImportPath.Text = image.Path;
                this.StartButton.IsEnabled = true;
            }
        }
        private async void SetExportPath(object sender, RoutedEventArgs e)
        {
            FileSavePicker fileSavePicker = new FileSavePicker
            {
                SuggestedStartLocation = PickerLocationId.Desktop,
                SuggestedFileName = this.ImportName != null ? this.ImportName : "export"
            };
            fileSavePicker.FileTypeChoices.Add("Plain Text", new List<string>() { ".txt" });

            StorageFile file = await fileSavePicker.PickSaveFileAsync();
            if (file != null)
            {
                this.Export = file.Path;

                this.Status.Text = "Exporting...";
                await Task.Run(() => { ExportToFile(file); });
                this.Status.Text = "Export complete.";
            }
        }

        private async void ExportToFile(StorageFile file)
        {
            int width = this.Bitmap.PixelWidth;
            int height = this.Bitmap.PixelHeight;
            byte[] imageBytes = this.PixelData.DetachPixelData();
            

            Color[][] colorMatrix = new Color[height][];
            for (int i = 0; i < height; ++i)
            {
                colorMatrix[i] = new Color[width];
                for (int j = 0; j < width; ++j)
                {
                    byte a = 255,
                         r = imageBytes[(i * width + j) * 4 + 2],
                         g = imageBytes[(i * width + j) * 4 + 1],
                         b = imageBytes[(i * width + j) * 4 + 0];
                    colorMatrix[i][j] = Color.FromArgb(a, r, g, b);
                }
            }

            string exportContent = "";
            foreach (Color[] row in colorMatrix)
            {
                foreach (Color color in row)
                {
                    exportContent += color.R + ":" + color.G + ":" + color.B + " ";
                }
                exportContent += "\n";
            }

            await FileIO.WriteTextAsync(file, exportContent);
        }
    }
}
