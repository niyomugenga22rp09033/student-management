
const fs = require('fs');
const path = require('path');

describe('Unit Tests for DevOps Application', () => {

    test('index.html should exist', () => {
        const filePath = path.join(__dirname, '..', 'index.html');
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('hello.html should exist', () => {
        const filePath = path.join(__dirname, '..', 'hello.html');
        expect(fs.existsSync(filePath)).toBe(true);
    });

    test('index.html should contain Hello World from DevOps!', () => {
        const content = fs.readFileSync(
            path.join(__dirname, '..', 'index.html'),
            'utf8'
        );
        expect(content).toContain('Hello World from DevOps!');
    });

    test('index.html should contain Feature Branch Development', () => {
        const content = fs.readFileSync(
            path.join(__dirname, '..', 'index.html'),
            'utf8'
        );

        expect(content).toContain('Feature Branch Development');
        expect(content).toContain('feature-homepage');
    });

    test('hello.html should contain Hello World from Jenkins!', () => {
        const content = fs.readFileSync(
            path.join(__dirname, '..', 'hello.html'),
            'utf8'
        );

        expect(content).toContain('Hello World from Jenkins!');
    });

});
