---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: Unblock your team boost your time to production
      color: text-dark
      type: TitleBlock
    subtitle: Subtitle goes here
    text: >
      A Netlify Create website is a git repo that you own. Every code commit is
      instantly reflected in the visual editor and since every visual edit is a
      git commit, git workflows and collaboration just work.
    actions:
      - label: Get started
        altText: ''
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
        type: Button
      - label: See Tutorials
        altText: ''
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Link
    media:
      url: /images/main-hero.svg
      altText: Unblock your team boost your time to production preview
      elementId: ''
      type: ImageBlock
    badge:
      label: This is a badge
      color: text-primary
      type: Badge
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
  - type: GenericSection
    title:
      type: TitleBlock
      text: Business Consulting
      color: text-dark
    subtitle: Be in good company
    text: |+
      <!DOCTYPE html>

      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Gold Generator from Dice Rolls</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 20px;
              }
              .container {
                  max-width: 400px;
                  margin: 0 auto;
                  text-align: center;
              }
              input\[type="number"], input\[type="checkbox"] {
                  padding: 10px;
                  margin: 10px 0;
              }
              button {
                  padding: 10px 20px;
                  font-size: 16px;
                  cursor: pointer;
                  background-color: #4CAF50;
                  color: white;
                  border: none;
                  border-radius: 5px;
              }
              button:hover {
                  background-color: #45a049;
              }
              .result {
                  margin-top: 20px;
                  font-size: 20px;
                  font-weight: bold;
              }
          </style>
      </head>
      <body>

      <div class="container">
          <h2>Gold Generator from Dice Rolls</h2>
          <p>Enter the number of dice rolls:</p>
          <input type="number" id="numRolls" min="1" placeholder="Number of rolls">
          
          <label for="noBunraku">No Bunraku</label>
          <input type="checkbox" id="noBunraku">
          
          <label for="otafukuMask">Otafuku Mask</label>
          <input type="checkbox" id="otafukuMask">
          
          <button onclick="calculateGold()">Calculate Gold</button>

          <div class="result" id="result"></div>

      </div>

      \<script>
          async function calculateGold() {
              // Get the number of rolls and checkbox states
              const numRolls = parseInt(document.getElementById('numRolls').value);
              const isNoBunraku = document.getElementById('noBunraku').checked;
              const isOtafukuMask = document.getElementById('otafukuMask').checked;

              // If input is invalid or less than 1, display an error message
              if (isNaN(numRolls) || numRolls < 1) {
                  document.getElementById('result').textContent = 'Please enter a valid number greater than 0.';
                  return;
              }

              // Prepare the request payload
              const payload = {
                  numRolls: numRolls,
                  noBunraku: isNoBunraku,
                  otafukuMask: isOtafukuMask
              };

              try {
                  // Send request to Netlify function
                  const response = await fetch('/.netlify/functions/dice-rolls', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(payload)
                  });

                  const result = await response.json();

                  // Display the result
                  if (response.ok) {
                      document.getElementById('result').textContent = \`Total gold from ${numRolls} rolls: ${result.totalGold}\`;
                  } else {
                      document.getElementById('result').textContent = result.error || 'Error occurred.';
                  }
              } catch (error) {
                  document.getElementById('result').textContent = 'Error occurred while processing your request.';
              }
          }
      </script>

      </body>
      </html>

    actions:
      - type: Button
        label: Get started
        url: /
        icon: arrowRight
        iconPosition: right
        style: secondary
      - type: Link
        label: See Tutorials
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
    media:
      type: ImageBlock
      altText: Dope design preview
    badge:
      type: Badge
      label: This is a badge
      color: text-primary
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row-reverse
seo:
  metaTitle: Home - Demo site
  metaDescription: This demo site is built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
