import {error} from 'console';
import {appendFile,appendFileSync,unlink,mkdir,rmdir,rename,existsSync
} 
// Add content to the files at the end
from 'fs';
import os from 'os';
// import { cacheSignal } from 'react';
// appendFile('logs.txt',"This is a new Text",(error)=>{
//     if(error){
//         console.log("Error:",error);
//     }
// })

// Delete the files
// unlink("logs.txt",(error)=>{
//     console.log("error:",error);
// })

// Create Folder
// mkdir("videos",(error)=>{
//     console.log("Error:",error);
// })

// // Remove folder
// rmdir("videos",(error)=>{
//     console.log("error:",error);
// })

// Remove files and folders using a new method
// rm("public",{recursive: true, force:true})
// recursive: true --> removes folder contents too
// force: true --> avoids errors if the path does not exists

// rename('logs.txt',"password.txt",(error)=>{
//     console.log("Error:",error);
// })

// Checking if a file exists
// if(existsSync('Server.js')){
//     console.log("File Exists");
// }else{
//     console.log("File does not exist");
// }

// OS Module
console.log("Platform:",os.platform()); // OS Type
console.log("Architecture:",os.arch()); // CPU Artitecture
console.log("Hostname:",os.hostname()); // Device name
console.log("OS Name:",os.type()); // OS Name
console.log("OS Release:",os.release()); // OS Version
console.log("OS Version:",os.version()); // Description
console.log("Device Uptime:",os.uptime()); // How long the OS was running
console.log("Total Ram:",os.totalmem() / 1024 / 1024 / 1024); // Total RAM in Bytes
console.log("Free Memory:",os.freemem() / 1024 / 1024 / 1024);
// console.log("CPU:",os.cpus()); // Info about CPU Core
console.log("CPU Cores:",os.cpus().length); // Total CPU Cores
console.log("User Info:",os.userInfo()); // User Info
console.log("Network Interfaces:",os.networkInterfaces()); // Network Info
