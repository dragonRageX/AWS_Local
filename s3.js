const AWS = require("aws-sdk");
const dotenv = require("dotenv").config();
const fs = require("fs");

const s3 = new AWS.S3({
  endpoint: `http://localhost:${process.env.PORT}`, // required for localstack
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  s3ForcePathStyle: true, // required for localstack
});

const file = "./demo-text";
const fileName = "demo-text";
const defaultContent = "This is some default text for the file.";

const uploadFile = async () => {
    // Check if the file exists
    const fileExists = fs.existsSync(file);

    if (!fileExists) {
      // Create the file with default content
      await fs.promises.writeFile(file, defaultContent);
      console.log("File created:", file);
    }

    // Read the file content into a Buffer
    const data = await fs.createReadStream(file);

    const params = {
      Bucket: process.env.AWS_BUCKET,
      Key: fileName,
      Body: data,
    };

    // Upload the file to S3
    await s3.upload(params, (err, data) => {
        if (err) {
            console.log('Error uploading file:', err);
        } else {
            console.log('File uploaded successfully. File location:', data.Location);
        }
    });
};

uploadFile();
