// functions/dice-rolls.js

const rollDice = (sides) => Math.floor(Math.random() * sides) + 1;

const rollTwoDice = () => {
    const roll1 = rollDice(6);
    const roll2 = rollDice(6);
    return Math.max(roll1, roll2); // Select the highest roll
};

exports.handler = async (event, context) => {
    try {
        // Parse request payload
        const { numRolls, noBunraku, otafukuMask } = JSON.parse(event.body);

        let totalGold = 0;
        
        // Simulate dice rolls
        for (let i = 0; i < numRolls; i++) {
            let roll;
            if (otafukuMask) {
                // Use the highest of two dice rolls if Otafuku Mask is enabled
                roll = rollTwoDice();
            } else {
                // Use 3 or 6 sides based on No Bunraku setting
                const diceSides = noBunraku ? 3 : 6;
                roll = rollDice(diceSides);
            }

            let rollGold = 0;

            // Apply gold calculation based on dice roll
            switch (roll) {
                case 1:
                    rollGold = rollDice(6) + rollDice(6) + rollDice(6);
                    break;
                case 2:
                    rollGold = rollDice(6) + rollDice(6) + rollDice(6) + 10;
                    break;
                case 3:
                    rollGold = rollDice(6) + rollDice(6) + rollDice(6) + rollDice(6) + rollDice(6) + 5;
                    break;
                case 4:
                    rollGold = rollDice(6) + rollDice(6) + rollDice(6) + rollDice(6) + rollDice(6) + 10;
                    break;
                case 5:
                    rollGold = rollDice(6) + rollDice(6) + rollDice(6) + rollDice(6) + rollDice(6) + 15;
                    break;
                case 6:
                    rollGold = rollDice(6) + rollDice(6) + rollDice(6) + rollDice(6) + rollDice(6) + rollDice(6) + rollDice(6) + rollDice(6) + 30;
                    break;
            }

            totalGold += rollGold;
        }

        // Return the response with the total gold calculated
        return {
            statusCode: 200,
            body: JSON.stringify({ totalGold })
        };
    } catch (error) {
        // Handle any errors
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Error calculating gold.' })
        };
    }
};
