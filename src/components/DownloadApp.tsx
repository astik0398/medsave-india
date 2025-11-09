import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";

const DownloadApp = () => {
  
    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/medibachat.apk"; // path relative to public folder
    link.download = "medibachat.apk";
    link.click();
  };

  return (
    <section className="py-20 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="p-4 bg-gradient-primary rounded-2xl">
              <Smartphone className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Download Our Mobile App
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Get the best medicine price comparison app experience on your Android device. 
            Compare prices, find deals, and save money on medicines - all from your phone!
          </p>

          <Button
            onClick={handleDownload}
            size="lg"
            variant="hero"
            className="text-lg px-8 py-6 dark:text-white"
          >
            <Download className="mr-2 h-5 w-5" />
            Download APK
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Compatible with Android 5.0 and above
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;