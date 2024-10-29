const { test, expect } = require("@jest/globals");
const { spawn } = require("child_process");

test("Insufficient params", () => {
    const main = spawn("node", ["main.js", "avg"]);//No parameter
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });
    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
        expect(output).toBe("Insufficient parameter!");
    });
});

test("Wrong command", () => {
    const main = spawn("node", ["main.js", "sum", "1", "2", "3"]);//Wrong command
    const outputs = [];
    main.stdout.on("data", (chunk) => {
        outputs.push(chunk);
    });
    main.stdout.on("end", () => {
        const output = outputs.join("").trim();
    expect(output).toBe("Wrong command!");
    });
});
