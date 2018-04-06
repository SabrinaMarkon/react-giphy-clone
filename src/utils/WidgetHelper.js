/* Uploading GIFs: we will be using Cloudinary to handle our images, including uploading and manipulating them */

export function uploadWidget(cloudinarySettings, cb) {
    window.cloudinary
        .openUploadWidget(cloudinarySettings, (err, res) => {
            console.error(err);
            cb(res);
        });
}