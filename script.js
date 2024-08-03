function calculateGaps() {
    const distance = parseInt(document.getElementById('distanceInput').value);
    const divisors = getDivisors(distance + 1);
    const gaps = divisors.map(divisor => divisor - 1);

    displaySchemas(distance, gaps);
}

function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

function displaySchemas(distance, gaps) {
    const schemasContainer = document.getElementById('schemas');
    schemasContainer.innerHTML = '';

    gaps.forEach(gap => {
        const schema = [];

        schema.push(1); // Start with 1

        while (schema.length <= distance + 1) {
            for (let i = 0; i < gap; i++) {
                schema.push(0); // Add gaps (0's)
                if (schema.length > distance + 1) break;
            }
            schema.push(1);
        }

        const schemaDiv = document.createElement('div');
        schemaDiv.classList.add('schema');

        schema.forEach(item => {
            const block = document.createElement('div');
            block.classList.add(item === 1 ? 'block-c' : 'gap');
            schemaDiv.appendChild(block);
        });

        schemasContainer.appendChild(schemaDiv);
    });
}
