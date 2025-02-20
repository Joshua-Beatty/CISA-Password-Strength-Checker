import chalk from 'chalk'
import ask from 'askpassword';

const cyan = chalk.cyanBright

console.log(cyan.bold("Password Strength Checker"))
console.log(cyan('Please enter a password:'));
const password = (await ask(process.stdin)).toString();

type criterion = {
    message: string,
    filter: (a: string) => boolean
}
const criteria :criterion[] = [
    {
        message: "Password is at least 16 characters",
        filter: (x) => x.length > 15
    }, 
    {
        message: "Password contains uppercase letters",
        filter: (x) => !!x.match(/[A-Z]/)
    }, 
    {
        message: "Password contains lowercase letters",
        filter: (x) => !!x.match(/[a-z]/)
    }, 
    {
        message: "Password contains numbers",
        filter: (x) => !!x.match(/[1-9]/)
    }, 
    {
        message: "Password contains symbols",
        filter: (x) => !!x.match(/[^1-9a-zA-Z]/)
    }
]

const red = chalk.redBright
const green = chalk.greenBright
for(const test of criteria){
    const passed = test.filter(password)
    if(passed){
        console.log(green(`✔ ${test.message}`))
    } else {
        console.log(red(`✖ ${test.message}`))
    }
}