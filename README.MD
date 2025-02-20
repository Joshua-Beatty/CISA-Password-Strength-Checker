# CISA Password Strength Checker
Verify that your password meets the American [Cybersecurity and Infrastructure Security Agency criteria](https://www.cisa.gov/secure-our-world/require-strong-passwords) for a secure password. Run the script and enter your password and see which of the criteria it passes.

![Example image](./example.png)

## Setup Instructions

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) (Comes with Node.js)

### Installation
To install dependencies, run:

```sh
npm install
```

## Running the Project
To start the project, use:
```sh
npm start
```

## Limitations
This password checker only checks the strength of a password against brute force attacks. It does not take into consideration dictionary attacks, or social engineering challenges.

## Responsible Use
While using a secure password is an important step in security. Other steps should be taken when applicable, like using 2FA, storing passwords in safe and secure places like a password manager, and not reusing passwords for multiple applications.