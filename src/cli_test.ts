import { Cli } from "./index";

interface parsed {
    test: string;
    verbose: string;
    name: string;
}

const cli = new Cli("cli-test", "just a test", "0.1.0", {
    verbose_parsing: true,
});

cli.add_option({
    name: { long: "--test", short: "-t" },
    is_flag: true,
    description: "test option",
});

cli.add_option({
    name: { long: "--verbose" },
    is_flag: true,
    description: "test option",
});

cli.add_option({
    name: { long: "--name", short: "-n" },
    is_flag: false,
    default: "senpai-10",
    description: "get username",
});

let parser: parsed = cli.parse();

console.log(parser);
