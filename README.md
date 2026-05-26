# Meaning of Life — Alexa Skill

![Dutch Bros Alexa Skill](DutchBros_Alexa.png)

A custom Amazon Alexa skill that finally answers one of humanity's oldest questions. Ask Alexa what the meaning of life is and get the truth philosophers have overlooked for centuries: **Dutch Bros Coffee**.

---

## How to Use

1. Enable the skill on your Alexa device.
2. Say: **"Alexa, open meaning of life"**
3. Then ask: **"What is the meaning of life?"**
4. Alexa will respond: *"The meaning of life is Dutch Bros Coffee."*

---

## Project Structure

```
├── lambda/
│   ├── index.js                          # Lambda function handler (zero dependencies)
│   └── package.json                      # Node.js package info
├── skill-package/
│   ├── skill.json                        # Skill manifest
│   └── interactionModels/
│       └── custom/
│           └── en-US.json               # Intents and utterances
├── ask-resources.json                    # ASK CLI v2 project config
└── ask-states.json                       # ASK CLI deployment state
```

---

## Deployment

### Prerequisites

- [Node.js](https://nodejs.org/) v14+
- [ASK CLI](https://developer.amazon.com/en-US/docs/alexa/smapi/quick-start-alexa-skills-kit-command-line-interface.html) (`npm install -g ask-cli`)
- An [Amazon Developer account](https://developer.amazon.com/)
- An [AWS account](https://aws.amazon.com/) with CLI credentials configured (`aws configure`)

### Steps

**1. Clone the repo**
```bash
git clone https://github.com/ddavis83864/DutchBros.git
cd DutchBros
```

**2. Configure ASK CLI**
```bash
ask configure
```

**3. Deploy**
```bash
ask deploy
```

---

## Testing

### Browser (Recommended)
1. Go to [developer.amazon.com/alexa/console/ask](https://developer.amazon.com/alexa/console/ask)
2. Open the **Meaning of Life** skill
3. Click the **Test** tab and set the dropdown to **Development**
4. Type: `open meaning of life`
5. Then type: `what is the meaning of life`

### Real Alexa Device
Any Alexa device signed into the same Amazon developer account can run the skill in Development mode without publishing. Just say:
> *"Alexa, open meaning of life"*

---

## Sample Utterances

- *"What is the meaning of life?"*
- *"What's the meaning of life?"*
- *"Tell me the meaning of life."*
- *"What does life mean?"*

---

## Tech Stack

- **Runtime:** Node.js 18.x (AWS Lambda)
- **Dependencies:** None — zero-dependency handler
- **Deployment:** ASK CLI v2 with Lambda deployer
