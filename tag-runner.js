/**
 * This is own logic to read files from directory to check if the file contains the tag and then run the tests.
 */

/**
 * execSync: Execute a command synchronously this is a method from child_process module, used to synchronously execute a shell commands from within Nodejs.
 * fs: The fs module's promises API, allowing for the use of asynchronous file system operations with async/await.
 * path: The path module provides utilities for working with file and directory paths.
 */
// import { execSync } from 'child_process';
// import { promises as fs } from 'fs';
// import path from 'path';

// // Function to get all files in a directory recursively
// async function getAllFiles(dir) {
//   let results = [];
//   const list = await fs.readdir(dir);

//   for (const file of list) {
//     const filePath = path.join(dir, file);
//     const stat = await fs.stat(filePath);

//     if (stat.isDirectory()) {
//       const res = await getAllFiles(filePath);
//       results = results.concat(res);
//     } else if (stat.isFile()) {
//       results.push(filePath);
//     }
//   }

//   return results;
// }

// Define an async function to use await
// async function runTests() {
//   const tag = process.argv[2];

//   if (!tag) {
//     throw new Error('Tag is required');
//   }

//   const testDir = './test/specs';
//   let files;

//   try {
//     files = await getAllFiles(testDir);
//     console.log(`Found files: ${files.join(', ')}`);
//   } catch (err) {
//     console.error(`Error reading directory: ${err.message}`);
//     process.exit(1);
//   }

//   const taggedFiles = await Promise.all(
//     files.map(async (file) => {
//       let isTagged = false;

//       try {
//         const content = await fs.readFile(file, 'utf-8');
//         isTagged = content.includes(tag);
//         console.log(`File: ${file}, Contains Tag: ${isTaggconst { exec } = require('child_process');

// // Get the tag from command line arguments
// const tag = process.argv[2] || '';

// // Construct the command
// const command = `npx wdio run ./wdio.conf.js --mochaOpts.grep=${tag}`;

// // Execute the command
// exec(command, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });
// d}`);
// //         return isTagged ? file : null;
// //       } catch (err) {
// //         console.error(`Error processing file ${file}: ${err.message}`);
// //         return null;
// //       }
// //     })/ Get the tag from command line arguments
// const tag = process.argv[2] || '';

// // Construct the command
// const command = `npx wdio run ./wdio.conf.js --mochaOpts.grep=${tag}`;

// // Execute the command
// exec(command, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });
// d}`);
// //         return isTagged ? file : null;
// //       } catch (err) {
// //         console.error(`Error processing file ${file}: ${err.message}`);
// //         return null;
// //       }
// //     })
// //   );

// //   const filteredFiles = taggedFiles.filter(Boolean);

// //   if (filteredFiles.length === 0) {
// //     throw new Error(`No tests found with the tag ${tag}`);
// //   }

// //   const testFiles = filteredFiles.join(' ');
// //   execSync(`npx wdio run ./wdio.conf.js --spec ${testFiles}`, { stdio: 'inherit' });
// // }

// // Run the async function
// // runTests().catch((err) => {
// //   console.error(err);
// //   process.exit(1);
// // });


// /**
//  * This logic is built using fast-glob package to get all files in a directory recursively/parallelly to check if the file contains the tag and then run the tests.
//  */

// // import { execSync } from 'child_process';
// // import fs from 'fs/promises';
// // import path from 'path';
// // import glob from 'fast-glob';

// // const tag = process.argv[2];

// // if (!tag) {
// //   throw new Error('Tag is required');
// // }

// // async function runTests() {
// //   const testDir = './test/specs';

// //   // Use fast-glob to find all files matching the pattern
// //   const files = await glob(`${testDir}/**/*.js`);
// //   console.log(`Found files: ${files.join(', ')}`);

// //   // Read and filter files based on the tag
// //   const taggedFiles = await Promise.all(
// //     files.map(async (file) => {
// //       let isTagged = false;

// //       try {
// //         const content = await fs.readFile(file, 'utf-8');
// //         isTagged = content.includes(tag);
// //         console.log(`File: ${file}, Contains Tag: ${isTagged}`);
// //         return isTagged ? file : null;const { exec } = require('child_process');

// // Get the tag from command line arguments
// const tag = process.argv[2] || '';

// // Construct the command
// const command = `npx wdio run ./wdio.conf.js --mochaOpts.grep=${tag}`;

// // Execute the command
// exec(command, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });

// //       } catch (err) {
// //         console.error(`Error processing file ${file}: ${err.message}`);
// //         return null;
// //       }
// //     })
// //   );

// //   const filteredFiles = taggedFiles.filter(Boolean);

// //   if (filteredFiles.length === 0) {
// //     throw new Error(`No tests found with the tag ${tag}`);
// //   }

// //   const testFiles = filteredFiles.join(' ');
// //   execSync(`npx wdio run ./wdio.conf.js --spec ${testFiles}`, { stdio: 'inherit' });
// // }

// // runTests().catch((err) => {
// //   console.error(err);
// //   process.exit(1);
// // });

// import { execSync } from 'child_process';
// import fs from 'fs/promises';
// import path from 'path';
// import glob from 'fast-glob';

// const tag = process.argv[2];

// if (!tag) {
//   throw new Error('Tag is required');
// }

// async function runTests() {
//   const testDir = './test/specs';

//   // Use fast-glob to find all files matching the pattern
//   const files = await glob(`${testDir}/**/*.js`);
//   console.log(`Found files: ${files.join(', ')}`);

//   // Read and filter files based on the tag
//   const taggedFiles = await Promise.all(
//     files.map(async (file) => {
//       try {
//         const content = await fs.readFile(file, 'utf-8');
//         const isTagged = content.includes(tag);
//         console.log(`File: ${file}, Contains Tag: ${isTagged}`);
//         return isTagged ? file : null;
//       } catch (err) {
//         console.error(`Error processing file ${file}: ${err.message}`);
//         return null;
//       }
//     })
//   );

//   const filteredFiles = taggedFiles.filter(Boolean);

//   console.log(`Filtered files: ${filteredFiles.join(', ')}`);

//   if (filteredFiles.length === 0) {
//     throw new Error(`No tests found with the tag ${tag}`);
//   }

//   // Prepare test files for running
//   const testFiles = filteredFiles.join(',');
//   console.log(`Running tests in files: ${testFiles}`);
  
//   // Run only the filtered tests
//   execSync(`npx wdio run ./wdio.conf.js --spec ${testFiles}`, { stdio: 'inherit' });
// }

// runTests().catch((err) => {
//   console.error(err);
//   process.exit(1);
// });
// //   if (filteredFiles.length === 0) {
// //     throw new Error(`No tests found with the tag ${tag}`);
// //   }

// //   const testFiles = filteredFiles.join(' ');
// //   execSync(`npx wdio run ./wdio.conf.js --spec ${testFiles}`, { stdio: 'inherit' });
// // }

// // Run the async function
// // runTests().catch((err) => {
// //   console.error(err);
// //   process.exit(1);
// // });


// /**
//  * This logic is built using fast-glob package to get all files in a directory recursively/parallelly to check if the file contains the tag and then run the tests.
//  */

// // import { execSync } from 'child_process';
// // import fs from 'fs/promises';
// // import path from 'path';
// // import glob from 'fast-glob';

// // const tag = process.argv[2];

// // if (!tag) {
// //   throw new Error('Tag is required');
// // }

// // async function runTests() {
// //   const testDir = './test/specs';

// //   // Use fast-glob to find all files matching the pattern
// //   const files = await glob(`${testDir}/**/*.js`);
// //   console.log(`Found files: ${files.join(', ')}`);

// //   // Read and filter files based on the tag
// //   const taggedFiles = await Promise.all(
// //     files.map(async (file) => {
// //       let isTagged = false;

// //       try {
// //         const content = await fs.readFile(file, 'utf-8');
// //         isTagged = content.includes(tag);
// //         console.log(`File: ${file}, Contains Tag: ${isTagged}`);
// //         return isTagged ? file : null;const { exec } = require('child_process');

// // Get the tag from command line arguments
// const tag = process.argv[2] || '';

// // Construct the command
// const command = `npx wdio run ./wdio.conf.js --mochaOpts.grep=${tag}`;

// // Execute the command
// exec(command, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });

// //       } catch (err) {
// //         console.error(`Error processing file ${file}: ${err.message}`);
// //         return null;
// //       }
// //     })
// //   );

// //   const filteredFiles = taggedFiles.filter(Boolean);

// //   if (filteredFiles.length === 0) {
// //     throw new Error(`No tests found with the tag ${tag}`);
// //   }

// //   const testFiles = filteredFiles.join(' ');
// //   execSync(`npx wdio run ./wdio.conf.js --spec ${testFiles}`, { stdio: 'inherit' });
// // }

// // runTests().catch((err) => {
// //   console.error(err);
// //   process.exit(1);
// // });

// import { execSync } from 'child_process';
// import fs from 'fs/promises';
// import path from 'path';
// import glob from 'fast-glob';

// const tag = process.argv[2];

// if (!tag) {
//   throw new Error('Tag is required');
// }

// async function runTests() {
//   const testDir = './test/specs';

//   // Use fast-glob to find all files matching the pattern
//   const files = await glob(`${testDir}/**/*.js`);
//   console.log(`Found files: ${files.join(', ')}`);

//   // Read and filter files based on the tag
//   const taggedFiles = await Promise.all(
//     files.map(async (file) => {
//       try {
//         const content = await fs.readFile(file, 'utf-8');
//         const isTagged = content.includes(tag);
//         console.log(`File: ${file}, Contains Tag: ${isTagged}`);
//         return isTagged ? file : null;
//       } catch (err) {
//         console.error(`Error processing file ${file}: ${err.message}`);
//         return null;
//       }
//     })
//   );

//   const filteredFiles = taggedFiles.filter(Boolean);

//   console.log(`Filtered files: ${filteredFiles.join(', ')}`);

//   if (filteredFiles.length === 0) {
//     throw new Error(`No tests found with the tag ${tag}`);
//   }

//   // Prepare test files for running
//   const testFiles = filteredFiles.join(',');
//   console.log(`Running tests in files: ${testFiles}`);
  
//   // Run only the filtered tests
//   execSync(`npx wdio run ./wdio.conf.js --spec ${testFiles}`, { stdio: 'inherit' });
// }

// runTests().catch((err) => {
//   console.error(err);
//   process.exit(1);
// });


import { exec } from 'child_process';

// Get the tag from command line arguments
const tag = process.argv[2] || '';

// Construct the command
const command = `npx wdio run ./wdio.conf.js --mochaOpts.grep=${tag}`;

// Execute the command
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

