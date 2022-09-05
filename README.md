![](https://img.shields.io/badge/Utrust-merchants-blueviolet)
# utrust_merch

---

## Automation was built With

- Cypress
- GitHub workflows
- Mailosaur
- Cucumber
- Cypress Dashboard
---

---

## Getting Started

To run a local copy of this project follow these simple steps.

### Prerequisites

- Any Code Editor (e.g. Vscode)
- Installed Node.js

### Local Setup

- Create a new folder.
- Open your console in the new folder and run this command: 
`git clone https://github.com/idungstanley/utrust_merch.git`.
- Run this command on your terminal to install all the dependencies: `npm install`.
- Finally, run this command to start a local server of the project: `npm run test`.

### Questions and Answers

- We want to run this scenario automatically and frequently. What process/setup/tools would you choose to achieve this?
   - I chose cypress as a tool to automate the process, the setup is referenced above and I also used GitHub workflows for continuous integration of the test, which allows and ensure teams receive immediate feedback to quickly mitigate as many risks as possible throughout the software development lifecycle.

- How would you check if the email was really received to the email address? 
   - I utilize a software called Mailosaur, which provides an automated email testing service that uses virtual SMTP server, which lets you avoid managing a real server, or worse, sending untested emails to your customers. So i was able to utilize this service thereby testing if the mail was successfully sent to the provided emailAddress.

- How would you test the same scenario on different screen sizes?
   - I will test the scenario on different screen sizes using the inbuilt cypress command which is the cy.viewport(width,height), so this command when placed above the test to be executed, it handles the sizes based on the width and height provided, it also has built in screen sizes for mac and iphones for mobile. This was also used in the test cases 
## Authors

👤 **Stanley (Idung) Sunday**

- GitHub: [@idungstanley](https://github.com/idungstanley)
- Twitter: [@IdungStanley](https://twitter.com/IdungStanley)
- LinkedIn: [Stanley (Idung) Sunday](https://www.linkedin.com/in/sundaystanley56/)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/idungstanley/utrust_merch/issues).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./LICENSE) licensed.