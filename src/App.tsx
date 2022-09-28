import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";

interface FileFormat {
    enabled: Boolean;
    fileType: String;
}

interface SlideImagePermissions {
    canChangeAccess: Boolean;
    canDelete: Boolean;
    canDownload: Boolean;
    canRename: Boolean;
    canTag: Boolean;
}

interface SlideImageTags {
    createdAt: String;
    id: String;
    name: String;
    nameLowerCase: null | Object;
    numOfRef: Number;
    tagFormality: String;
}

interface Storage {
    availableFreeSpace: Number;
    bytesUsed: Number;
    clientAccessPathRoot: String;
    hostLocalPathRoot: String;
    id: String;
    storageType: String;
    tenantId: null | Object;
    totalSize: Number;
}

interface ImageData {
    access: String;
    createdAt: String;
    downloadGuard: String;
    fileFormat: FileFormat;
    fileName: String;
    fileSize: Number;
    id: String;
    ownedBy: String;
    relativePathTokens: String[];
    shareGuard: String;
    sharedWith: String[];
    slideId: String;
    slideImagePermissions: SlideImagePermissions;
    slideImageTags: SlideImageTags[];
    storage: Storage;
    suggestedAt: String;
}

function App() {
    const [images, setImages] = useState<ReactImageGalleryItem[]>([]);
    useEffect(() => {
        axios
            .get("https://imgmgt.api.preci.cloud/api/SlideImages")
            .then((response) => {
                const results: ImageData[] = response.data.data;
                let slideImages: ReactImageGalleryItem[] = [];
                results.forEach((item) => {
                    const original =
                        "https://wsi001.api.preci.cloud/api/WholeSlideImages/" +
                        item.id +
                        "/Thumbnails/512x512.jpeg";
                    const thumbnail =
                        "https://wsi001.api.preci.cloud/api/WholeSlideImages/" +
                        item.id +
                        "/Thumbnails/512x512.jpeg";
                    const thumbnailLabel = item.fileName + "";
                    const originalWidth = 400;
                    const originalHeight = 400;
                    slideImages.push({
                        original,
                        thumbnail,
                        thumbnailLabel,
                        originalWidth,
                        originalHeight,
                    });
                    console.log(slideImages);
                });
                setImages(slideImages);
            });
    }, []);
    return (
        <div className="App">
            <ImageGallery items={images} />
        </div>
    );
}

export default App;
