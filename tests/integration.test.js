
const fs = require('fs');
const path = require('path');

describe('Integration Tests for DevOps Application', () => {

    test('index.html should link to hello.html', () => {
        const content = fs.readFileSync(
            path.join(__dirname, '..', 'index.html'),
            'utf8'
        );

        expect(content).toContain('href="hello.html"');
    });

    test('hello.html should exist', () => {
        const filePath = path.join(__dirname, '..', 'hello.html');

        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('hello.html should contain Hello World from Jenkins!', () => {
        const content = fs.readFileSync(
            path.join(__dirname, '..', 'hello.html'),
            'utf8'
        );

        expect(content).toContain('Hello World from Jenkins!');
    });

});
