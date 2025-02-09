"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_1 = require("./file");
describe('FileMock', function () {
    var file;
    beforeEach(function () {
        file = file_1.FileMock.instance();
    });
    it('should initialise', function () {
        expect(file).toBeDefined();
    });
    describe('getFreeDiskSpace', function () {
        it('should should return 64', function (done) {
            file.getFreeDiskSpace().then(function (res) {
                expect(file.getFreeDiskSpace).toHaveBeenCalled();
                expect(res).toEqual(64);
                done();
            });
        });
    });
    describe('checkDir', function () {
        it('should should return true', function (done) {
            file.checkDir().then(function (res) {
                expect(file.checkDir).toHaveBeenCalled();
                expect(res).toEqual(true);
                done();
            });
        });
    });
    describe('createDir', function () {
        it('should should have been called', function (done) {
            file.createDir().then(function (res) {
                expect(file.createDir).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('removeDir', function () {
        it('should should have been called', function (done) {
            file.removeDir().then(function (res) {
                expect(file.removeDir).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('moveDir', function () {
        it('should should have been called', function (done) {
            file.moveDir().then(function (res) {
                expect(file.moveDir).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('copyDir', function () {
        it('should should have been called', function (done) {
            file.copyDir().then(function (res) {
                expect(file.copyDir).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('listDir', function () {
        it('should should have been called', function (done) {
            file.listDir().then(function (res) {
                expect(file.listDir).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('removeRecursively', function () {
        it('should should have been called', function (done) {
            file.removeRecursively().then(function (res) {
                expect(file.removeRecursively).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('checkFile', function () {
        it('should should return true', function (done) {
            file.checkFile().then(function (res) {
                expect(file.checkFile).toHaveBeenCalled();
                expect(res).toEqual(true);
                done();
            });
        });
    });
    describe('createFile', function () {
        it('should should have been called', function (done) {
            file.createFile().then(function (res) {
                expect(file.createFile).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('removeFile', function () {
        it('should should have been called', function (done) {
            file.removeFile().then(function (res) {
                expect(file.removeFile).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('writeFile', function () {
        it('should should have been called', function (done) {
            file.writeFile().then(function (res) {
                expect(file.writeFile).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('writeExistingFile', function () {
        it('should should have been called', function (done) {
            file.writeExistingFile().then(function (res) {
                expect(file.writeExistingFile).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('readAsText', function () {
        it('should should return \'a string\'', function (done) {
            file.readAsText().then(function (res) {
                expect(file.readAsText).toHaveBeenCalled();
                expect(res).toEqual('a string');
                done();
            });
        });
    });
    describe('readAsDataURL', function () {
        it('should should return \'data: , some % 20data\'', function (done) {
            file.readAsDataURL().then(function (res) {
                expect(file.readAsDataURL).toHaveBeenCalled();
                expect(res).toEqual('data:,some%20data');
                done();
            });
        });
    });
    describe('readAsBinaryString', function () {
        it('should should return \'101010\'', function (done) {
            file.readAsBinaryString().then(function (res) {
                expect(file.readAsBinaryString).toHaveBeenCalled();
                expect(res).toEqual('101010');
                done();
            });
        });
    });
    describe('readAsArrayBuffer', function () {
        it('should should return an ArrayBuffer one byte long', function (done) {
            file.readAsArrayBuffer().then(function (res) {
                expect(file.readAsArrayBuffer).toHaveBeenCalled();
                expect(res.byteLength).toEqual(1);
                done();
            });
        });
    });
    describe('moveFile', function () {
        it('should should have been called', function (done) {
            file.moveFile().then(function (res) {
                expect(file.moveFile).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('copyFile', function () {
        it('should should have been called', function (done) {
            file.copyFile().then(function (res) {
                expect(file.copyFile).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('resolveLocalFilesystemUrl', function () {
        it('should should have been called', function (done) {
            file.resolveLocalFilesystemUrl().then(function (res) {
                expect(file.resolveLocalFilesystemUrl).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('resolveDirectoryUrl', function () {
        it('should should have been called', function (done) {
            file.resolveDirectoryUrl().then(function (res) {
                expect(file.resolveDirectoryUrl).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('getDirectory', function () {
        it('should should have been called', function (done) {
            file.getDirectory().then(function (res) {
                expect(file.getDirectory).toHaveBeenCalled();
                done();
            });
        });
    });
    describe('getFile', function () {
        it('should should have been called', function (done) {
            file.getFile().then(function (res) {
                expect(file.getFile).toHaveBeenCalled();
                done();
            });
        });
    });
});
//# sourceMappingURL=file.spec.js.map