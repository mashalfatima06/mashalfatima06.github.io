// Form validation and handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('demoForm');
    const successMessage = document.getElementById('successMessage');

    if (!form) return;

    // Form fields - only add fields that exist in the DOM
    const fields = {
        fullName: document.getElementById('fullName'),
        email: document.getElementById('email'),
        company: document.getElementById('company'),
        industry: document.getElementById('industry'),
        companySize: document.getElementById('companySize'),
        monthlyVolume: document.getElementById('monthlyVolume'),
        message: document.getElementById('message'),
        terms: document.getElementById('terms')
    };

    // Error messages
    const errors = {
        nameError: document.getElementById('nameError'),
        emailError: document.getElementById('emailError'),
        companyError: document.getElementById('companyError'),
        industryError: document.getElementById('industryError'),
        interestsError: document.getElementById('interestsError'),
        sizeError: document.getElementById('sizeError'),
        termsError: document.getElementById('termsError')
    };

    // Validation rules
    const validators = {
        fullName: (value) => {
            if (!value.trim()) return 'Full name is required';
            if (value.trim().length < 2) return 'Name must be at least 2 characters';
            if (!/^[a-zA-Z\s'-]+$/.test(value)) return 'Name contains invalid characters';
            return '';
        },
        email: (value) => {
            if (!value.trim()) return 'Email is required';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) return 'Please enter a valid email';
            return '';
        },
        company: (value) => {
            if (!value.trim()) return 'Company name is required';
            if (value.trim().length < 2) return 'Company name must be at least 2 characters';
            return '';
        },
        industry: (value) => {
            if (!value) return 'Please select an industry';
            return '';
        },
        companySize: (value) => {
            if (!value) return 'Please select company size';
            return '';
        },
        interests: () => {
            const checked = document.querySelectorAll('input[name="interests"]:checked');
            if (checked.length === 0) return 'Please select at least one interest';
            return '';
        },
        terms: (checked) => {
            if (!checked) return 'You must agree to receive communications';
            return '';
        }
    };

    // Clear error message
    function clearError(fieldName) {
        const errorKey = fieldName + 'Error';
        if (errors[errorKey]) {
            errors[errorKey].textContent = '';
        }
    }

    // Show error message
    function showError(fieldName, message) {
        const errorKey = fieldName + 'Error';
        if (errors[errorKey]) {
            errors[errorKey].textContent = message;
        }
    }

    // Validate single field
    function validateField(fieldName) {
        const field = fields[fieldName];
        if (!field) return true;

        let value = field.type === 'checkbox' ? field.checked : field.value;
        const validator = validators[fieldName];

        if (validator) {
            const error = validator(value);
            if (error) {
                showError(fieldName, error);
                return false;
            } else {
                clearError(fieldName);
                return true;
            }
        }
        return true;
    }

    // Add real-time validation
    Object.keys(fields).forEach(fieldName => {
        const field = fields[fieldName];
        if (field) {
            field.addEventListener('blur', () => validateField(fieldName));
            field.addEventListener('change', () => validateField(fieldName));
            if (field.type !== 'checkbox') {
                field.addEventListener('input', () => {
                    if (field.value.trim()) {
                        clearError(fieldName);
                    }
                });
            }
        }
    });

    // Validate interests
    document.querySelectorAll('input[name="interests"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const isValid = validateField('interests');
            if (isValid) {
                clearError('interests');
            }
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        // Validate all fields BEFORE submission
        const fieldsToValidate = [
            'fullName', 'email', 'company', 
            'industry', 'companySize', 'interests', 'terms'
        ];

        let isFormValid = true;
        fieldsToValidate.forEach(fieldName => {
            if (!validateField(fieldName)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            e.preventDefault();
            // Scroll to first error
            const firstError = form.querySelector('.error:not(:empty)');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // If using Formspree, the form will submit normally
        // If not using Formspree (localhost), handle submission locally
        if (!form.action.includes('formspree')) {
            e.preventDefault();
            
            // Collect form data
            const formData = {
                fullName: fields.fullName.value,
                email: fields.email.value,
                company: fields.company.value,
                industry: fields.industry.value,
                companySize: fields.companySize.value,
                monthlyVolume: fields.monthlyVolume.value || 'Not specified',
                interests: Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(cb => cb.value),
                message: fields.message.value || 'None',
                timestamp: new Date().toLocaleString()
            };

            console.log('Form Data:', formData);
            localStorage.setItem('demoBooking_' + Date.now(), JSON.stringify(formData));

            // Show success message
            form.style.display = 'none';
            successMessage.style.display = 'block';
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        // If Formspree is configured, allow normal submission
    });

    // Initialize by clearing errors
    Object.keys(errors).forEach(errorKey => {
        if (errors[errorKey]) {
            errors[errorKey].textContent = '';
        }
    });
});

// Utility function to download form submissions as JSON
function downloadFormData() {
    const allData = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('demoBooking_')) {
            allData.push(JSON.parse(localStorage.getItem(key)));
        }
    }

    const dataStr = JSON.stringify(allData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'form_submissions_' + new Date().toISOString() + '.json';
    link.click();
}
