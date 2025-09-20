const os = require('os');

// OS name (platform)
console.log('OS Name:', os.type());        // e.g., 'Linux', 'Darwin', 'Windows_NT'

// Architecture
console.log('Architecture:', os.arch());   // e.g., 'x64', 'arm'

// Total RAM in GB (converted from bytes)
const totalRamGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
console.log('Total RAM:', totalRamGB, 'GB');

// CPU info
const cpus = os.cpus();
console.log('CPU Model:', cpus[0].model);
console.log('Number of CPUs:', cpus.length);