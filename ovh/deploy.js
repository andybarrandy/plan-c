var OVHStorage = require('node-ovh-objectstorage');

const OVH_BUCKET_NAME = 'planc-production';
const OVH_USERNAME = 'user-meK2PAZSBCXg';
const OVH_PASSWORD = 'hFF4k89XcSXeArqS5gYJbJu8htqJc7uk';
const OVH_TENANT_ID = '1d4674274b824a228b00d8d2ead5c8ea';



var config = {
  username: OVH_USERNAME,
  password: OVH_PASSWORD,
  authURL: 'https://auth.cloud.ovh.net/v3/auth',
  tenantId: OVH_TENANT_ID,
  region: 'BHS',
  // key is optional
  // key: "Temporary key (optional), for generate temporary download link",
  // options is optional
  options: {
    slugify : true, // true, by default
    check_exists: false, // true, by default
  }
};

async function init() {
  let storage = new OVHStorage(config);
  console.log("connected:", await storage.connection())
  return storage;
}

async function uploadFile(storage, container, basePath, filePath) {
  console.log("uploading", filePath);
  const partialFilePath = filePath.replace(basePath, '');
  await storage.objects().saveFile(`${filePath}`, `/${container}${partialFilePath}`);
}

const path = require('path');
const fs = require('fs').promises;

// function to list all file path in a directory recursively
async function listDir2(dir) {
  const r = [];
  const files = await fs.readdir(dir);
  for (const fileName of files) {
    const filePath = path.join(dir, fileName);
    const stats = await fs.stat(filePath);
    if (stats.isFile()) {
      if (!fileName.endsWith('.DS_Store')) {
        r.push(filePath);
      }
    } else if (stats.isDirectory()) {
      r.push(...await listDir2(filePath));
    }
  }
  return r;
}


(async function() {
  const basePath = '../public';
  const fileList = await listDir2(basePath);
  const storage = await init();
  console.log("START uploading");


  const promises = [];

  for (let i = 0; i < fileList.length; i++) {
    const filePath = fileList[i];
    promises.push(() => uploadFile(storage, OVH_BUCKET_NAME, basePath, filePath));
  }

  function runNext() {
    if (promises.length > 0) {
      return promises.shift()().then(runNext);
    }
  }

  // run 10 promises at a time
  const parallel = [];
  for (let i = 0; i < 10; i++) {
    parallel.push(runNext());
  }
  await Promise.all(parallel);

  console.log("FINISH uploading");
})()

