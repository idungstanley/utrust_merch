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
   - I chose Cypress as a tool to automate the process. The setup is referenced above.
   - I used GitHub workflows for continuous integration of the test, which allows and ensures teams receive immediate feedback to quickly mitigate as many risks as possible throughout the software development lifecycle. On every push I make, the process is handled automatically and the result is displayed on the Git actions where the jobs are being run.
   - I used Cucumber because it allows test cases to be written in simple feature files which are easily understood by managers, non-technical stakeholders, and business analysts.
   - All results can be viewed in the Cypress dashboard, which has been setup for this project. Steps to view the result
      - Navigate to `https://github.com/idungstanley/utrust_merch`
      - Click on Actions
      - Click on the latest workflow
      - Click on cypress run
      - Scroll to the end, you will the Recorded run 
      - Click on the linnk to view results

- How would you check if the email was really received to the email address? 
   - I utilize a service mailing tool called Mailosaur, which provides an automated email testing service that uses a virtual SMTP server. This tool lets you avoid managing a real server or, worse, sending untested emails to your customers. So I was able to utilize this service, thereby testing if the mail was successfully sent to the provided email address.
      - I logged the email subject to the console
      - Assert that the email subject received is the same with the one sent by the system
    

- How would you test the same scenario on different screen sizes?
   - I will test the scenario on different screen sizes using the inbuilt Cypress command, which is the cy.viewport(width,height). So this command, when placed above the test to be executed, handles the sizes based on the width, height provided and it also accepts strings. It also has built-in screen sizes for Mac and iPhones for mobile. This was also used in the test above. 
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