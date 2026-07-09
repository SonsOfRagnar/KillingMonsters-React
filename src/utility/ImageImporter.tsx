let images = new Map<string, string>();

function ImportBestiaryImages()
{
    const imagesImport = Object.values(import.meta.glob('../assets/images/bestiary/creatures/*.{png,jpg,jpeg,PNG,JPEG,webp}', { eager: true, query: '?url', import: 'default' }));

    imagesImport.forEach(element => {
        let splitURL = element.split("/");
        let imageName = splitURL[splitURL.length - 1];
        let imageExtension = "." + imageName.split(".")[1]; // image .extension
        imageName = imageName.split(".")[0]; // image name with no extension
        let sanitisedImageName = imageName.split("-")[0] + imageExtension; // we remove any -id added by the vite build process to ensure our name matches the entries.
    
        // via map
        images.set(sanitisedImageName, element);
    })
}

/** 
 * Returns the filepath for the image requested. 
 * Used to fix issues with github pages renaming/moving images in src/assets.
 * 
 * @param imageName The name of the image file to find.
 * @returns The absolute filepath to the image.
*/
function GetImage(imageName: string) : string
{
    const imagePath = images.get(imageName);
    
    if (imagePath != undefined)
    {
        return imagePath;
    }
    else
    {
        throw new Error("GetImage " + imageName + " returned undefined when attempting to retrieve filepath.");
    }
}


ImportBestiaryImages();

export 
{
    GetImage as GetImage
};