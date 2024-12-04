// Smoothie class
class Smoothie {
    constructor(name, base, ingredients, size) {
        this.name = name;
        this.base = base;
        this.ingredients = ingredients;
        this.size = size;
    }

    getDescription() {
        return `${this.name}, your smoothie with a ${this.base} base, the ingredients (${this.ingredients.join(', ')}), and size ${this.size} is ready!`;
    }
}

// Handling the form
document.getElementById('order-btn').addEventListener('click', () => {
    const name = document.getElementById('customer-name').value;
    const base = document.getElementById('base').value;
    const size = document.getElementById('size').value;

    // Get selected ingredients
    const ingredients = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
        ingredients.push(checkbox.value);
    });

    // Validate ingredient count
    if (ingredients.length > 3) {
        alert('Please select up to 3 ingredients only!');
        return;
    }

    // Create Smoothie object
    const smoothie = new Smoothie(name, base, ingredients, size);

    // Display summary
    const summary = document.getElementById('order-summary');
    summary.textContent = smoothie.getDescription();
    summary.style.display = 'block';
});
