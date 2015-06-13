var path = require('path');
var fs = require('fs');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    Dev: {
        db: 'mongodb://SPAdmin:3xc311N@SG-DevSP-3211.servers.mongodirector.com:27017/DevSP?ssl=true',
        rootPath: rootPath,
        s3Bucket: 'DevSP',
        port: process.env.PORT || 3030,
        dboptions : {
            server: {
                ssl: true,
                sslCert: fs.readFileSync('./server/config/ssl/DevSP/mongodb-cert.crt'),
                sslKey: fs.readFileSync('./server/config/ssl/DevSP/mongodb-cert.key')}
        }

    },
    Master: {
        db: 'mongodb://SPAdmin:3xc311N@SG-MasterSP-3337.servers.mongodirector.com:27017/MasterSP?ssl=true',
        rootPath: rootPath,
        s3Bucket: 'MasterSP',
        port: process.env.PORT || 80,
        dboptions : {
            server: {
                ssl: true,
                sslCert: fs.readFileSync('./server/config/ssl/MasterSP/mongodb-cert.crt'),
                sslKey: fs.readFileSync('./server/config/ssl/MasterSP/mongodb-cert.key')}
        }
    }

}

