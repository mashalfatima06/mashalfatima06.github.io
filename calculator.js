// Calculator Configuration
const SETUP_FEE = 2000;
const COST_PER_MINUTE = 0.05;

// Initialization function
function initCalculator() {
    // Get all input elements
    const currentCostInput = document.getElementById('currentCost');
    const monthlyMinutesInput = document.getElementById('monthlyMinutes');
    const agentsInput = document.getElementById('agents');
    const costPerAgentInput = document.getElementById('costPerAgent');

    // Get all output elements
    const currentMonthlyOutput = document.getElementById('currentMonthly');
    const currentAnnualOutput = document.getElementById('currentAnnual');
    const setupFeeOutput = document.getElementById('setupFee');
    const monthlyUsageOutput = document.getElementById('monthlyUsage');
    const mashaaiAnnualOutput = document.getElementById('mashaaiAnnual');
    const firstYearSavingsOutput = document.getElementById('firstYearSavings');
    const annualSavingsOutput = document.getElementById('annualSavings');
    const fiveYearSavingsOutput = document.getElementById('fiveYearSavings');

    // Verify elements exist
    if (!currentCostInput) return;

    function formatNumber(num) {
        return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function updateCalculator() {
        const currentCost = parseFloat(currentCostInput.value) || 0;
        const monthlyMinutes = parseFloat(monthlyMinutesInput.value) || 0;
        const agents = parseFloat(agentsInput.value) || 1;
        const costPerAgent = parseFloat(costPerAgentInput.value) || 0;

        // Calculate current system costs
        const currentMonthlyTotal = currentCost || (agents * costPerAgent);
        const currentAnnualTotal = currentMonthlyTotal * 12;

        // Calculate MashaAI costs
        const monthlyUsageCost = monthlyMinutes * COST_PER_MINUTE;
        const mashaaiAnnualTotal = (monthlyUsageCost * 12) + SETUP_FEE;

        // Calculate savings
        const firstYearSavingsAmount = currentAnnualTotal - mashaaiAnnualTotal;
        const annualSavingsAmount = currentAnnualTotal - (monthlyUsageCost * 12);
        const fiveYearSavingsAmount = (annualSavingsAmount * 5) - SETUP_FEE;

        // Update outputs
        currentMonthlyOutput.textContent = '$' + formatNumber(currentMonthlyTotal);
        currentAnnualOutput.textContent = '$' + formatNumber(currentAnnualTotal);
        setupFeeOutput.textContent = '$' + formatNumber(SETUP_FEE);
        monthlyUsageOutput.textContent = '$' + formatNumber(monthlyUsageCost);
        mashaaiAnnualOutput.textContent = '$' + formatNumber(mashaaiAnnualTotal);
        firstYearSavingsOutput.textContent = '$' + formatNumber(firstYearSavingsAmount);
        annualSavingsOutput.textContent = '$' + formatNumber(annualSavingsAmount);
        fiveYearSavingsOutput.textContent = '$' + formatNumber(fiveYearSavingsAmount);

    }

    // Add event listeners
    currentCostInput.addEventListener('input', updateCalculator);
    monthlyMinutesInput.addEventListener('input', updateCalculator);
    agentsInput.addEventListener('input', updateCalculator);
    costPerAgentInput.addEventListener('input', updateCalculator);

    // Initial calculation
    updateCalculator();
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCalculator);
} else {
    initCalculator();
}

